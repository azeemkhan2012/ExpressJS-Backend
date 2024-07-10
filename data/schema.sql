CREATE DATABASE NewDB_Test;
USE NewDB_Test;

CREATE TABLE testData (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL
);

INSERT INTO testData (first_name, last_name, email, age)
VALUES
('azeem', 'khan', 'azeemkhanpathanpk@gmail.com', 25),
('Uzair', 'khan', 'uzair@gmail.com', 20);
