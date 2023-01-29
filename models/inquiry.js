// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize inquiry model (table) by extending off Sequelize's Model class
class inquiry extends Model {}

// set up fields and rules for inquiry model
inquiry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        clientEmail: {
            type: DataTypes.STRING,
            references: {
                model: 'client',
                key: 'email',
            },
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inquiry', 
    }
)

module.exports = inquiry; 