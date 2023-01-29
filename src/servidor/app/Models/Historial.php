<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historial extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'fecha',
        'pagado',
        'id_usuario',
        'id_producto',
        'cantidad',
    ];
    protected $table = 'historial';
    public $timestamps = false;
}
