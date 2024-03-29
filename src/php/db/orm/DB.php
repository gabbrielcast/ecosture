<?php

namespace Database\orm;

use App\factories\ConexionFactory;
use Database\impl\MysqlPDO;

class DB
{
    private static function execute(string $sql, ?array $params = null): array | int
    {
        $pdo = MysqlPDO::connect();
        $ps = $pdo->prepare($sql);
        $ps->execute($params);
        return $ps->fetchAll(\PDO::FETCH_ASSOC);
    }

    public static function select(string $sql, ?array $params = null): array
    {
        $result = array();
        $data = self::execute($sql, $params);
        foreach ($data as $record) {
            $result[] = ((object) $record);
        }
        return $result;
    }

    public static function selectOne(string $sql, ?array $params = null): \stdClass
    {
        $data = self::execute($sql, $params);
        if (count($data) > 0) {
            return (object) $data[0];
        }

        throw new \Exception("Recurso no encontrado", 404);
    }

    public static function insert(string $sql, array $params): int
    {

        return self::executeNoResult($sql, $params);
    }

    public static function update(string $sql, array $params): bool
    {
        return self::executeNoResult($sql, $params);
    }

    public static function delete(string $sql, array $params): bool
    {
        return self::executeNoResult($sql, $params);
    }

    private static function executeNoResult(string $sql, array $params): int
    {
        $pdo = MysqlPDO::connect();
        try {
            $ps = $pdo->prepare($sql);

            $result = $ps->execute($params);

            if ($pdo->lastInsertId() > 0) {
                return $pdo->lastInsertId();
            }
            return $result;
        } catch (\Throwable $th) {
            throw new \Exception("Error al insertar el recurso", 400);
        }
    }

    public static function table(string $table): QueryBuilder
    {
        return new QueryBuilder($table);
    }
}
