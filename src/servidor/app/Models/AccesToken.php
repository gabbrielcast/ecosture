<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccesToken extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user',
        'token',
        'expires_in',
    ];
    public $timestamps = false;

    protected $table = 'access_token';
    protected $primaryKey = 'id_user';
}
