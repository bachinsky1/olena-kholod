<?php

declare(strict_types=1);

namespace App\Models;

class Categories extends BaseModel
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getAll(): array
    {
        return $this->app->db->rows(
            "SELECT 
                c.id, c.name, COUNT(p.id) AS count 
            FROM categories c 
            LEFT JOIN goods p ON c.id = p.category_id 
            GROUP BY c.id;"
        );
    }

    public function getOne(int $id, int $sort = 1): array
    {
        if (!!$id === false) return [];

        $sortCondition = " ORDER BY goods.price ASC";

        switch ($sort) {
            case 2:
                $sortCondition = " ORDER BY goods.name";
                break;
            case 3:
                $sortCondition = " ORDER BY goods.date DESC";
                break;
            default:
        }

        return $this->app->db->rows("SELECT * FROM goods WHERE category_id = ? $sortCondition;", [$id]);
    }
}
