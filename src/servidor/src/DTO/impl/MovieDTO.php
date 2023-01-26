<?php

namespace App\DTO\impl;

use JsonSerializable;
use App\DTO\IDTO;
use Exception;

class MovieDTO implements JsonSerializable, IDTO
{

    /**
     * @param $id int 
     * @param $titulo string 
     * @param $anyo int 
     * @param $duracion int 
     */
    function __construct(private ?int $id, private string $titulo, private string|int $anyo, private string|int $duracion)
    {
        $this->id = $id;
        $this->titulo = $titulo;
        $this->anyo = $anyo;
        $this->duracion = $duracion;
    }


    /**
     * @return int
     */
    public function id(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function titulo(): string
    {
        return $this->titulo;
    }

    /**
     * @return int
     */
    public function anyo(): int  | string
    {
        return $this->anyo ?? null;
    }

    /**
     * @return int
     */
    public function duracion(): int  | string
    {
        return $this->duracion ?? "";
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
            'titulo' => $this->titulo,
            'anyo' => $this->anyo,
            'duracion' => $this->duracion
        ];
    }

    static function createDTO(array $params): IDTO
    {

        !isset($params["titulo"], $params["anyo"], $params["duracion"])
            ? throw new Exception("Peticion mal formada", 400)
            : "";

        return new MovieDTO(null, $params["titulo"], $params["anyo"], $params["duracion"]);
    }
}
