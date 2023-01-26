<?php

namespace App\DTO;

interface IDTO
{
    public static function createDTO(array $params): IDTO;
}
