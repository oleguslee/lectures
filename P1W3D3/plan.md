1. cli

миграции

npm install --save-dev sequelize-cli 

npx sequelize-cli init

Нужно поправить config

2. создать модель

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

Когда создаем модель, называем ее в единственном числе, однако таблица будет названа во множественном
Также при создании таблицы в модель добавятся поля id, createdAt, updatedAt

Если мы хотим внести какие-то изменения, например обновить модель ВАЖНО обновить миграции (руками)


3. После того, как первая миграция создана, ее надо накатить
npx sequelize-cli db:migrate

Чтобы откатить миграции
npx sequelize-cli db:migrate:undo

Модели и миграции таблиц должны быть одинаковыми

4.  Чтобы сделать ссылку по ключам, необходимо в моделях добавить информацию в associate
Пример:
в модель на которую ссылаемся

this.hasMany(Player, {
  foreignKey: 'clubId'
});

в модель, которой ссылаемся

this.belongsTo(Team);

5. seeder

 npx sequelize-cli seed:generate --name user

 Далее заполняем массив данных и выполняем команду
 npx sequelize-cli db:seed:all

 или для отдельного сидера

 npx sequelize-cli db:seed --seed 20210810202032-post.js  


