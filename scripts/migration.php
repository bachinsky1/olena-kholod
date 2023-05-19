<?php

require_once __DIR__ . "/../vendor/autoload.php";
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

try {
    $dsn = "mysql:host={$_ENV['DB_HOST']};port={$_ENV['DB_PORT']};dbname={$_ENV['DB_NAME']}";
    $conn = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = file_get_contents(__DIR__ .'/mysql.sql');
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $stmt->closeCursor();
    $conn = null;
    echo 'Database successfully filled. ';
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}