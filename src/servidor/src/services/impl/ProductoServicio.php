<?php
namespace Ecosture\services\impl;

use App\Models\Producto;
use Ecosture\DAO\impl\ProductoDAO;
use Ecosture\services\IServicio;

class ProductoServicio implements IServicio
{

    function __construct(private ProductoDAO $dao)
    {
        $this->dao=new ProductoDAO();
    }
    public function index(){
        return $this->dao->index();
    }
    public function create(){}
    public function show($id){
        return $this->dao->show($id);
    }
    public function productosByCategoria($id){
        return $this->dao->productosByCategoria($id);
    }
    public function update(){}
    public function delete(){}
}