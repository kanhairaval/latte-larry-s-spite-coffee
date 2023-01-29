// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize  = require('../config/connection');

// Initialize bakery model (table) by extending off Sequelize's Model class
class bakery extends Model {}

// set up fields and rules for bakery model
bakery.init(
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

module.exports = bakery;