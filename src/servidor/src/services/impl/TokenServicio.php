<?php

namespace Ecosture\services\impl;

use App\Models\AccesToken;
use App\Models\RefreshToken;
use Ecosture\services\ITokenServicio;
use Exception;
use Illuminate\Support\Facades\DB;


class TokenServicio implements ITokenServicio
{
    
    public function setToken(object $data,object $tokens,string $table){
        if ($table == "access_token") {
           
            try{
                $at=AccesToken::find($data->id)??throw new Exception();
                $at->update([
                    'id_user'=>$data->id,
                    'token'=>$tokens->access_token,
                    'expires_in'=>$tokens->access_token_expires_in
                ]);
            }catch(Exception $th){
                AccesToken::create([
                    'id_user'=>$data->id,
                    'token'=>$tokens->access_token,
                    'expires_in'=>$tokens->access_token_expires_in
                ]);
            }
            
            
        } else {
            RefreshToken::where('active','=',1)
                ->update(['active'=>0]);
            RefreshToken::create([
                'id_user'=>$data->id,
                'token'=>$tokens->refresh_token,
                'expires_in'=>$tokens->refresh_token_expires_in,
                'active'=>1
            ]);
            
        }
    }
    public function createTokens(){
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
    public function validateNewLogin(object $user){
       
        try {
            
            $usuario = $user->username??throw new Exception("", 400);
            $password = $user->password??throw new Exception("", 400);
            
        } catch (Exception $th) {
            throw new Exception("Peticion sin body", 400);
           
        }
        $data=null;
        try{

            $data=DB::table('users')
            ->select(['id','password','username'])
            ->where('username','=',$usuario)
            ->get()[0];
        }catch(Exception $th){
            throw new Exception("Credenciales invalidas", 400);
        }
        
        
        if(!password_verify($password, $data->password)) {
            throw new Exception("Credenciales invalidas", 400);
            
        } 
        $data=(object)$data;
        
        $tokens=$this->createTokens();
        $this->setToken($data,$tokens,"access_token");
        $this->setToken($data,$tokens,"refresh_token");

        return [
            "TokenAcceso" => $tokens->access_token,
            "TokenRefresco" => $tokens->refresh_token,
            "user"=>$data->username,
            "userId"=>$data->id
        ];
        
    }
    public function validateRefreshToken(string $token){
    
        if($token == "") {
            throw new Exception("Token no encontrado", 400);
        }
        
        try{

            $result=DB::table('refresh_token')
            ->select('*')
            ->where('token','=',$token)
            ->get()[0];
        }catch(Exception $e){
            throw new Exception("Token no encontrado",404);
        }
      

        
        $refresh_token=$result->token;
      
       
        $now = strtotime("now");
       
        if($result->active==0 || $now>$result->expires_in){
           
            DB::table('refresh_token')
            ->where('id_user','=',$result->id_user)
            ->update(['active'=>0]);
            throw new Exception('Refresh Token Caducado');
        }

        
        $data=[
            'id'=>$result->id_user,
            'token'=>$result->token,
            'expires_in'=>$result->expires_in,
            'active'=>$result->active
        ];

        $tokens=$this->createTokens();
        $this->setToken((object)$data,$tokens,"access_token");
        
        $this->setToken((object)$data,$tokens,"refresh_token");

        

        return [
            "TokenAcceso"=>$tokens->access_token,
            "TokenRefresco"=>$tokens->refresh_token
        ];
    }
}