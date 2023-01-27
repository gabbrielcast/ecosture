<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrito extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'id_usuario',
        'id_producto',
        'cantidad',
    ];
    protected $table = 'carrito';
    public $timestamps = false;
}
