<?php

namespace Database\Factories;

use App\Models\Categoria;
use App\Models\Producto;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    private static $id=1;
    protected $model = Producto::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [
            'id'=>Str::random(3),
            'nombre'=>$this->faker->name(),
            'descripcion'=>$this->faker->text(30),
            'precio'=>$this->faker->randomFloat(2,12,40),
            'id_categoria'=>$this->faker->randomElement([1,2,3,4]),
        ];
    }
}
