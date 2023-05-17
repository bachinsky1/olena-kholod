<?php 
declare(strict_types=1);
namespace App\Controllers;
use App\Models\Categories;

class ApiController
{
    // static method is better for bramus router
    public static function getCategories(int $id = null, int $sort = null)
    { 
        
        if ($id == null) $id = 1;
        if ($sort == null) $sort = 1;

        $categories = new Categories();
        header('Content-Type: application/json');
        echo json_encode([
            'categories' => $categories->getAll(),
            'active' => $categories->getOne($id, $sort)
        ], JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_IGNORE);  
    }

}