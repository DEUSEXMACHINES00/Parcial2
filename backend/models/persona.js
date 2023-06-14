'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema = Schema({
    cedula: String,
    nombre: String,
    apellidos: String,
    edad: Number
});

module.exports = mongoose.model('Persona', PersonaSchema);