const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class coffee extends Model{}

coffee.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        //   primaryKey: true,
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
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'coffee',
      }
);

module.exports = coffee;