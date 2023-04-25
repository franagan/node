const { query } = require('express');
const Persona = require('../models/persona.model');

const getAllPersonas = async (req, res) => {
    try {
        const allPersonas = await Persona.find();
        return res.json(allPersonas);
    } catch (error) {
        console.log(error);
    }
};

const setNewPersona = async (req, res) => {
    try {
        // const newObject = {};
        // for (let key in req.body) {
        //     newObject[key] = newObject[key].toLowerCase();
        //     console.log(newObject[key]);
        // }
        const newPerson = new Persona(req.body);
        const createdPerson = await newPerson.save();
        return res.status(200).json(createdPerson);
    } catch (error) {
        return res.status(500).json(error);
    }
};
//findByIdAndUpdate, updateMany,findOneAndUpdate
//put
const modPersona = async (req, res) => {
    try {
        const { id } = req.params;
        const putPersona = new Persona(req.body);
        putPersona._id = id;
        const updatePer = await Persona.findByIdAndUpdate(id, putPersona, {
            new: true,
        });
        return res.status(200).json(updatePer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deletePersona = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const deletePer = await Persona.findByIdAndDelete(id);
        if (!deletePer) {
            return res.status(404).json({ mensaje: 'persona no encontrada' });
        }
        return res.status(200).json(deletePer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const filterByCity = async (req, res) => {
    try {
        console.log(req.query);
        const { citysearch } = req.query;
        const personCity = await Persona.find({
            city: citysearch.toLowerCase(),
        }).sort({ name: -1 });
        if (!personCity) {
            return res.status(404).json({ mensaje: 'city no encontrada' });
        }
        return res.status(200).json(personCity);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//crear una nueva ruta que filtre por nombre y los pueda ordenar por email descendente.

const filterByName = async (req, res) => {
    try {
        console.log(req.query);
        let { nameSearch, sort } = req.query;
        sort = sort === 'asc' ? 1 : -1;

        const nameSer = await Persona.find({
            name: nameSearch,
        }).sort({ email: -1 });
        if (!nameSer) {
            return res.status(404).json({ mensaje: 'name no encontrado' });
        }
        return res.status(200).json(nameSer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAllPersonas,
    setNewPersona,
    modPersona,
    deletePersona,
    filterByCity,
    filterByName,
};
