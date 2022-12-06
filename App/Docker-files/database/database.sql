# Create Database
CREATE DATABASE IF NOT EXISTS `demo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

# Create table for type of sensors
CREATE TABLE IF NOT EXISTS `demo`.`sensor_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

# Create table for sensors with foreign key to sensor_type 
CREATE TABLE IF NOT EXISTS `demo`.`sensor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `sensor_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sensor_sensor_type_idx` (`sensor_type_id` ASC),
  CONSTRAINT `fk_sensor_sensor_type`
    FOREIGN KEY (`sensor_type_id`)
    REFERENCES `demo`.`sensor_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

# Create table for sensor data with foreign key to sensor
CREATE TABLE IF NOT EXISTS `demo`.`sensor_data` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` FLOAT NOT NULL,
  `sensor_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sensor_data_sensor_idx` (`sensor_id` ASC),
  CONSTRAINT `fk_sensor_data_sensor`
    FOREIGN KEY (`sensor_id`)
    REFERENCES `demo`.`sensor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

# Populate sensor_type table
INSERT INTO `demo`.`sensor_type` (`id`, `name`) VALUES (1, 'temperature');
INSERT INTO `demo`.`sensor_type` (`id`, `name`) VALUES (2, 'humidity');

# Populate sensor table
INSERT INTO `demo`.`sensor` (`id`, `name`, `sensor_type_id`) VALUES (1, 'Temp 1', 1);
INSERT INTO `demo`.`sensor` (`id`, `name`, `sensor_type_id`) VALUES (2, 'Hum 1', 2);