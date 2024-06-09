const express = require('express');
const router = express.Router();
const userRouter= require('./user.router');
const flightRouter= require('./flight.router');

router.use(userRouter);
router.use(flightRouter);

module.exports = router;