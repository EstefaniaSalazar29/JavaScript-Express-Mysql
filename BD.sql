CREATE DATABASE semillero; --Cree la base de datos
USE semillero; --Empece a usar la tabla semillero

CREATE TABLE marca (
    id INT UNSIGNED AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    estado ENUM('S', 'N'),
    CONSTRAINT `pk_id_marca` PRIMARY KEY(id)
);

CREATE TABLE linea (
    id INT UNSIGNED AUTO_INCREMENT,
    id_marca INT UNSIGNED NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    estado ENUM('S', 'N'), 
    CONSTRAINT `pk_id_linea` PRIMARY KEY(id),
    CONSTRAINT `fk_id_linea_marca`
      FOREIGN KEY (id_marca) REFERENCES marca(id)
);

CREATE TABLE vehiculo (
    id_placa VARCHAR(7) NOT NULL,
    id_linea INT UNSIGNED NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    fecha_vencimiento_seguro DATE NOT NULL,
    fecha_vencimiento_tecnomecanica DATE NOT NULL,
    CONSTRAINT `pk_id_vehiculo` PRIMARY KEY(id_placa),
    CONSTRAINT `fk_id_placa_vehiculo_linea`
      FOREIGN KEY (id_linea) REFERENCES linea(id)
);


INSERT INTO marca (nombre, descripcion, estado)
VALUES ('Chevrolet', 'Chevrolet, también denominada Chevy, es una marca de automóviles y camiones con sede en Detroit, Estados Unidos perteneciente al grupo General Motors', 'S');

INSERT INTO linea (id_marca, nombre, descripcion, estado)
VALUES ('1', 'Chevrolet Captiva', 'Modelo Captiva del año 2010, color azul, transmision automatica, 128600 km', 'S');


INSERT INTO vehiculo
VALUES ('CVY-000', '1', '2010', '2023-03-24', '2024-05-30');



