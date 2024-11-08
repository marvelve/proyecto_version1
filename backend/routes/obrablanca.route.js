const express = require('express');
const router = express.Router();
const obraBlancaCtrl = require('../controllers/obrablanca.controller');

// Rutas para Obra Blanca
router.post('/', obraBlancaCtrl.crearObraBlanca);
router.get('/:correo', obraBlancaCtrl.getObraPorCorreo);
router.put('/:correo', obraBlancaCtrl.actualizarObraPorCorreo);

module.exports = router;
