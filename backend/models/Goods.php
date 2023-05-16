<?php 
declare(strict_types=1);

namespace App\Models;

class Goods extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getAll() 
    {
        return $this->app->db->rows("SELECT * FROM goods");
    }

}