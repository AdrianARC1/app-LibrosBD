DROP DATABASE IF EXISTS librosBD;
CREATE DATABASE librosBD utf8mb4;
USE librosBD;

CREATE TABLE libros (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    autor VARCHAR(100),
    imagen VARCHAR(300),
    descrip VARCHAR(600)
);

INSERT INTO libros(title, autor, imagen, descrip) VALUES ("Cómo ganar amigos e influir sobre las personas","Dale Carnegie","https://m.media-amazon.com/images/I/A1VSSe69MyL.jpg","Cómo ganar amigos e influir sobre las personas es uno de los primeros best-sellers de autoayuda publicados. Escrito por Dale Carnegie y publicado por primera vez en 1936, se han vendido 15 millones de ejemplares en todo el mundo. Es un libro clásico sobre las relaciones humanas.")