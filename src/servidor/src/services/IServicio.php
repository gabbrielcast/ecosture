<?php

namespace Ecosture\services;


interface IServicio
{
    public function index();
    public function create();
    public function show($id);
    public function update();
    public function delete();
}