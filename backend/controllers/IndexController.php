<?php 
declare(strict_types=1);
namespace App\Controllers;
class IndexController extends Controller
{
    public function index()
    {
        echo file_get_contents(__DIR__ . "/../views/main.php");
    }
}
