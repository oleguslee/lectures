CREATE USER bob WITH password '123'; --создание пользователя
CREATE DATABASE questions OWNER bob; --создание бд с пользователем
-- \l -просмотр всех бд
GRANT ALL privileges ON DATABASE questions TO bob; --выдаем права управления базой

-- \c questions bob -заходим в базу под пользователем

--создание таблицы
CREATE TABLE category (
   id serial primary key,
   cat_name varchar(20)
);

-- \d - просмотр всех таблиц

-- заполнение таблицы
INSERT INTO category (cat_name) VALUES
    ('О китах'),
    ('О тиграх'),
    ('О js');



CREATE TABLE questions (
    id serial primary key,
    cat_id integer references category(id) ON DELETE CASCADE
)

CREATE TABLE answers (
    id serial primary key,
    quest_id integer,
    foreign key (quest_id) references questions(id) ON DELETE CASCADE
);

-- добавить столбец в таблицу
ALTER TABLE questions
ADD quest_name text;

INSERT INTO questions (cat_id, quest_name) VALUES
    (1, 'Кто кит?'),
    (2, 'Кто тигр?'),
    (3,'Что происходит???');


-- получить все данные из таблицы
SELECT * FROM questions;

-- обновление полей таблицы
UPDATE questions SET quest_name = 'Что говорит кит?' WHERE cat_id = 1;

-- удаление из таблицы
DELETE FROM questions WHERE cat_id = 2;

-- удаление базы
DROP DATABASE questions;

-- удаление пользователя
DROP USER bob;

-- \du - просмотр всех пользователей