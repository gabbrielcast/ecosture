<?php

namespace Ecosture\services\impl;

use Ecosture\DAO\impl\HistorialDAO;

class HistorialServicio
{
    static function historialCarritos($id){
        return HistorialDAO::show($id);
    }

    static function insert($compra){
        return HistorialDAO::insert($compra);
    }
}