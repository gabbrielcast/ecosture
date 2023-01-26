<?php

namespace App\DAO\impl;

use App\DTO\impl\MovieDTO;
use App\DAO\IMoviesDAO;
use Exception;

class MoviesStaticDAO implements IMoviesDAO
{

    private static $movies = [
        array(
            "id" => 1,
            "titulo" => "El padrino",
            "anyo" => 1972,
            "duracion" => 175
        ),
        array(
            "id" => 2,
            "titulo" => "El padrino 2",
            "anyo" => 1974,
            "duracion" => 200
        ),
        array(
            "id" => 3,
            "titulo" => "Senderos de gloria",
            "anyo" => 1957,
            "duracion" => 86
        ),
        array(
            "id" => 4,
            "titulo" => "Primera plana",
            "anyo" => 1974,
            "duracion" => 105
        )
    ];


    /**
     *
     * @param MovieDTO $movie
     *
     * @return bool
     */
    static function create(MovieDTO $movie): int
    {
        return 0;
    }

    /**
     *
     * @return array
     */
    static function read(): array
    {
        $result = array();

        foreach (self::$movies as $movie) {
            array_push(
                $result,
                new MovieDTO(
                    $movie['id'],
                    $movie['titulo'],
                    $movie['anyo'],
                    $movie['duracion']
                )
            );
        }

        return $result;
    }

    /**
     *
     * @param int $id
     *
     * @return MovieDTO
     */
    static function findById(int $id): MovieDTO
    {
        $movie = array_values(
            array_filter(self::$movies, fn ($movie) => $movie["id"] == $id)
        );

        $movie == null ? throw new Exception("No se ha encontrado la pelicula") : "";

        return new MovieDTO(
            $movie[0]["id"],
            $movie[0]["titulo"],
            $movie[0]["anyo"],
            $movie[0]["duracion"]
        );
    }

    /**
     *
     * @param int $id
     * @param MovieDTO $movie
     *
     * @return bool
     */
    static function update(int $id, MovieDTO $movie): bool
    {
        return false;
    }

    /**
     *
     * @param int $id
     *
     * @return bool
     */
    static function delete(int $id): bool
    {
        return false;
    }
}
