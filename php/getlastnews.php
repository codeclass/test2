<?php
require __DIR__ . '/DB/DB.php';

header('Access-Control-Allow-Origin: *');

$DB = new \DB\Db();

$res = $DB->query("SELECT * FROM news ORDER BY pub_date DESC LIMIT 3");

echo json_encode($res);