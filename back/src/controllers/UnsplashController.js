
const { response } = require("express");
//const { Unsplash } = require('./../models/UnsplashModel');
//const { Op } = require("sequelize");
const { sequelize } = require("../config/config");
require('dotenv').config();

//GET CONTROLLER Unsplash    
const getUnsplash = async (req, res = response) => {
    try {
        //const unsplash = await Unsplash.findAll({ where: { isactiveunsplash: true }, order:[ ["cod_unsplash", "DESC"] ] });
        const unsplash = await sequelize.query(`SELECT cod_unsplash, title, "imageURL", isactiveunsplash FROM ${process.env.DATABASE_SCHEMA}.unsplash WHERE isactiveunsplash=true ORDER BY cod_unsplash DESC;`)
        if (!unsplash.rows) {
            return res.status(400).json({
                ok: false,
                msg: "No found unsplash",
            });
        }
        res.status(201).json(unsplash.rows);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error exception call the administration!!!",
        });
    }
}

const searchUnsplash = async (req, res = response) => {
    const { title } = req.query;
    try {
        const filters = {};
        if (title) {
            filters.title = `%${title}%`;
        }
        //const unsplash = await Unsplash.findAll({ where: filters })
        const query = `
            SELECT cod_unsplash, title, "imageURL", isactiveunsplash
            FROM ${process.env.DATABASE_SCHEMA}.unsplash
            WHERE isactiveunsplash = true
                AND title ILIKE $1
            ORDER BY cod_unsplash DESC;
        `;
        const unsplash = await sequelize.query(query, [filters.title])
        if (!unsplash.rows) {
            return res.status(400).json({
                ok: false,
                msg: "No found unsplash",
            });
        }
        res.status(201).json(unsplash.rows);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error exception call the administration!!!",
        });
    }
}

//POST CONTROLLER Unsplash
const postUnsplash = async (req, res = response) => {
    const { cod_unsplash, title, imageurl, isactiveunsplash } = req.body;
    try {
        //VALID cod_unsplash EXIST 
        const queryCheck = 'SELECT * FROM unsplash WHERE cod_unsplash = $1;';
        const resultCheck = await sequelize.query(queryCheck, [cod_unsplash]);

        if (resultCheck.rowCount > 0) {
            return res.status(400).json({
                ok: false,
                msg: `The cod_unsplash (${cod_unsplash}) is registered.`,
            });
        }
        //CREATE Unsplash 
        const queryCreate = 'INSERT INTO unsplash (cod_unsplash, title, "imageURL", isactiveunsplash) VALUES ($1, $2, $3, $4);';
        const values = [cod_unsplash, title, imageurl, isactiveunsplash];
        await sequelize.query(queryCreate, values);

        res.status(201).json({
            ok: true,
            msg: "CREATE Unsplash",
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error exception call the administration!!!",
        });
    }
}

//DELETE CONTROLLER Unsplash
const deleteUnsplash = async (req, res = response) => {
    const cod_unsplash = req.params.id;
    try {
        //VALID cod_unsplash EXIST 
        // const queryCheck = 'SELECT * FROM unsplash WHERE cod_unsplash = $1;';
        // const resultCheck = await sequelize.query(queryCheck, [cod_unsplash]);
    
        // if (resultCheck.rowCount > 0) {
        //     return res.status(400).json({
        //         ok: false,
        //         msg: "The Unsplash (" + cod_unsplash + ") not exist.",
        //     });
        // }
        //DELETE Unsplash
        const deleteQuery = `UPDATE unsplash SET isactiveunsplash = false WHERE cod_unsplash = $1`;
        await sequelize.query(deleteQuery, [cod_unsplash]);
    
        res.status(201).json({
            ok: true,
            msg: "Unsplash con cod_unsplash (" + cod_unsplash + ") eliminado.",
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error exception call the administration!!!",
        });
    }
}

module.exports = {
    getUnsplash,
    postUnsplash,
    deleteUnsplash,
    searchUnsplash
}
