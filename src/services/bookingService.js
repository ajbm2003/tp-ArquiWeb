const Flight = require('../models/Flight');
const User = require('../models/User');
const Booking = require('../models/Booking');

const createBooking = async (flightNumber, passengerName, passengerEmail) => {
  // Verificar si el vuelo y el ususario existe
  const flight = await Flight.findByPk(flightNumber);
  const user = await User.findOne({where: { passengerEmail }})
  if (!flight) {
    throw new Error('Flight not found');
  }
  if(!user){
    throw new Error('User not found');
  }

  // Verificar la disponibilidad
  const bookings = await Booking.count({ where: { flightNumber } });
  const capacity = flight.capacity; 

  if (bookings >= capacity) {
    throw new Error('No available seats');
  }
  // Crear la reserva
  const booking = await Booking.create({
    passengerName,
    passengerEmail,
    flightNumber,
  });

  return booking;
};

const getAvailableFlights = async () => {
  const flights = await Flight.findAll();
  const availableFlights = [];

  for (const flight of flights) {
    const bookings = await Booking.count({ where: { flightNumber: flight.flightNumber } });
    const maxCapacity = flight.capacity;

    if (bookings < maxCapacity) {
      availableFlights.push(flight);
    }
  }

  return availableFlights;
};

module.exports = {
  createBooking,
  getAvailableFlights
};
