<?php

namespace App\auth;

use Response\HTTPResponse;
use Database\impl\MysqlPDO;
use Database\orm\DB;
use Exception;
use PDO;


class Auth{
    public function login(){

         
        $data=$this->validateNewLogin();
        $pdo=MysqlPDO::connect();
        $tokens=$this->createTokens();
        
        $this->setToken($pdo, $data['id'], $tokens->access_token, "access_token", $tokens->access_token_expires_in);
        $this->setToken($pdo, $data['id'], $tokens->refresh_token, "refresh_token", $tokens->refresh_token_expires_in,true);
            
        $response = [
            "TokenAcceso" => $tokens->access_token,
            "TokenRefresco" => $tokens->refresh_token,
            "user"=>$data['username']
        ];
            
        HTTPResponse::json(200,$response);
    
    }

    public function refresh(){
        
        $result=$this->validateRefreshToken();
        $pdo=MysqlPDO::connect();
        $tokens=$this->createTokens();

        $this->setToken($pdo,$result['id_user'],$tokens->access_token,"access_token",$tokens->access_token_expires_in);
        $this->setToken($pdo,$result['id_user'],$tokens->refresh_token,"refresh_token",$tokens->refresh_token_expires_in,true);

        HTTPResponse::json(
            200, 
            [
                "TokenAcceso"=>$tokens->access_token,
                "TokenRefresco"=>$tokens->refresh_token
            ]
        );
    }
        
    function setToken($pdo, $id_usuario, $token, $table, $expires_in, $active = null) {
        if ($table == "access_token") {
            $sql = "INSERT INTO access_token (id_user, token, expires_in) VALUES (:id_user, :token, :expires_in) 
                ON DUPLICATE KEY UPDATE token = :token, expires_in = :expires_in";
        } else {
            $last_token=DB::table('refresh_token')
            ->select('token')
            ->lastRow()
            ->get();

            count($last_token)==0?$last_token=['token'=>''] : $last_token=(array)$last_token[0];
            
            DB::table('refresh_token')
            ->where('token','=',$last_token['token'])
            ->update(['active'=>0]);
            
            $sql = "INSERT INTO refresh_token (id_user, token, expires_in, active) VALUES (:id_user, :token, :expires_in, true)";
        }
        
        $sth = $pdo->prepare($sql);
        $sth->bindParam(':id_user', $id_usuario, PDO::PARAM_INT);
        $sth->bindParam(':token', $token, PDO::PARAM_STR);
        $sth->bindParam(':expires_in', $expires_in, PDO::PARAM_INT);
        return $sth->execute();    
    }

    function createTokens(){
        $str = rand();
        $str2 = rand();
        $access_token = password_hash($str, PASSWORD_DEFAULT, ['cost' => 15]);
        $access_token_expires_in = strtotime("now + 900 seconds");
        $refresh_token = password_hash($str2, PASSWORD_DEFAULT, ['cost' => 15]);
        $refresh_token_expires_in = strtotime("now + 1 hours");

        return(object)
        [
            "access_token"=>$access_token,
            "access_token_expires_in"=>$access_token_expires_in,
            "refresh_token"=>$refresh_token,
            "refresh_token_expires_in"=>$refresh_token_expires_in
        ];
    }

    function validateNewLogin(){
        $json = file_get_contents('php://input');
        $user = json_decode($json);
            
        try {
            
            $usuario = $user->username??throw new Exception("", 400);
            $password = $user->password??throw new Exception("", 400);
            
        } catch (Exception $th) {
            HTTPResponse::json(400,["Error"=>"Peticion sin body"]);
            exit(0);
        }
    
        
        $data=(array)DB::table('user')
        ->select('id,password,username')
        ->where('username','=',$usuario)
        ->get();
        
        
        if (count($data)==0) {
            $data = [
                "Error" => "Credenciales invalidas"
            ];
            
            HTTPResponse::json(400,$data);
            exit(0);
        }
        
        $data=(array)$data[0];
        
        if(!password_verify($password, $data['password'])) {
            
            $data = [
                "Error" => "Credenciales invalidas"
            ];
            
            HTTPResponse::json(400,$data);
            exit(0);
        } 

        return $data;
    }

    function validateRefreshToken(){
        $token = ltrim(getallheaders()['Authorization'], 'Bearer ');

        if($token == "") {
            $data = [
                "Error" => "Token no encontrado"
            ];
            HTTPResponse::json(
                400,$data
            );
            exit(0);
        }
        
        try {
            $result=(array)DB::table('refresh_token')
            ->select('*')
            ->where('token','=',$token)
            ->get();
           
            count($result)==0 ? throw new Exception("Refresh Token Invalido, no se ha encontrado en BD", 400) :"";
            
            
        } catch (Exception $th) {
            
            HTTPResponse::json(
                404,["Error"=>$th->getMessage()]
            );
            exit(0);
        }

        $result=(array)$result[0];

        $now = strtotime("now");
       
        if($result['active']==0 || $now>$result['expires_in']){
            DB::table('refresh_token')
            ->where('id_user','=',$result['id_user'])
            ->update(['active'=>0]);
            HTTPResponse::json(401,["Error"=>"Refresh Token Expirado"]);
            exit(0);
        }

        return $result;
    }
    
}
