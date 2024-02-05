-- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
CREATE TABLE `category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`));


-- -----------------------------------------------------
-- Table `category_animal`
-- -----------------------------------------------------
CREATE TABLE `category_animal` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`));


-- -----------------------------------------------------
-- Table `product`
-- -----------------------------------------------------
CREATE TABLE `product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` DECIMAL(6,2) NOT NULL,
  `weight` INT NOT NULL,
  `image_id` VARCHAR(36) NULL,
  `category_category_id` INT NOT NULL,
  `category_animal_category_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `category_category_id`, `category_animal_category_id`),
  UNIQUE INDEX `id_UNIQUE` (`product_id` ASC) VISIBLE,
  INDEX `fk_product_category1_idx` (`category_category_id` ASC) VISIBLE,
  INDEX `fk_product_category_animal1_idx` (`category_animal_category_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`category_category_id`)
    REFERENCES `category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_category_animal1`
    FOREIGN KEY (`category_animal_category_id`)
    REFERENCES `category_animal` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `order`
-- -----------------------------------------------------
CREATE TABLE `order` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE INDEX `order_id_UNIQUE` (`order_id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `products_in_order`
-- -----------------------------------------------------
CREATE TABLE `products_in_order` (
  `product_product_id` INT NOT NULL,
  `order_order_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`product_product_id`, `order_order_id`),
  INDEX `fk_product_has_order_order1_idx` (`order_order_id` ASC) VISIBLE,
  INDEX `fk_product_has_order_product_idx` (`product_product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_order_product`
    FOREIGN KEY (`product_product_id`)
    REFERENCES `product` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_order_order1`
    FOREIGN KEY (`order_order_id`)
    REFERENCES `order` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `comments`
-- -----------------------------------------------------
CREATE TABLE `comments` (
  `comments_id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `info` VARCHAR(255) NOT NULL,
  `product_product_id` INT NOT NULL,
  PRIMARY KEY (`comments_id`),
  INDEX `fk_comments_product1_idx` (`product_product_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_product1`
    FOREIGN KEY (`product_product_id`)
    REFERENCES `product` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


