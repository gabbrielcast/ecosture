<?php

namespace Database\impl;

use PDO;
use PDOException;
use Exception;

class MysqlPDO
{

    static function connect(): PDO
    {
        try {
            $conexion =  $_ENV['DATABASE'] . ":host=" . $_ENV['HOST'] . ";dbname=" . $_ENV['DB_NAME'];

            $pdo = new PDO($conexion, $_ENV['USER'], $_ENV['PASSWORD']);
            $pdo->exec("set names utf8");
            $pdo->setAttribute(\PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $pdo;
        } catch (PDOException $e) {
            throw new Exception("error al conectar a la base de datos", 500);
        }
    }
}
