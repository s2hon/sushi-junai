DROP DATABASE IF EXISTS login_db;
CREATE DATABASE login_db;

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    password VARCHAR (123) NOT NULL,
    email VARCHAR (123) NOT NULL
);

CREATE TABLE favorites (
    id SERIAL NOT NULL PRIMARY KEY,
    item VARCHAR (123) NOT NULL,
    category VARCHAR (123) NOT NULL,
    email FOREIGN KEY REFERENCES users(email)
    -- user_id INTEGER NOT NULL,
);

INSERT INTO users (name, password, email)
    VALUES ('test', 'password', 'test@test.com');