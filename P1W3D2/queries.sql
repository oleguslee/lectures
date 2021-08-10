CREATE DATABASE people OWNER bob

CREATE TABLE voodoopeople (
    id serial primary key,
    name varchar(20),
    age integer
);

INSERT INTO voodoopeople (name, age) VALUES
    ('Lzheoleg', 113);



CREATE TABLE pets (
    id serial primary key,
    name varchar(20),
    owner integer references voodoopeople(id)  ON DELETE CASCADE
);