const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Flight = require('./Flight');
const User = require('./User');

const Booking = sequelize.define('Booking', {
  passengerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passengerEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: User,
        key: 'email'
      }
  },
  flightNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Flight,
      key: 'flightNumber'
    }
  },
}, {
});

//Relaciones con los otros modelos
Flight.hasMany(Booking, { foreignKey: 'flightNumber' });
Booking.belongsTo(Flight, { foreignKey: 'flightNumber' });

User.hasMany(Booking,{foreignKey: 'passengerEmail'});
Booking.belongsTo(User, {foreignKey: 'passengerEmail'})

module.exports = Booking;