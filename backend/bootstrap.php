<?php 
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

spl_autoload_register(function () {
    require_once __DIR__ . "/../vendor/autoload.php";
    require_once  __DIR__ . "/../backend/models/Model.php";
    require_once  __DIR__ . "/../backend/models/Goods.php";
    require_once  __DIR__ . "/../backend/models/Categories.php";
    require_once __DIR__ . "/../backend/Apllication.php";
    require_once  __DIR__ . "/../backend/controllers/Controller.php";
    require_once  __DIR__ . "/../backend/controllers/IndexController.php";
});
 
use Dcblogdev\PdoWrapper\Database;
use Dotenv\Dotenv;
use Bramus\Router\Router;
use App\Application;

$app = Application::getInstance();

$dotenv = Dotenv::createImmutable(__DIR__ . "/.."); 
$dotenv->load();

// make a connection to mysql here

$app->db = new Database([ 
    'username' => $_ENV['DB_USER'],
    'database' => $_ENV['DB_NAME'], 
    'password' => $_ENV['DB_PASS'],
    'type' => 'mysql', 
    'host' => $_ENV['DB_HOST'],
    'port' => $_ENV['DB_PORT']
]);
 

// make a router
$app->router = new Router();
$app->router->setNamespace('\App\Controllers');
$app->router->get('/', 'IndexController@index');
$app->router->run();