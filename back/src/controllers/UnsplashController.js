
const { response } = require("express");
const { Unsplash } = require('./../models/UnsplashModel');
const { Op } = require("sequelize");

//GET CONTROLLER Unsplash    
const getUnsplash = async (req, res = response) => {
    try {
        const unsplash = await Unsplash.findAll({ where: { isactiveunsplash: true }, order:[ ["cod_unsplash", "DESC"] ] });
        //{ where: { #logica } }
        if (!unsplash) {
            return res.status(400).json({
                ok: false,
                msg: "No found unsplash",
            });
        }
        res.status(201).json({ unsplash });
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
            filters.title = { [Op.iLike]: `%${title}%` };
        }
        const unsplash = await Unsplash.findAll({ where: filters })
        if (!unsplash) {
            return res.status(400).json({
                ok: false,
                msg: "No found unsplash",
            });
        }
        res.status(201).json({ unsplash });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error exception call the administration!!!",
        });
    }
}

//GET ID CONTROLLER Unsplash
const getUnsplashId = async (req, res = response) => {
    const cod_unsplash = req.params.id
    try {
        const unsplash = await Unsplash.findOne({ where: { cod_unsplash: cod_unsplash } })
        if (!unsplash) {
            return res.status(400).json({
                ok: false,
                msg: "The cod_unsplash (" + cod_unsplash + ") not exist.",
            });
        }

        res.status(201).json({ unsplash });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error exception call the administration!!!",
        });
    }
}
//POST CONTROLLER Unsplash
const postUnsplash = async (req, res = response) => {
    const { cod_unsplash } = req.body;
    try {
        //VALID cod_unsplash EXIST 
        let unsplash = await Unsplash.findOne({ where: { cod_unsplash: cod_unsplash } });
        if (unsplash) {
            return res.status(400).json({
                ok: false,
                msg: "The cod_unsplash (" + cod_unsplash + ") is registred.",
            });
        }
        //CREATE Unsplash 
        const newUnsplash = new Unsplash({ cod_unsplash: cod_unsplash, ...req.body });
        //SAVE Unsplash 
        await newUnsplash.save()
        res.status(201).json({
            ok: true,
            msg: "CREATE Unsplash",
            cod_unsplash: newUnsplash.cod_unsplash,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error exception call the administration!!!",
        });
    }
}
//PUT CONTROLLER Unsplash
const putUnsplash = async (req, res = response) => {
    const cod_unsplash = req.params.id;
    try {
        //VALID cod_unsplash EXIST 
        let unsplash = await Unsplash.findOne({ where: { cod_unsplash: cod_unsplash } });
        if (!unsplash) {
            return res.status(400).json({
                ok: false,
                msg: "The Unsplash (" + cod_unsplash + ") not exist.",
            });
        }
        //EDIT Unsplash
        await unsplash.update({ ...req.body });
        unsplash.save();
        res.status(201).json({
            ok: true,
            msg: "Unsplash con cod_unsplash (" + cod_unsplash + ") editado.",
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
        let unsplash = await Unsplash.findOne({ where: { cod_unsplash: cod_unsplash } });
        if (!unsplash) {
            return res.status(400).json({
                ok: false,
                msg: "The Unsplash (" + cod_unsplash + ") not exist.",
            });
        }
        //DELETE Unsplash
        await unsplash.update({ isactiveunsplash: false });
        unsplash.save();
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
    getUnsplashId,
    postUnsplash,
    putUnsplash,
    deleteUnsplash,
    searchUnsplash
}
