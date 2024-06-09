const sequelize = require('../utils/connection');
const {DataTypes} = require('sequelize');

const Flight = sequelize.define('flight', {
    flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    airline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    departureAirport: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    arrivalAirport: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    capacity:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Flight;