CREATE DATABASE mountainRoutesDB;
USE mountainRoutesDB;

CREATE TABLE mountainRoutes
(
	id INT NOT NULL AUTO_INCREMENT,
	foreignKey INT(10),
	routeNumber INT(10),
	routeName VARCHAR(100) NOT NULL,
	trailHeadParkingLotName VARCHAR(100) NOT NULL,
	latitude FLOAT(15, 8),
	longitude FLOAT(15, 8),
	trailHeadLocation VARCHAR(100) NOT NULL,
	mileage FLOAT(15, 8),
	gain INT(10),
	difficulty INT(10),
	exposure INT(10),
	PRIMARY KEY (id)
);
