CREATE TABLE login(
    id int(11) AUTO_INCREMENT PRIMARY KEY not null,
    user_email varchar(256) not null,
    user_login varchar(256) not null,
    user_password varchar(256) not null
);