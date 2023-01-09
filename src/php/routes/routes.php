<?php

use Middleware\Acceso;
use Response\HTTPResponse;

$router = new \Bramus\Router\Router();

$router->setNamespace('\App');

/**
 * Rutas
 */


$router->before('GET|POST', '/api/.*', function() {
    if(!Acceso::acceso()){
        exit();
    }
});


$router->get('/api/peliculas',function(){
    echo json_encode([["nombre"=>"interestellar"],["nombre"=>"avatar"]]);
});//Loguearse


$router->post('/auth/login','auth\Auth@login');//Loguearse
// $router->post('/acceso','auth\Acceso@access');//middleware
$router->post('/auth/refresh','auth\Auth@refresh');//refrescarToken Access





$router->set404(function () {
    header('HTTP/1.1 404 Not Found');
    header('Content-Type: application/json');

    $jsonArray = array();
    $jsonArray['status'] = "404";
    $jsonArray['status_text'] = "route not defined";

    echo json_encode($jsonArray);
});


$router->run();
