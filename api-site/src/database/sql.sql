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



select * from usuario;
select * from estilo;

 SELECT COUNT(usuario.id) as qtd, fkEstilo, EstiloEscolhido from usuario join 
    estilo on estilo.id = fkEstilo group by fkEstilo
