
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  email VARCHAR(100),
  senha VARCHAR(200)
);

INSERT INTO usuarios (id, email, senha)
VALUES
  (1, 'leonardobote321nitro', 'bolinhodearroz44'),
  (2, 'vasconelho654tribo', 'serelepeoi90');

CREATE TABLE tasks (
  id INT PRIMARY KEY,
  titulo VARCHAR(100),
  prazo INT,
  inicio DATE,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


INSERT INTO tasks (id, titulo, prazo, inicio, id_usuario)
VALUES
  (1, 'academia', 5, '2025-07-20', 2);
