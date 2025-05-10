-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios(
  id INT PRIMARY KEY,
  email VARCHAR(100),
  senha VARCHAR(200)
);

CREATE TABLE tasks(
  id INT PRIMARY KEY,
  titulo VARCHAR(100),
  prazo TIMESTAMP,
  inicio TIMESTAMP, 
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
