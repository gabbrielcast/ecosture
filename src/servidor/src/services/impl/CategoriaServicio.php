<?php

namespace Ecosture\services\impl;

use Ecosture\DAO\impl\CategoriaDAO;

class CategoriaServicio
{
    private static CategoriaDAO $dao;
    public static function index(){
        self::$dao=new CategoriaDAO();
        
        return self::$dao::index();
    }

    public static function show($id){
        self::$dao=new CategoriaDAO();
        
        return self::$dao::show($id);
    }
}