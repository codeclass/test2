<?php

header('Access-Control-Allow-Origin: *');

$result = json_decode(file_get_contents("php://input"), true);;


$err = false;

if(empty($result['fio'])) {
   $result['fioerror'] = 'Поле ФИО должно быть заполнено';
   $err = true;
}

if(empty($result['adress'])) {
    $result['adresserror'] = 'Поле Адрес должно быть заполнено';
    $err = true;
}

if(empty($result['phone'])) {
    $result['phoneerror'] = 'Поле Телефон должно быть заполнено';
    $err = true;
}

if(empty($result['email'])) {
    $result['emailerror'] = 'Поле E-Mail должно быть заполнено';
    $err = true;
}

if(!$err) {
    //Сохраняем в базу
    $result['formdisplay'] = false;
    $result['resultdisplay'] = true;
}


echo json_encode($result);