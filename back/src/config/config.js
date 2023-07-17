
const { Pool } = require('pg');
//const { Sequelize } = require('sequelize')//
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

// const sequelize = new Sequelize(process.env.POSTGRES_URL, {
//     dialect: process.env.DATABASE_DIALECT,
//     logging: false,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false // Asegúrate de que esta opción sea segura para tu entorno
//         }
//     }
// })

const sequelize = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

const dbConnection = async () => {
    try {
        await sequelize.connect();
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
