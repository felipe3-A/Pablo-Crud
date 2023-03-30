CREATE DATABASE IF NOT EXISTS datos;
use datos;
CREATE TABLE empleados(
    id INT (11) AUTO_INCREMENT,
    nombre VARCHAR(45)DEFAULT NULL,
    salario INT(15) DEFAULT NULL,
    PRIMARY KEY(id)
);
INSERT INTO empleados VALUES
(1,'John',2000),
(2,'Jane',2100),
(3,'Juan',2400),
(4,'Jose',2800);