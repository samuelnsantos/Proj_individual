CREATE DATABASE clarestudo;
USE clarestudo;

CREATE TABLE estilo (
	id INT auto_increment,	
	estiloPreferido VARCHAR(40),
    PRIMARY KEY(id)
)auto_increment=1;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(100),
	nome VARCHAR(100),
	senha VARCHAR(200),
	fkEstilo INT,
	FOREIGN KEY (fkEstilo) REFERENCES estilo(id)
)AUTO_INCREMENT=50;

INSERT INTO estilo (id, estiloPreferido) VALUES 	
(null,'Jazz'),
(null,'Jazz Brasileiro'),
(null,'Cool Jazz'),  
(null,'Choro'),
(null,'MPB'),
(null,'Bossa Nova'),
(null,'Pop'),
(null,'Gospel'),
(null,'Baião'),
(null,'Música Erudita'),
(null,'Xote'),
(null,'Samba');
