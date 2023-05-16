<?php 
declare(strict_types=1);
namespace App\Controllers;
use App\Models\Categories;

class ApiController
{
    protected $categories;

    public function __construct()
    {
        $this->categories = new Categories();
        header('Content-Type: application/json');
    }

    public function getCategories(int $id = null, int $sort = null)
    { 
        
        if ($id == null) $id = 1;
        if ($sort == null) $sort = 1;
        
        echo json_encode([
            'categories' => $this->categories->getAll(),
            'active' => $this->categories->getOne($id, $sort)
        ], JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_IGNORE);  
    }

}