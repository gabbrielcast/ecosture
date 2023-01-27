<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductosController;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get("/hola",function(){
    return response(["datos"=>"hola"],200);
})->middleware('acceso');


Route::post("/login",[LoginController::class,'login']);
Route::post("/refresh",[LoginController::class,'refresh']);




Route::get("/producto",[ProductosController::class,'index']);
Route::get("/producto/{id}",[ProductosController::class,'show']);
Route::get("/categoria/{id}/producto",[ProductosController::class,'productosByCategoria']);


