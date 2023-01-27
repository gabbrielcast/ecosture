<?php

namespace Ecosture\DAO\impl;

use App\Models\Producto;
use Ecosture\DTO\impl\ProductoDTO;
use Exception;

class ProductoDAO
{
    public function index(){
        try{

            $productos= Producto::all()??throw new Exception();
            $productos=$productos->toArray();
        }catch(Exception $e){
            return ["Error"=>"Producto no encontrado"];
        }
        

        $productosDTO=array_map(function ($producto){
            return new ProductoDTO(
                $producto['id'],
                $producto['nombre'],
                $producto['descripcion'],
                $producto['precio'],
                $producto['id_categoria']
            );
        },$productos);

        return $productosDTO;
    }

    public function show(string $id){

        try{
            $producto=Producto::find($id)??throw new Exception();
            $producto=$producto->toArray();
        }catch(Exception $e){
            return ["Error"=>"Producto no encontrado"];
        }
        
        $productoDTO=new ProductoDTO(
            $producto['id'],
            $producto['nombre'],
            $producto['descripcion'],
            $producto['precio'],
            $producto['id_categoria']
        );
            
        return $productoDTO;
        
    }

    public function productosByCategoria($id){

        try{
            $productos=Producto::where('id_categoria','=',$id)->get()->toArray();
            count($productos)==0?throw new Exception():"";
            
        }catch(Exception){
            return ["Error"=>"No existen productos para esa categoria"];
        }
        
        $productosDTO=array_map(function ($producto){
            return new ProductoDTO(
                $producto['id'],
                $producto['nombre'],
                $producto['descripcion'],
                $producto['precio'],
                $producto['id_categoria']
            );
        },$productos);

        return $productosDTO;   
    }
}