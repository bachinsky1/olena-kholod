<?php 
declare(strict_types=1);
namespace App\Controllers;
class IndexController extends BaseController
{
    public static function index()
    {
        // It's a simple example of transfering data to view. It should been more improved
        extract([
            'leftHeader' => "Categories",
            'centertHeader' => "Goods",
            'rightHeader' => "Filters",
            'loading' => "Loading...",
        ]);

        include __DIR__ . "/../views/main.php";
    }
}
