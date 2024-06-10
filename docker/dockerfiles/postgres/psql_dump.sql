
CREATE SCHEMA IF NOT EXISTS teste;

CREATE TABLE IF NOT EXISTS teste.movie (
    id              SERIAL PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    director        VARCHAR(255) NOT NULL,
    year            INTEGER NOT NULL,
    rating          DECIMAL(2, 1),
    genre           VARCHAR(255) NOT NULL,
    releaseDate     timestamp without time zone NOT NULL
);

