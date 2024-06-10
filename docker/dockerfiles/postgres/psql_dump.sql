
CREATE SCHEMA IF NOT EXISTS teste;

CREATE TABLE IF NOT EXISTS teste.movie (
    id              SERIAL PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    director        VARCHAR(255) NOT NULL,
    year            INTEGER NOT NULL,
    rating          DECIMAL(2, 1),
    genre           VARCHAR(255) NOT NULL,
    release         timestamp without time zone NOT NULL
);

CREATE TABLE IF NOT EXISTS teste.user
(
   id                      SERIAL PRIMARY KEY,
   name                    character varying(60) NOT NULL,
   name_slug               character varying(60) NOT NULL,
   email                   character varying(256) NOT NULL UNIQUE,
   password                character varying NOT NULL
);