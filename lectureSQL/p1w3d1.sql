CREATE USER oleg WITH password '123'; --создать пользователя

-- \du - посмотреть пользователей

-- \l - посмотреть базы

CREATE DATABASE flashcards OWNER oleg; -- создаем базу с пользователем

GRANT ALL privileges ON DATABASE flashcards TO test_user; -- дать права пользователю

-- \c flashcards oleg -- переходим в базу с пользователем

-- создаем таблицу
CREATE TABLE category (
   id serial primary key,
   category_name varchar(20)
);

-- заполняем данные
INSERT INTO category (category_name) VALUES
    ('Киты'),
    ('Тигры'),
    ('Жиэс');

-- создаем таблицу
CREATE TABLE question (
   id serial primary key,
   cat_id integer references category(id) ON DELETE CASCADE,
   question_name varchar(20)
);

-- заполняем данные
INSERT INTO question (cat_id, question_name) VALUES
    (1, 'Кто тут кит?'),
    (2, 'Кто тут тигр?'),
    (1, 'За что?'),
    (3, 'Что происходит???');


-- создаем таблицу
CREATE TABLE answers (
    id serial primary key,
    quest_id integer,
    foreign key (quest_id) references question(id) ON DELETE CASCADE
);

-- добавить столбец
ALTER TABLE answers
ADD answer_name text;

-- изменить тип столбца
ALTER TABLE question
ALTER COLUMN question_name TYPE text;

-- удаляем строки из таблицы
DELETE FROM category WHERE id = 2;

-- добавляем значения в таблицу
INSERT INTO category (category_name) VALUES
    ('Тигры');


-- обновляем значение
UPDATE question SET question_name = 'WHAAAAT???!!!' WHERE id = 3;

--
SELECT * FROM question WHERE cat_id=1;
SELECT question_name FROM question;
SELECT question_name FROM question WHERE cat_id=1;
SELECT id, question_name FROM question WHERE cat_id=1;

DROP DATABASE flashcards;