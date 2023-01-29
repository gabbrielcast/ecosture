<?php 

namespace Ecosture\services\impl;

use Ecosture\DAO\impl\CarritoDAO;

class CarritoServicio
{
    

    public static function store(Array $compra){
        return CarritoDAO::create($compra);
    }
}