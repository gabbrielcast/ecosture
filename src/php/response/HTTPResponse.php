<?php

namespace Response;

class HTTPResponse
{
    static function json(int $codigo, $datos)
    {
        $result = [];

        if (gettype($datos) == "array") {

            $movies = array_filter($datos, function ($movie) {
                return  $movie;
            });

            $result = [
                "datos" => $movies
            ];
        } else {
            $result = [
                "datos" => $datos
            ];
        }

        http_response_code($codigo);
        header('Content-Type:application/json');

        echo json_encode($result);
    }
}
