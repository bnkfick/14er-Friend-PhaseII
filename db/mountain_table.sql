CREATE DATABASE mountainDB;
USE mountainDB;


CREATE TABLE Mountains(
	id INT(10) NOT NULL AUTO_INCREMENT,
	rank INT(10),
	peakName VARCHAR(100),
	elevation INT(10),
	latitude FLOAT(15, 9),
	longitude FLOAT(15, 9),
	mountainRange VARCHAR(100),
	PRIMARY KEY (id)
);
SELECT * FROM Mountains