const app = require('./app');
const sequelize = require('./utils/connection')


const PORT = process.env.PORT || 8080;

const main= async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        sequelize.sync({ force: false });
        console.log('All models were synchronized successfully.');
        app.listen(PORT);
        console.log(`Server running ${PORT}`);
    } catch (error) {
        console.log(error)
    }
}

main();