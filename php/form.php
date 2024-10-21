<?php
require __DIR__ . '/DB/DB.php';

header('Access-Control-Allow-Origin: *');

$result = json_decode(file_get_contents("php://input"), true);;


$err = false;

if(empty($result['fio'])) {
   $result['fioerror'] = 'Поле ФИО должно быть заполнено';
   $err = true;
}

if(!preg_match('#^[a-zа-я ]+$#ui', $result['fio'])){
    $result['fioerror'] = 'Поле ФИО должно содержать только буквы или пробел';
    $err = true;
}

if(empty($result['adress'])) {
    $result['adresserror'] = 'Поле Адрес должно быть заполнено';
    $err = true;
}

if(!preg_match('#^[a-zа-я ]+$#ui', $result['adress'])){
    $result['adresserror'] = 'Поле Адрес должно содержать только буквы или пробел';
    $err = true;
}


if(empty($result['phone'])) {
    $result['phoneerror'] = 'Поле Телефон должно быть заполнено';
    $err = true;
}

if(!preg_match('#^\+7 \d{3} \d{3} \d{2} \d{2}$#', $result['phone'])){
    $result['phoneerror'] = 'Поле Телелфон должно быть в формате +7 XXX XXX XX XX';
    $err = true;
}

if(empty($result['email'])) {
    $result['emailerror'] = 'Поле E-Mail должно быть заполнено';
    $err = true;
}

if(!filter_var($result['email'],FILTER_VALIDATE_EMAIL)) {
    $result['emailerror'] = 'Поле E-Mail должно быть заполнено корректно';
    $err = true;
}

if(!$err) {
    //Сохраняем в базу
    $DB = new \DB\Db();
    $DB->query("INSERT INTO contacts (fio, adress, phone, email) VALUES (:fio, :adress, :phone, :email)", [
        ':fio' => $result['fio'],
        ':adress' => $result['adress'],
        ':phone' => $result['phone'],
        ':email' => $result['email']
    ]);
    //убираем форму и показываем таблицу
    $result['formdisplay'] = false;
    $result['resultdisplay'] = true;
}


echo json_encode($result);