CREATE DATABASE clarestudo;
USE clarestudo;

CREATE TABLE estilo (
	id INT auto_increment,	
	estiloEscolhido VARCHAR(40),
	caminhoImg VARCHAR(35),
    PRIMARY KEY(id)
)auto_increment=1;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(100),
	nome VARCHAR(100),
	senha VARCHAR(200),
	fkEstilo INT,
	FOREIGN KEY (fkEstilo) REFERENCES estilo(id)
)AUTO_INCREMENT=1;

INSERT INTO estilo (id, estiloEscolhido, caminhoImg) VALUES 	
(null,'Jazz', './'),
(null,'Jazz Brasileiro', './'),
(null,'Cool Jazz', './'),  
(null,'Choro', './'),
(null,'MPB', './'),
(null,'Bossa Nova', './'),
(null,'Pop', './'),
(null,'Gospel', './'),
(null,'Baião', './'),
(null,'Música Erudita', './'),
(null,'Xote', './'),
(null,'Samba', './');



select * from usuario;

 SELECT COUNT(usuario.id) as qtd, fkEstilo, EstiloEscolhido from usuario join 
    estilo on estilo.id = fkEstilo group by fkEstilo
