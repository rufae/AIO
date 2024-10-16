CREATE TABLE Clientes (
                          id SERIAL PRIMARY KEY,
                          nombre VARCHAR(100) NOT NULL,
                          apellido VARCHAR(100),
                          email VARCHAR(150) UNIQUE NOT NULL,
                          telefono VARCHAR(15),
                          direccion VARCHAR(255),
                          fecha_registro DATE DEFAULT CURRENT_DATE
);
CREATE TABLE Usuario (
                         id SERIAL PRIMARY KEY,
                         cliente_id INT NOT NULL REFERENCES Clientes(id) ON DELETE CASCADE,
                         username VARCHAR(50) UNIQUE NOT NULL,
                         password_hash VARCHAR(255) NOT NULL,
                         rol VARCHAR(50) DEFAULT 'cliente',
                         fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Sitios (
                        id SERIAL PRIMARY KEY,
                        nombre VARCHAR(100) NOT NULL,
                        tipo VARCHAR(50),
                        descripcion TEXT,
                        pais VARCHAR(50),
                        region VARCHAR(100),
                        latitud DECIMAL(9, 6),
                        longitud DECIMAL(9, 6)
);
CREATE TABLE Viajes (
                        id SERIAL PRIMARY KEY,
                        usuario_id INT NOT NULL REFERENCES Usuario(id) ON DELETE CASCADE,
                        nombre_viaje VARCHAR(100) NOT NULL,
                        descripcion TEXT,
                        fecha_inicio DATE,
                        fecha_fin DATE,
                        destino_id INT REFERENCES Sitios(id),
                        presupuesto NUMERIC(10, 2)
);

CREATE TABLE Alojamiento (
                             id SERIAL PRIMARY KEY,
                             sitio_id INT NOT NULL REFERENCES Sitios(id) ON DELETE CASCADE,
                             nombre VARCHAR(100) NOT NULL,
                             direccion VARCHAR(255),
                             tipo VARCHAR(50),
                             precio_por_noche NUMERIC(8, 2),
                             disponibilidad BOOLEAN DEFAULT TRUE
);
CREATE TABLE Excursiones (
                             id SERIAL PRIMARY KEY,
                             sitio_id INT NOT NULL REFERENCES Sitios(id) ON DELETE CASCADE,
                             nombre VARCHAR(100) NOT NULL,
                             descripcion TEXT,
                             duracion_horas INT,
                             precio NUMERIC(8, 2),
                             cupo_maximo INT
);
CREATE TABLE Ocio (
                      id SERIAL PRIMARY KEY,
                      sitio_id INT NOT NULL REFERENCES Sitios(id) ON DELETE CASCADE,
                      nombre VARCHAR(100) NOT NULL,
                      tipo VARCHAR(50),
                      descripcion TEXT,
                      horario VARCHAR(100),
                      costo_entrada NUMERIC(8, 2)
);
CREATE TABLE Restaurantes (
                              id SERIAL PRIMARY KEY,
                              sitio_id INT NOT NULL REFERENCES Sitios(id) ON DELETE CASCADE,
                              nombre VARCHAR(100) NOT NULL,
                              tipo_cocina VARCHAR(50),
                              direccion VARCHAR(255),
                              precio_medio NUMERIC(8, 2),
                              horario VARCHAR(100)
);
CREATE TABLE Grupos (
                        id SERIAL PRIMARY KEY,
                        nombre VARCHAR(100) NOT NULL,
                        descripcion TEXT,
                        fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Chat (
                      id SERIAL PRIMARY KEY,
                      grupo_id INT NOT NULL REFERENCES Grupos(id) ON DELETE CASCADE,
                      usuario_id INT NOT NULL REFERENCES Usuario(id) ON DELETE CASCADE,
                      mensaje TEXT NOT NULL,
                      fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

