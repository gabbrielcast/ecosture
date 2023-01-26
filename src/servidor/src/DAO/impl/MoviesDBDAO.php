<?php

namespace App\DAO\impl;

use App\DAO\IMoviesDAO;
use App\DTO\impl\MovieDTO;
use App\database\orm\DB;


class MoviesDBDAO implements IMoviesDAO
{

    static function create(MovieDTO $movie): int
    {
        return DB::table('peliculas')
            ->insert([
                'titulo' => $movie->titulo(),
                'anyo' => $movie->anyo(),
                'duracion' => $movie->duracion()
            ]);
    }

    static function read(): array
    {
        $result = array();
        $db_data = DB::table('peliculas')->select('*')->get();
        foreach ($db_data as $movie) {
            $result[] = new MovieDTO(
                $movie->id,
                $movie->titulo,
                $movie->anyo,
                $movie->duracion
            );
        }
        return $result;
    }

    static function findById(int $id): MovieDTO
    {
        // $params = [
        //     "id" => $id
        // ];
        // $sql = "SELECT * FROM peliculas WHERE id = :id LIMIT 1";
        $db_data = DB::table('peliculas')->find($id);
        $result = new MovieDTO(
            $db_data->id,
            $db_data->titulo,
            $db_data->anyo,
            $db_data->duracion
        );
        return $result;
    }

    static function update(int $id, MovieDTO $movie): bool
    {
        return DB::table('peliculas')
            ->where("id", "=", "$id")
            ->update(
                [
                    'titulo' => $movie->titulo(),
                    'anyo' => $movie->anyo(),
                    'duracion' => $movie->duracion()
                ]
            );
    }

    static function delete(int $id): bool
    {
        return DB::table('peliculas')
            ->where("id", "=", "$id")
            ->delete();
    }
}
