<?php

namespace Middleware;

use Response\HTTPResponse;
use Database\impl\MysqlPDO;
use Database\orm\DB;
use Exception;
use PDO;

class Acceso{

    static function acceso(){

        try{

            $token = ltrim(getallheaders()['Authorization']??throw new Exception(), 'Bearer ');
        }catch(Exception){
            $data = [
                "Error" => "Token no encontrado"
            ];
            HTTPResponse::json(
                400,$data
            );
            return false;
        }
 
        if($token == "") {
            $data = [
                "Error" => "Token no encontrado"
            ];
            HTTPResponse::json(
                400,$data
            );
            return false;
        }
        
        try {
            $result=(array)DB::table('access_token')
            ->select('*')
            ->where('token','=',$token)
            ->get();
           
            count($result)==0 ? throw new Exception("Access Token no encontrado en BD", 400) :"";
            
            
        } catch (Exception $th) {
            
            HTTPResponse::json(
                404,["Error"=>$th->getMessage()]
            );
            return false;
        }
    
        $result=(array)$result[0];
       
        $now = strtotime("now");
        if ($now > $result["expires_in"]) {
            
            $data = ([
                "Error" => "Access Token expirado"
            ]);
            HTTPResponse::json(
                401,$data
            );
            return false;
        }
        return true;
        
    }
}