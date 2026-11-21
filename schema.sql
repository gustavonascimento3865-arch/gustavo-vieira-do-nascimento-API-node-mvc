CREATE DATABASE IF NOT EXISTS loja_mvc;
USE loja_mvc;

CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  estoque INT NOT NULL DEFAULT 0
);

INSERT INTO produtos (nome, preco, estoque) VALUES
  ('Mouse sem fio', 59.90, 25),
  ('Teclado mecanico', 249.00, 10),
  ('Headset gamer', 189.90, 8);
