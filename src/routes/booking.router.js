const {getAll, create, remove}= require('../controllers/booking.controllers');
const express = require('express');

const bookingRouter = express.Router();

bookingRouter.route('/bookings')
    .get(getAll)
    .post(create)

bookingRouter.route('/bookings/:id')
    .delete(remove)

module.exports = bookingRouter