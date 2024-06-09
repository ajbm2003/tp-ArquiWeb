const express = require('express');
const app = express();
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler.js');

//Middlewares
app.use(express.json());

app.get('/', (req, res)=>{
    return res.send("Welcome to express!")
})

app.use('/api/v1', router);

//Middlewares despues de las rutas
app.use(errorHandler)

module.exports = app;