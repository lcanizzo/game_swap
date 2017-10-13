USE `gameswap_db` ;

-- L O C A T I O N S 
-- id=1 UCF
INSERT INTO `gameswap_db`.`locations` (`name`,`city`,`state`,`zip`) 
VALUES ("University of Central Florida", "Orlando", "FL", 32816);

-- id=2 Full Sail University
INSERT INTO `gameswap_db`.`locations` (`name`,`city`,`state`,`zip`) 
VALUES ("Full Sail University", "Orlando", "FL", 32792);

-- id=3 Rollins College
INSERT INTO `gameswap_db`.`locations` (`name`,`city`,`state`,`zip`) 
VALUES ("Rollins College", "Orlando", "FL", 32789);


INSERT INTO `gameswap_db`. `users`(`name`, `email`, `is_verified`, `locations_id`,`last_active`, `password`, `facebook_id`, `image`)
VALUES  
        ("Luca", "luca.canizzo@gmail.com", 0, 1,'2017-04-04', "password", 1617611878303022, "https://avatars1.githubusercontent.com/u/30158196?v=4&s=400&u=9df81e77aadd6db23a4b82e963ddce54b830c08e"),
        ("Andrew", "andrewwybo@gmail.com", 0, 1,'2017-04-04', "password", 10155762906027812, "https://avatars1.githubusercontent.com/u/30086169?v=4&s=400"),
        ("Francisco", "franciscocarrer@gmail.com", 0, 2,'2017-04-04', "password", 10101639790623289, "https://avatars0.githubusercontent.com/u/8119401?v=4&s=400"),
        ("Bryan", "bryanporras2033@gmail.com", 1, 1,'2017-04-04', "password", 10158562906027812, "https://avatars2.githubusercontent.com/u/11219646?v=4&s=400"),
        ("John", "johnexample@hotmail.com", 1, 1,'2017-04-04', "password", 10155762938027812, "/assets/images/missingprofilepic.png"),
        ("Emily", "emilyexample@hotmail.com", 0, 1,'2017-04-04', "password", 10158762906027812, "/assets/images/missingprofilepic.png"),
        ("Bob", "bobexample@hotmail.com", 0, 3,'2017-04-04', "password", 10155762026027812, "/assets/images/missingprofilepic.png"),
        ("Ryan", "test@gmail.com", 0, 1,'2017-04-04', "password", 10155762907827812, "/assets/images/missingprofilepic.png"), 
        ("Hunter", "bryan@gmail.com", 1, 1,'2017-04-04', "password", 10236762906027812, "/assets/images/missingprofilepic.png"),
        ("Justin", "johnexample@hotmail.com", 1, 1,'2017-04-04', "password", 10155772806027812, "/assets/images/missingprofilepic.png"),
        ("Josh", "emilyexample@hotmail.com", 0, 1,'2017-04-04', "password", 10158312906027812, "/assets/images/missingprofilepic.png"),
        ("Tara", "bobexample@hotmail.com", 0, 3,'2017-04-04', "password", 10155762906024252, "/assets/images/missingprofilepic.png"),
        ("Ankita", "test@gmail.com", 0, 1,'2017-04-04', "password", 10155762906789812, "/assets/images/missingprofilepic.png"), 
        ("Jodi", "bryanporras2033@gmail.com", 1, 1,'2017-04-04', "password", 10122262906027812, "/assets/images/missingprofilepic.png"),
        ("Maya", "johnexample@hotmail.com", 1, 1,'2017-04-04', "password", 10155762456027812, "/assets/images/missingprofilepic.png"),
        ("Bill", "emilyexample@hotmail.com", 0, 1,'2017-04-04', "password", 10155762555027812, "/assets/images/missingprofilepic.png"),
        ("Jacob", "bobexample@hotmail.com", 0, 3,'2017-04-04', "password", 1015576290025812, "/assets/images/missingprofilepic.png"),
        ("Rob", "test@gmail.com", 0, 1,'2017-04-04', "password", 10155762900027812, "/assets/images/missingprofilepic.png");
        
