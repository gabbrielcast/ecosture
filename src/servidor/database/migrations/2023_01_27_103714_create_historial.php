<?php

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
        Schema::create('historial', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('fecha');
            $table->boolean('pagado');
            $table->unsignedBigInteger('id_usuario')->unsigned();
            $table->string('id_producto');
            $table->bigInteger('cantidad');
        });

        Schema::table('historial', function($table)
        {
            $table->foreign('id_usuario')
                ->references('id')->on('users');
            $table->foreign('id_producto')
                ->references('id')->on('productos');
            // $table->foreign('id_carrito')
            //     ->references('id')->on('carrito');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('historial');
    }
};
