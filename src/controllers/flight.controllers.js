const catchError = require('../middlewares/catchError');
const Flight = require('../models/Flight');
const {getAvailableFlights}= require('../services/bookingService');

const getAll= catchError(async(req, res)=>{
    const results= await Flight.findAll();
    return res.json(results).status(200);
});

const getAllAvailable= async(req, res)=>{
    try {
        const results= await getAvailableFlights();
        console.log('retornando solo los disponibles');
        return res.json(results).status(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const create = catchError(async(req, res)=>{
    const {flightNumber, airline, departureAirport, arrivalAirport, departureTime, arrivalTime, price, capacity}= req.body;
    const result = await Flight.create({
        flightNumber, 
        airline, 
        departureAirport, 
        arrivalAirport, 
        departureTime, 
        arrivalTime, 
        price, 
        capacity
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res)=>{
    const {id}= req.params;
    const result = await Flight.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Flight.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {lightNumber, airline, departureAirport, arrivalAirport, departureTime, arrivalTime, price, capacity}= req.body;
    const result = await Flight.update(
        {lightNumber, airline, departureAirport, arrivalAirport, departureTime, arrivalTime, price, capacity},
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    getAllAvailable,
    getOne,
    create,
    remove,
    update
}