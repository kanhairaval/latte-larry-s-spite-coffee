// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize coffee model (table) by extending off Sequelize's Model class
class coffee extends Model{}

// set up fields and rules for coffee model
coffee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      coffeeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'coffee',
      }
);

module.exports = coffee;