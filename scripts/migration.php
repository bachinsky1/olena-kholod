<?php

require_once __DIR__ . "/../vendor/autoload.php";
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

$config = [
    'username' => $_ENV['DB_USER'],
    'database' => $_ENV['DB_NAME'],
    'password' => $_ENV['DB_PASS'],
    'type' => 'mysql',
    'host' => $_ENV['DB_HOST'],
    'port' => $_ENV['DB_PORT']
];

try {
    $dsn = "mysql:host={$_ENV['DB_HOST']};port={$_ENV['DB_PORT']};dbname={$_ENV['DB_NAME']}";
    $conn = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    

    $sql = file_get_contents(__DIR__ .'/../mysql.sql');
    // echo $sql;

    $stmt = $conn->prepare($sql);
    $stmt->execute();

    // $row = $stmt->fetch(PDO::FETCH_NUM);
    // echo $row[0];

    $stmt->closeCursor();
    $conn = null;
    echo 'Database successfully filled';
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}