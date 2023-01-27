<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Ecosture\DAO\impl\ProductoDAO;
use Ecosture\services\impl\ProductoServicio;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
    private ProductoServicio $servicio;
    function __construct()
    {   
        $this->servicio=new ProductoServicio(new ProductoDAO());
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos=$this->servicio->index();
        return response($productos,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response($this->servicio->show($id),200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        //
    }

    public function productosByCategoria($id){
        return response($this->servicio->productosByCategoria($id));
    }
}
