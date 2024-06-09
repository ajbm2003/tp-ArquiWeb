const { DataTypes }= require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DNI: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true
    }
});

module.exports = User;