'use strict'
var express = require('express');
var router = express.Router();
var PersonaController = require('../controllers/persona');

router.post('/guardar-persona', PersonaController.guardarPersona);
router.get('/personas', PersonaController.getPersonas);
router.delete('/persona/:cedula', PersonaController.eliminarPersona);
router.get('/persona/:cedula', PersonaController.getPersona);
router.put('/persona/:cedula', PersonaController.actualizarPersona);


module.exports = router;