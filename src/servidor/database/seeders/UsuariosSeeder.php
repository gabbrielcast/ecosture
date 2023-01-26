<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'username'=>"ecosture",
            'password'=>'$2y$15$KI7F.Qawf2c0gJDjTvs52uGnZoU6KrKhS/EY0YuwFLu6Jy.JAMBqO'
        ]);
    }
}
