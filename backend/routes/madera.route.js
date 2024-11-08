const express = require('express');
const router = express.Router();
const maderaCtrl = require('../controllers/madera.controller');

router.post('/', maderaCtrl.crearMadera); // POST /api/madera
router.get('/:correo', maderaCtrl.getMaderaPorCorreo); // GET /api/madera/:correo
router.put('/:correo', maderaCtrl.actualizarMaderaPorCorreo); // PUT /api/madera/:correo

module.exports = router;
