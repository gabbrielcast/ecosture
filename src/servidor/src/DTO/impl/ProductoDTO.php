<?php

namespace Ecosture\DTO\impl;

use JsonSerializable;

class ProductoDTO implements JsonSerializable
{
    /**
     * @param $id string 
     * @param $nombre string 
     * @param $descripcion string 
     * @param $precio int 
     */
    function __construct(private string $id, private string $nombre, private string $descripcion, private float $precio,private int $id_categoria)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->id_categoria = $id_categoria;
    }


    /**
     * @return string
     */
    public function id(): string
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function nombre(): string
    {
        return $this->nombre;
    }

    /**
     * @return int
     */
    public function descripcion():  string
    {
        return $this->descripcion;
    }

    /**
     * @return float
     */
    public function precio(): float
    {
        return $this->precio;
    }

    /**
     * @return int
     */
    public function idCategoria(): int
    {
        return $this->id_categoria;
    }
    /**
     * Specify data which should be serialized to JSON
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value of any type other than a resource .
     */
    function jsonSerialize(): mixed
    {

        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
            'precio' => $this->precio,
            'id_categoria' => $this->id_categoria
        ];
    }
}