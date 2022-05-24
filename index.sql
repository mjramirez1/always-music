-- Crear base de datos
CREATE DATABASE alwaysmusic_db;
-- Crear tabla
CREATE TABLE estudiantes(nombre VARCHAR(50), rut VARCHAR(12) PRIMARY KEY, curso VARCHAR(50), nivel SMALLINT);
-- Registrar a nuevo estudiante
insert into estudiantes (nombre, rut, curso, nivel) values ('Maria Jose Ramirez', '17.020.172-8', 'piano', 2);

