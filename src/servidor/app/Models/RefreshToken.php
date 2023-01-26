<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RefreshToken extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'token',
        'expires_in',
        'active'
    ];

    protected $table = 'refresh_token';
    public $timestamps = false;
    
}
