<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'nombre',
    ];
    public $timestamps = false;
    protected $table = 'categorias';


    protected $primaryKey = 'id';

}