const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bakery extends Model {}

Bakery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        bakeryName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bakeryNote: {
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
        modelName: 'bakery',
    }
);

module.exports = Bakery;