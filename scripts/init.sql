
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
  (1, 'Ir à academia', '2025-06-10 14:00:00', '2025-06-04', 1),
  (2, 'Estudar Node.js', '2025-06-12 18:00:00', '2025-06-04', 1),
  (3, 'Fazer compras', '2025-06-07 10:30:00', '2025-06-05', 2);