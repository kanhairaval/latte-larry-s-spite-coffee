const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Coffee extends Model{}

Coffee.init(
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

module.exports = Coffee;