DROP DATABASE IF EXISTS sql3327345;
CREATE DATABASE sql3327345;
USE sql3327345;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);