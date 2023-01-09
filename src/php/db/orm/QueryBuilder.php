<?php

namespace Database\orm;

use Exception;
use stdClass;

class QueryBuilder
{
    private string $fields = '*';

    private string $where = "";

    private ?array $params = null;

    private string $orderBy="";

    private string $sql = '';
    private string $join = '';
    private string $limit = '';
    private int $rowsByPage = 2;

    function __construct(private string $table)
    {
        $this->table = $table;
    }

    public function select(?string $fields = null)
    {
        $this->fields = (is_null($fields)) ? '*' : $fields;
        return $this;
    }

    public function where(string $field, string $condition, ?string $value)
    {
        if (is_null($value)) {
            $value = $condition;
            $condition = '=';
        }

        $this->where = "WHERE $field $condition :$field";
        $this->params[":$field"] = $value;
        return $this;
    }

    public function orderBy($param,$order){

        $this->orderBy="ORDER BY $param $order";
        return $this;
    }

    public function lastRow(){

        $this->orderBy="ORDER BY id DESC LIMIT 1";
        return $this;
    }
    public function get(): array
    {
        $this->sql = "SELECT $this->fields FROM $this->table $this->join $this->where $this->orderBy $this->limit";
        // dd($this);
        return DB::select($this->sql, $this->params);
    }

    public function getOne(): stdClass
    {
        $this->sql = "SELECT $this->fields FROM $this->table $this->where LIMIT 1";
        return DB::selectOne($this->sql, $this->params);
    }

    public function limit(int $page)
    {
        if ($page > 0) {
            $start = ($page - 1) * $this->rowsByPage;
            $this->limit .= "LIMIT $start,$this->rowsByPage";

            return $this;
        }
        return throw new Exception("La página mínima es 1", 400);
    }

    public function insert(array $data): int
    {
        $fieldsParams = "";
        foreach ($data as $key => $value) {
            $fieldsParams .= ":$key,";
            $this->params[":$key"] = $value;
        }
        $fieldsParams = rtrim($fieldsParams, ',');
        $fieldsName = implode(",", array_keys($data));
        $this->sql = "INSERT INTO $this->table($fieldsName) VALUES ($fieldsParams)";

        return DB::insert($this->sql, $this->params);
    }

    public function update(array $data): bool
    {
        $fieldsParams = "";
        foreach ($data as $key => $value) {
            $fieldsParams .= "$key = '$value',";
        }
        $fieldsParams = rtrim($fieldsParams, ',');

        $this->sql = "UPDATE $this->table SET $fieldsParams $this->where";
        return DB::update($this->sql, $this->params);
    }
    public function join($datos, $table, $id = "id")
    {
        // $datos = [
        //     "tableJoin" => "customers",
        //     "idJoin" => "customerID",
        // ];

        $datos = json_decode(json_encode($datos));

        $nametableJoin = $datos->tableJoin;
        $idJoin = $datos->idJoin;

        $join = "JOIN $nametableJoin ON $nametableJoin.$idJoin=$table.$id ";

        $this->join .= $join;

        return $this;
    }

    public function delete(): bool
    {
        $this->sql = "DELETE FROM $this->table $this->where";
        return DB::delete($this->sql, $this->params);
    }


    public function find(int $id)
    {
        $this->where('id', '=', $id);
        return $this->getOne();
    }

    private function toSql()
    {
        dd($this->sql);
    }
}
