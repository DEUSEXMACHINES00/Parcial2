'use strict'

var Persona = require('../models/persona');

var controller = {

    guardarPersona: function (req, res) {
        var params = req.body;

        var persona = new Persona();
        persona.cedula = params.cedula;
        persona.nombre = params.nombre;
        persona.apellidos = params.apellidos;
        persona.edad = params.edad;

        Persona.findOne({ cedula: persona.cedula }, (err, resultado) => {
            if (err) return res.status(500).send({ err });
            if (!resultado) {
                persona.save((err, personaStored) => {
                    if (err) return res.status(500).send({ err });
                    if (!personaStored) return res.status(404).send({ message: "No se ha podido registrar la persona..." });
                    return res.status(200).send({ persona: personaStored });
                });
            } else {
                res.status(400).json({ error: 'Ya existe la persona ' });
            }
        })

    },
    getPersonas: function (req, res) {

        Persona.find({}).exec((err, personas) => {
            if (err) return res.status(500).send({ message: "Error al devolver datos.." });
            if (!personas) return res.status(404).send({ message: "No hay personas registradas para mostrar..." });
            return res.status(200).send({ personas: personas });
        });
    },
    eliminarPersona: function (req, res) {
        var cedula = req.params.cedula;
        Persona.findOneAndDelete({ "cedula": cedula }, (err, persona) => {
            if (err) return res.status(500).send({ message: "Error al eliminar persona..." });
            if (!persona) return res.status(404).send({ message: "La persona no existe..." });
            return res.status(200).send({ persona });
        });
    },
    getPersona: function (req, res) {
        var cedula = req.params.cedula;
        Persona.findOne({ "cedula": cedula }, (err, persona) => {
            if (err) return res.status(500).send({ message: "Error al devolver datos..." });
            if (!persona) return res.status(404).send({ message: "La persona no existe..." });
            return res.status(200).send({ persona });
        });
    },
    actualizarPersona: function (req, res) {

        var cedula = req.params.cedula;
        var DataToUpdate = req.body;              

        Persona.findOneAndUpdate({ "cedula": cedula }, {"$set":DataToUpdate}, (err, personaUpdate) => {
            if (err) return res.status(500).send({ message: "Error al actualizar datos.." });
            if (!personaUpdate) return res.status(404).send({ message: "No existe persona a actualizar..." });
            return res.status(200).send({ personaUpdate });
        });
    }

}

module.exports = controller;