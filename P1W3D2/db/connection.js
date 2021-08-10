const { Sequelize } = require('sequelize');

// Подключаемся к существующей базе
const sequelize = new Sequelize('people', 'bob', '123', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize