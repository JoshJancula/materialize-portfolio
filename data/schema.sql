USE poptvbvbgawow5vo;

DROP TABLE IF EXISTS Messages
-- Create table for new Messages
CREATE TABLE Messages
(
id int NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(255),
body VARCHAR(255) NOT NULL,
createdAt TIMESTAMP,
updatedAt TIMESTAMP,
PRIMARY KEY (id)
);
