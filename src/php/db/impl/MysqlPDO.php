<?php

namespace Database\impl;

use PDO;
use PDOException;
use Exception;
use Response\HTTPResponse;

class MysqlPDO
{

    static function connect(): PDO
    {
        try {
            $conexion =  $_ENV['DATABASE'] . ":host=" . $_ENV['HOST'] .":". $_ENV['DB_PORT'] . ";dbname=" . $_ENV['DB_NAME'];
            $pdo = new PDO($conexion, $_ENV['USER'], $_ENV['PASSWORD'],array(PDO::ATTR_PERSISTENT => true));
            $pdo->exec("set names utf8");
            $pdo->setAttribute(\PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            throw new Exception("error al conectar a la base de datos", 500);
        }
    }
}
