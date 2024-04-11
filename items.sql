CREATE TABLE `planes_lab5` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  tank_volume INT UNSIGNED  NOT NULL,
  num_os_seats INT UNSIGNED NOT NULL,
  PRIMARY KEY (id)
);

use planes;

DROP TABLE planes_lab5;

SELECT * from planes_lab5;