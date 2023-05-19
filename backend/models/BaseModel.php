<?php 
declare(strict_types=1);

namespace App\Models;
use App\Application;

abstract class BaseModel
{  
    protected $app;

    public function __construct() {
        $this->app = Application::getInstance();
    }

}