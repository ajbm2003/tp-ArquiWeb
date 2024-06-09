const express = require('express');
const router = express.Router();
const userRouter= require('./user.router');
const flightRouter= require('./flight.router');
const bookingRouter= require('./booking.router')

router.use(userRouter);
router.use(flightRouter);
router.use(bookingRouter);

module.exports = router;