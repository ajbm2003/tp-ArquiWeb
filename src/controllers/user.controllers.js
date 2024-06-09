const catchError = require('../middlewares/catchError');
const User = require('../models/User');

const getAll= catchError(async(req, res)=>{
    const results= await User.findAll();
    return res.json(results).status(200);
});

const register = catchError(async(req, res)=>{
    const {firstName, lastName, email, password, DNI}= req.body;
    const result = await User.create({
        firstName,
        lastName,
        email,
        password,
        DNI
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res)=>{
    const {id}= req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {firstName, lastName, email, password, DNI}= req.body;
    const result = await User.update(
        {lastName, firstName, email, password, DNI},
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports= {
    getAll,
    register,
    getOne, 
    remove,
    update
}