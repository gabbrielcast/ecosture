<?php

namespace App\Http\Controllers;

use Ecosture\services\impl\TokenServicio;
use Exception;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __construct(private TokenServicio $servicio)
    {
     $this->servicio=new TokenServicio();   
    }
    public function login(Request $request){

        $user=(object)$request->input();
        try{

            $data=$this->servicio->validateNewLogin($user);
        }catch(Exception $e){
            return response(["Error"=>$e->getMessage()],400);
        }

        return response($data,200);
    
    }

    public function refresh(Request $request){
        
        try{
            $token=((object)$request->bearerToken()
            ??throw new Exception())->scalar??throw new Exception('Refresh Token no encontrado');

            $result=$this->servicio->validateRefreshToken($token);
        }catch(Exception $e){
            return response(['Error'=>$e->getMessage()],400);
        }

        return response(
            $result, 
            200
        );
    }
        
    

}
