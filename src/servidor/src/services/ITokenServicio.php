<?php 

namespace Ecosture\services;

interface ITokenServicio{

    public function setToken(object $data,object $tokens,string $table);
    public function createTokens();
    public function validateNewLogin(object $user);
    public function validateRefreshToken(string $token);
}