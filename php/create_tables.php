<?php

require __DIR__ . '/DB/DB.php';

$DB = new \DB\Db();

$res = $DB->query("
CREATE TABLE IF NOT EXISTS contacts 
(
	id int auto_increment primary key not null,
	fio varchar(255),
	adress varchar(255),
	phone varchar(255),
	email varchar(255)
)");

$res = $DB->query("
CREATE TABLE IF NOT EXISTS news 
(
	id int auto_increment primary key not null,
	pub_date datetime,
	title varchar(255),
	short_body varchar(255),
	full_body text
)");


$res = $DB->query("
INSERT INTO news (pub_date, title, short_body, full_body) VALUES ('2024-10-01', 'Титл 1', 'Кратко 1', 'Полный текст новости 1')
");

$res = $DB->query("
INSERT INTO news (pub_date, title, short_body, full_body) VALUES ('2024-10-03', 'Титл 2', 'Кратко 2', 'Полный текст новости 2')
");

$res = $DB->query("
INSERT INTO news (pub_date, title, short_body, full_body) VALUES ('2024-10-05', 'Титл 3', 'Кратко 3', 'Полный текст новости 3')
");

$res = $DB->query("
INSERT INTO news (pub_date, title, short_body, full_body) VALUES ('2024-10-07', 'Титл 4', 'Кратко 4', 'Полный текст новости 4')
");

$res = $DB->query("
INSERT INTO news (pub_date, title, short_body, full_body) VALUES ('2024-10-08', 'Титл 5', 'Кратко 5', 'Полный текст новости 5')
");