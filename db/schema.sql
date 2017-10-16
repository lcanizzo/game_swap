### Schema
-- -----------------------------------------------------
-- Schema gameswap_db
-- -----------------------------------------------------
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP DATABASE IF EXISTS gameswap_db;
CREATE DATABASE `gameswap_db`;
USE `gameswap_db` ;

-- -----------------------------------------------------
-- Table `gameswap_db`.`users_meta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gameswap_db`.`users_meta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `phone` INT NULL,
  `rating` INT NULL,
  `photo` VARCHAR(90) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gameswap_db`.`locations_meta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gameswap_db`.`locations_meta` (
  `id` INT NOT NULL,
  `number_of_users` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gameswap_db`.`locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gameswap_db`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `zip` INT NOT NULL,
  `locations_meta_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_locations_locations_meta1_idx` (`locations_meta_id` ASC),
  CONSTRAINT `fk_locations_locations_meta1`
    FOREIGN KEY (`locations_meta_id`)
    REFERENCES `gameswap_db`.`locations_meta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gameswap_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gameswap_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(55),
  `facebook_id` BIGINT(20) NOT NULL,
  `is_verified` BOOLEAN DEFAULT false,
  `last_active` DATE,
  `password` VARCHAR(35),
  `image` VARCHAR(255) DEFAULT "/assets/images/missingprofilepic.png",
  `users_meta_id` INT NULL,
  `locations_id` INT,
  PRIMARY KEY (`id`),
  INDEX `fk_users_users_meta_idx` (`users_meta_id` ASC),
  INDEX `fk_users_locations1_idx` (`locations_id` ASC),
  CONSTRAINT `fk_users_users_meta`
    FOREIGN KEY (`users_meta_id`)
    REFERENCES `gameswap_db`.`users_meta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_locations1`
    FOREIGN KEY (`locations_id`)
    REFERENCES `gameswap_db`.`locations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gameswap_db`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gameswap_db`.`games` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(45),
  `image` VARCHAR(255) DEFAULT "//publications.iarc.fr/uploads/media/default/0001/02/thumb_1199_default_publication.jpeg",
  `year` YEAR NULL,
  `platform` VARCHAR(30),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gameswap_db`.`gamesToUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gameswap_db`.`gamesToUsers` (
  `id` INT(11) AUTO_INCREMENT NOT NULL,
  `games_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_games_has_users_users1_idx` (`users_id` ASC),
  INDEX `fk_games_has_users_games1_idx` (`games_id` ASC),
  CONSTRAINT `fk_games_has_users_games1`
    FOREIGN KEY (`games_id`)
    REFERENCES `gameswap_db`.`games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `gameswap_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

ALTER TABLE `gamesToUsers`
	ADD `wishlist` boolean NOT NULL DEFAULT false;