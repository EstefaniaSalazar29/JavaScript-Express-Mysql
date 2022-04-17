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


INSERT INTO vehiculo
VALUES ('UFM-03F', '1', '2020', '2023-03-24', '2024-05-30');


INSERT INTO marca (nombre, descripcion, estado)
VALUES ('Renault', 'Renault es un fabricante francés de automóviles tanto de lujo como de turismo, vehículos comerciales y automóviles de carreras.', 'S');


INSERT INTO linea (id_marca, nombre, descripcion, estado)
VALUES ('2', 'Renault Megane', 'El Renault Megane es uno de los compactos más populares en el mercado español gracias a su gran equilibrio entre sentido práctico y precio.', 'S' );



INSERT INTO marca (nombre, descripcion, estado)
VALUES ('Jeep', 'Jeep es una marca de vehículos estadounidense, especializada en la producción de automóviles todoterreno', 'S');


INSERT INTO linea (id_marca, nombre, descripcion, estado)
VALUES ('7', 'Jeep Willys', 'es un vehículo todoterreno de tracción en las cuatro ruedas', 'N' );