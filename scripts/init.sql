CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(200) NOT NULL
);

INSERT INTO usuarios (email, senha)
VALUES
  ('leonardobote321nitro@example.com', 'bolinhodearroz44'),
  ('vasconelho654tribo@example.com', 'serelepeoi90');

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  prazo TIMESTAMP,
  inicio DATE,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO tasks (titulo, prazo, inicio, id_usuario)
VALUES 
  ('Ir à academia', '2025-06-10 14:00:00', '2025-06-04', 1),