DROP DATABASE IF EXISTS login_db;
CREATE DATABASE login_db;

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR (123) NOT NULL,
    password VARCHAR (123) NOT NULL,
    email VARCHAR (123) NOT NULL
);

CREATE TABLE favorites (
    id SERIAL NOT NULL PRIMARY KEY,
    item_id INTEGER NOT NULL,
    item_name VARCHAR (123) NOT NULL,
    user_id INTEGER NOT NULL,
);

INSERT INTO users (name, password, email)
    VALUES ('test', 'password', 'test@test.com');