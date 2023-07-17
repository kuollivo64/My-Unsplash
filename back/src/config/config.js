
const { Sequelize } = require('sequelize')
require('dotenv').config();

// const sequelize = new Sequelize(
//     process.env.DATABASE_NAME,
//     process.env.DATABASE_USER,
//     process.env.DATABASE_PASS,
//     {
//         host: process.env.DATABASE_HOST,
//         dialect: process.env.DATABASE_DIALECT,
//         port: process.env.DATABASE_PORT,
//         logging: false
//     }
// );
const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Asegúrate de que esta opción sea segura para tu entorno
        }
    }
})

const dbConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('DB-ONLINE');
    } catch (error) {
        console.log(error);
        throw new Error('Error init the database!!!')
    }
}

module.exports = {
    dbConnection,
    sequelize,
}
