<?php

namespace App\DAO\impl;

use App\DTO\impl\MovieDTO;
use App\DAO\IMoviesDAO;
use App\DTO\impl\IDTO;
use Exception;

class MoviesJsonDAO implements IMoviesDAO
{

    private static $movies;

    function __construct()
    {
        $data = file_get_contents(base_path("src/data/peliculas.json"));

        self::$movies = array(json_decode($data));
    }


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
        $peliculas = self::$movies[0];


        array_map(function ($movie) use (&$result) {
            array_push(
                $result,
                new MovieDTO(
                    $movie->id,
                    $movie->titulo,
                    $movie->anyo,
                    $movie->duracion
                )
            );
        }, $peliculas,);

        // foreach ($peliculas as $movie) {
        //     array_push(
        //         $result,
        //         new MovieDTO(
        //             $movie->id,
        //             $movie->titulo,
        //             $movie->anyo,
        //             $movie->duracion
        //         )
        //     );
        // }


        $result = array_values($result);
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
        $peliculas = self::$movies[0];

        $movie = array_values(array_filter($peliculas, function ($peli) use ($id) {
            if ($peli->id == $id) {
                return $peli;
            }
        }));

        $movie == null ? throw new Exception("No se ha encontrado la pelicula") : $movie = $movie[0];

        return new MovieDTO(
            $movie->id,
            $movie->titulo,
            $movie->anyo,
            $movie->duracion
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
