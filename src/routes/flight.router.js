const {getAll, create, getOne, remove, update, getAllAvailable }= require('../controllers/flight.controllers');
const express = require('express');

const flightRouter = express.Router();

flightRouter.route('/flights')
    .get((req, res) => {
            if (req.query.filter === 'available') {
                return getAllAvailable(req, res);
            }
        return getAll(req, res);
        })
    .post(create);

flightRouter.route('/flights/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

module.exports = flightRouter;