CREATE TABLE `planes` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  tank_volume INT UNSIGNED  NOT NULL,
  price INT UNSIGNED  NOT NULL,
  desc VARCHAR(100) NOT NULL, 
  PRIMARY KEY (id)
);

use planes;

DROP TABLE planes.planes;

SELECT * from planes.planes;