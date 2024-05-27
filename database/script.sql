create database proj_individual;
use proj_individual;

create table cadastro_log(
	id int auto_increment, 
	email varchar(45),
    tel char(11),
    senha varchar(45),
    confirmacao_senha varchar(45),
    primary key(id),
    fklogin int,
    foreign key(fklogin) references cadastro_log(id)
);

create table dashbord(
	id int auto_increment,
    pergunta1 char(3),
    pergunta2 char(3),
    primary key(id)
);


select * from dashbord;
select * from cadastro_log;