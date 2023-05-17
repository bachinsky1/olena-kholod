<?php 
declare(strict_types=1);
namespace App\Controllers;
class IndexController extends Controller
{
    public static function index()
    {
        // It's a simple example of transfering data to view. It should been more improved
        extract([
            'leftHeader' => "Categories",
            'centertHeader' => "Goods",
            'rightHeader' => "Filters",

        ]);

        include __DIR__ . "/../views/main.php";
    }
}
