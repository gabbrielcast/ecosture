<?php

namespace Ecosture\DAO\impl;

use App\Models\Carrito;
use App\Models\Historial;

class CarritoDAO
{
    static function create(Array $compra)
    {
        
        $existe=Historial::where('fecha','=',$compra['fecha'])->get()->toArray();        

        if(isset($existe) && count($existe)>0){
            return['Carrito ya existe'];
        }
        Carrito::where('id_usuario','=',$compra["id_usuario"])->delete();
        foreach($compra['productos'] as $producto){

            Carrito::create([
                "fecha"=>$compra["fecha"],
                "id_usuario"=>$compra["id_usuario"],
                "id_producto"=>$producto["id_producto"],
                "cantidad"=>$producto["cantidad"]
            ]);
            Historial::create([
                "fecha"=>$compra['fecha'],
                "pagado"=>$compra['pagado'],
                "id_usuario"=>$compra["id_usuario"],
                "id_producto"=>$producto["id_producto"],
                "cantidad"=>$producto["cantidad"]
            ]);
        }
        return ["Carrito Insertado"];
       
    }
}