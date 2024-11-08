
const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');

router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.createUsuarios);
router.put('/:correo',usuarioCtrl.editarUsuario); //Actualizar datos (uno a la vez)
router.delete('/:correo', usuarioCtrl.eliminarUsuario);
router.get('/:correo', usuarioCtrl.getUsuarioPorCorreo);
router.post('/login', usuarioCtrl.loginUsuario);

module.exports = router;