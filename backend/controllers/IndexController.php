<?php 
namespace App\Controllers;

use App\Models\Goods;
use App\Models\Categories;

class IndexController extends Controller
{
    protected $goods;
    protected $categories;

    public function __construct()
    {
        
    }

    public function index()
    { 
        // $this->goods = new Goods(); 
        $this->categories = new Categories(); 
        // $goods = $this->goods->getAll();
        $categories = $this->categories->getAll();
        // header('Content-Type: application/json');
        // echo json_encode([$categories], JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_IGNORE);   
    }
}