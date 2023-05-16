<?php

namespace App\Models;

class Categories extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getAll() 
    {
        return $this->app->db->rows("SELECT 
                                        c.id, c.name, COUNT(p.id) AS product_count 
                                    FROM categories c 
                                    LEFT JOIN goods p ON c.id = p.category_id 
                                    GROUP BY c.id;"
        );
    }
    
}