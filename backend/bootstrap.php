<?php
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

spl_autoload_register(function () {
    require_once __DIR__ . "/../vendor/autoload.php";
    require_once  __DIR__ . "/../backend/models/BaseModel.php";
    require_once  __DIR__ . "/../backend/models/Categories.php";
    require_once __DIR__ . "/../backend/Apllication.php";
    require_once  __DIR__ . "/../backend/controllers/BaseController.php";
    require_once  __DIR__ . "/../backend/controllers/IndexController.php";
    require_once  __DIR__ . "/../backend/controllers/ApiController.php";
});

use Dcblogdev\PdoWrapper\Database;
use Dotenv\Dotenv;
use Bramus\Router\Router;
use App\Application;

$app = Application::getInstance();

$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

// make a connection to mysql here

$credentials = !!getenv('IS_DOCKER') 
    ? [
        'username' => getenv('DB_USER'),
        'database' => getenv('DB_NAME'),
        'password' => getenv('DB_PASS'),
        'type' => 'mysql',
        'host' => getenv('DB_HOST'),
        'port' => getenv('DB_PORT'),
    ] : [
        'username' => $_ENV['DB_USER'],
        'database' => $_ENV['DB_NAME'],
        'password' => $_ENV['DB_PASS'],
        'type' => 'mysql',
        'host' => $_ENV['DB_HOST'],
        'port' => $_ENV['DB_PORT'],
    ];

$app->db = new Database($credentials);

// make a router here. It should replace to another file
$router = new Router();
$router->setNamespace('\App\Controllers');

$router->mount('/api', function () use ($router) {
    $router->get('/categories/{id}/{sort}', 'ApiController@getCategories');
    $router->get('/categories/{id}', 'ApiController@getCategories');
    $router->get('/categories', 'ApiController@getCategories');
});

$router->mount('/categories', function () use ($router) {
    $router->get('/{id}/{sort}', 'IndexController@index');
    $router->get('/{id}', 'IndexController@index');
    $router->get('/', 'IndexController@index');
});

$router->get('/', 'IndexController@index');

$router->set404('/', function () {
    header('HTTP/1.1 404 Not Found');
    header('Content-Type: text/html');

    echo '<p style="width:100%; text-align:center; margin-top:15rem; font-size:7rem; font-weight:bold; color:red">
            Page not found! WTF?! 
         </p>';
});

$router->run();
