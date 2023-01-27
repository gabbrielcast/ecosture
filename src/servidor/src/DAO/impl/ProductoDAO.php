<?php

namespace Ecosture\DAO\impl;

use App\Models\Producto;

class ProductoDAO
{
    public function index(){
        return Producto::all();
    }

    public function show(string $id){
        
      $producto=Producto::find($id)->toArray();
        
      return $producto;
      
    }

    public function productosByCategoria($id){

        $productos=Producto::where('id_categoria','=',$id)->get()->toArray();

        return $productos;
        
    }
}