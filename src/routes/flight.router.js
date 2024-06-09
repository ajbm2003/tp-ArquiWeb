const {getAll, create, getOne, remove, update, getAllAvailable }= require('../controllers/flight.controllers');
const express = require('express');

const flightRouter = express.Router();

flightRouter.route('/flights')
    .get(getAll)
    .post(create);

flightRouter.route('/flights/available')
    .get(getAllAvailable);

flightRouter.route('/flights/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

module.exports = flightRouter;