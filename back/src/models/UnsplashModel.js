
const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/config');
require('dotenv').config();

const Unsplash = sequelize.define('unsplash', {
    cod_unsplash: {
        type: DataTypes.STRING,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING,
    },


    imageURL: {
        type: DataTypes.STRING,
    },


    active: {
        type: DataTypes.BOOLEAN,
    },


    isactiveunsplash: {
        type: DataTypes.BOOLEAN,
    },
},
    {
        timestamps: false,
        schema: process.env.DATABASE_SCHEMA,
        tableName: 'unsplash'
    });
module.exports = {
    Unsplash
}
