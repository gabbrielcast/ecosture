<?php

use App\Models\Categoria;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nombre');
            $table->string('descripcion');
            $table->float('precio');
            $table->unsignedBigInteger('id_categoria')->unsigned();
        });
        
        Schema::table('productos', function($table)
        {
            $table->foreign('id_categoria')
                ->references('id')->on('categorias');
        });
        
     
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
};
