create database adopet;
use adopet;

create table cadastro (
	id int primary key not null auto_increment,
	email varchar(100),
    nome varchar (200),
    senha text
);

create table mensagem(
	id int primary key not null auto_increment,
    nome varchar (200),
    telefone varchar(11),
    nome_animal varchar(100),
    mensagem varchar (1024)
);

create table perfil (
	id int primary key not null auto_increment,
    foto blob,
    nome varchar(100),
    telefone varchar(11),
    cidade varchar(50),
    sobre varchar(1024)
);

select * from cadastro where email = '' and senha = '';