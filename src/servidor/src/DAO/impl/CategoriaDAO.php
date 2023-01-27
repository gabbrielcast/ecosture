<?php

namespace Ecosture\DAO\impl;

use App\Models\Categoria;

class CategoriaDAO
{

    public static function index()
    {
        return Categoria::all()->toArray();
    }

    public static function show($id)
    {
        return Categoria::find($id)->toArray();
    }
}