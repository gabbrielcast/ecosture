<?php

namespace App\Http\Middleware;

use App\Models\AccesToken;
use App\Models\User;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckAccessToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        try{

            $token=ltrim($request->header('Authorization')??throw new Exception(),'Bearer ');

            
            if($token === "") {
                throw new Exception();
            }
            // $token = ltrim(getallheaders()['Authorization']??throw new Exception(), 'Bearer ');
        }catch(Exception){
            $data = [
                "Error" => "Token no encontrado"
            ];
            return response($data,400);
        }
 
        
        
        try {
           
            $result=DB::table('access_token')
            ->select('*')
            ->where('token','=',$token)
            ->get()[0];
            
        } catch (Exception $th) {
            
            return response(["Error"=>"Access Token no encontrado"],404);
        }
    
        
        // $result=(array)$result[0];
       
        $now = strtotime("now");
        if ($now > $result->expires_in) {
            
            $data = ([
                "Error" => "Access Token expirado"
            ]);

            return response($data,401);
        }
        // return true;
        return $next($request);
    }
}
