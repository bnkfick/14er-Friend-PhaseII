CREATE DATABASE 14ers_db;
USE 14ers_db;

CREATE TABLE mountains(
	id INT(10) NOT NULL AUTO_INCREMENT,
	rank INT(10) NOT NULL,
	peakName VARCHAR(100) NOT NULL,
	elevation INT(10) NOT NULL,
	latitude FLOAT(15, 9) NOT NULL,
	longitude FLOAT(15, 9) NOT NULL,
	mountainRange VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE mountain_routes

(
	id INT NOT NULL AUTO_INCREMENT,
	foreignKey INT(10) NOT NULL,
	routeNumber INT(10) NOT NULL,
	routeName VARCHAR(100) NOT NULL,
	trailHeadParkingLotName VARCHAR(100) NOT NULL,
	latitude FLOAT(15, 8) NOT NULL,
	longitude FLOAT(15, 8) NOT NULL,
	trailHeadLocation VARCHAR(100) NOT NULL,
	mileage FLOAT(5, 2) NOT NULL,
	gain INT(10) NOT NULL, 
	difficulty INT(10) NOT NULL,
	exposure INT(10) NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM mountains;
SELECT * FROM mountain_routes;
