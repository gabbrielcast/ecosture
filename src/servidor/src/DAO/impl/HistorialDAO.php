<?php 

namespace Ecosture\DAO\impl;

use App\Models\Carrito;
use App\Models\Historial;
use App\Models\Producto;
use Mockery\Undefined;

class HistorialDAO
{
    static function show($id)
    {
        $historial=Historial::where('id_usuario','=',$id)
        ->where('pagado','=',0)->get()->toArray();

        $fechas=array_map(function($producto){
            return [
                $producto['fecha'],
            ];
        },$historial);
        $fechas=array_values(array_unique($fechas,SORT_REGULAR)) ;

        $resultado=array_map(function($fecha){
            return $fecha[0];
        },$fechas);



        $carritos=array_map(function($fecha)use($historial){
            $carrito=array_map(function($producto) use($fecha){
                if($producto['fecha']==$fecha){
                    Producto::find($producto['id_producto']);

                    return[
                        "id_producto"=>$producto['id_producto'],
                        "precio"=>Producto::find($producto['id_producto'])->precio,
                        "cantidad"=>$producto['cantidad']
                    ];
                }
            },$historial);

            $carritos=array_filter($carrito);
            $precio=array_reduce($carritos,function($carry,$producto){
                return $carry+$producto['precio']*$producto['cantidad'];
            });
            return[
                "carritoID"=>$fecha,
                "precio"=>$precio,
                "productos"=>array_values( $carritos)
            ];
        }, $resultado);


        return $carritos;
    }

    static function insert($compra){
        Carrito::where('id_usuario','=',$compra["id_usuario"])->delete();

        $existe=Historial::where('fecha','=',$compra['fecha'])->get();
       
        // return $existe;

        // if(isset($existe) && count($existe)>0){
        //     return['Carrito ya existe'];
        // }

        if($compra['pagado']==1 && count($existe->toArray()??0)>0){
            Historial::where('fecha','=',$compra['fecha'])->update(['pagado'=>1]);

        }else{
            foreach($compra['productos'] as $producto){

                Historial::create([
                    "fecha"=>$compra['fecha'],
                    "pagado"=>$compra['pagado'],
                    "id_usuario"=>$compra["id_usuario"],
                    "id_producto"=>$producto["id_producto"],
                    "cantidad"=>$producto["cantidad"]
                ]);
            }
        }

        
        return ["Carrito Insertado"];
    }
}