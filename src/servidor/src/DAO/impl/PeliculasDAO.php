<?php

namespace App\DAO\impl;

use App\DAO\IMoviesDAO;
use App\DTO\impl\MovieDTO;
use App\factories\ConexionFactory;
use Exception;
use PDO;


class PeliculasDAO implements IMoviesDAO
{
    private static $pdo;

    function __construct()
    {
        self::$pdo = ConexionFactory::conexion()::connect();
    }

    public static function create(MovieDTO $pelicula): int
    {
        $sql = "INSERT INTO peliculas (id, titulo, anyo, duracion)
        VALUES (:id, :titulo, :anyo, :duracion)";

        $params = [
            ":id" => null,
            ":titulo" => $pelicula->titulo,
            ":anyo" => $pelicula->anyo,
            ":duracion" => $pelicula->duracion
        ];

        $sth = self::$pdo->prepare($sql);
        $sth->execute($params);

        return true;
    }
    public static function read(): array
    {
        $peliculas = [];

        $sql = "SELECT * FROM peliculas";
        $sth = self::$pdo->prepare($sql);
        $sth->execute();

        foreach ($sth->fetchAll(PDO::FETCH_ASSOC) as $movie) {
            $movie = (object)$movie;
            array_push(
                $peliculas,
                new MovieDTO(
                    $movie->id,
                    $movie->titulo,
                    $movie->anyo,
                    $movie->duracion
                )
            );
        }

        return $peliculas;
    }
    public static function findById(int $id): MovieDTO
    {
        $sql = "SELECT * FROM peliculas where id=:id";
        $sth = self::$pdo->prepare($sql);

        $sth->bindParam(':id', $id, PDO::PARAM_INT);
        $sth->execute();


        $movie = $sth->fetchAll(PDO::FETCH_ASSOC)[0];

        $movie == null ?
            throw new Exception("No se Ha encontrado la pelicula") : $movie = (object) $movie;


        return new MovieDTO(
            $movie->id,
            $movie->titulo,
            $movie->anyo,
            $movie->duracion
        );
    }
    public static function update(int $id, MovieDTO $movie): bool
    {
        $sql = "UPDATE peliculas
        SET titulo = :titulo, anyo = :anyo, duracion = :duracion
        WHERE id= :id ;";

        $params = [
            ":id" => $movie->id,
            ":titulo" => $movie->titulo,
            ":anyo" => $movie->anyo,
            ":duracion" => $movie->duracion
        ];

        $sth = self::$pdo->prepare($sql);
        $sth->execute($params);

        $sth->rowCount() == 0 ?  throw new Exception("Recurso no encontrado") : "";

        return true;
    }
    public static function delete(int $id): bool
    {
        $sql = "DELETE FROM peliculas
                WHERE id= :id ;";

        $params = [
            ":id" => $id,
        ];

        $sth = self::$pdo->prepare($sql);
        $sth->execute($params);

        $sth->rowCount() == 0 ?  throw new Exception("Recurso no encontrado") : "";
        return true;
    }
}
