const catchError = require('../middlewares/catchError');
const Booking= require('../models/Booking');
const {createBooking}= require('../services/bookingService');

const getAll = catchError(async(req, res)=>{
    const results = await Booking.findAll();
    return res.json(results).status(200);
});

const create = catchError(async(req, res)=>{
    const {flightNumber, passengerName, passengerEmail}= req.body;
    const result= await createBooking(flightNumber, passengerName, passengerEmail)
    return res.status(201).json(result);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Booking.destroy({ where: {id} });
    return res.sendStatus(204);
});

module.exports= {
    getAll,
    create,
    remove
}