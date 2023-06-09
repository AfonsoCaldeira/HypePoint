CREATE TABLE `Registration` (
   `user_id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(45) NOT NULL,
   `surname` VARCHAR(45) NOT NULL,
   `email` VARCHAR(45) NOT NULL,
   `birthdate` DATE NOT NULL,
   `gender` ENUM('F','M') NOT NULL,
   PRIMARY KEY (`user_id`)
)ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci