<?php

use App\Http\Controllers\CarritoController;
use App\Http\Controllers\CategoriasController;
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





Route::post("/login",[LoginController::class,'login'])->middleware('cors');
Route::post("/refresh",[LoginController::class,'refresh'])->middleware('cors');


Route::get("/producto",[ProductosController::class,'index'])->middleware('cors');
Route::get("/producto/{id}",[ProductosController::class,'show'])->middleware('cors');
Route::get("/categoria/{id}/producto",[ProductosController::class,'productosByCategoria'])->middleware('cors');


Route::get("/categoria",[CategoriasController::class,'index'])->middleware('cors');
Route::get("/categoria/{id}",[CategoriasController::class,'show'])->middleware('cors');

Route::post("/carrito",[CarritoController::class,'store'])->middleware('cors');





