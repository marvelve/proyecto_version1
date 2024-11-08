
const Usuario = require('../models/usuario');
const usuarioCtrl = {};

/** DEFINO LOS MÉTODOS  */

// Obtener todos los usuarios
usuarioCtrl.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(); // Obtiene todos los registros de la tabla Usuario
        res.json(usuarios); // Retorna los usuarios en formato JSON
    } catch (error) {
        res.status(500).json({
            status: 'Error al obtener usuarios',
            error: error.message
        });
    }
};
                   

// Crear usuario
usuarioCtrl.createUsuarios = async (req, res) => { 
    try {
        const usuario = await Usuario.create(req.body); // Crea un nuevo usuario directamente desde el request
        res.json({
            status: 'Usuario Registrado',
            data: usuario  // Opcional: Devuelve el usuario creado
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error al registrar usuario',
            error: error.message
        });
    }
};




//Actualizar usuario

usuarioCtrl.editarUsuario = async (req, res) => {
    const { correo } = req.params; // Obtenemos el ID de los parámetros de la URL
    const usuarioEdit = {  
        nombre: req.body.nombre,
        correo: req.body.correo,
        nombre_proyecto: req.body.nombre_proyecto,
        ciudad: req.body.ciudad,
        contrasena: req.body.contrasena
    };

    try {
        const resultado = await Usuario.update(usuarioEdit, { 
            where: { correo: correo } // Condición de búsqueda
        });

        if (resultado[0] === 0) { // No se encontró un registro con ese ID
            return res.status(404).json({ status: 'Usuario no encontrado' });
        }

        res.json({ status: 'Usuario actualizado' });
    } catch (error) {
        res.status(500).json({ status: 'Error actualizando usuario', error: error.message });
    }
};


// Eliminar usuario
usuarioCtrl.eliminarUsuario = async (req, res) => {
    try {
        const resultado = await Usuario.destroy({
            where: { correo: req.params.correo } // Especifica la condición para eliminar el usuario
        });

        if (resultado === 0) { // No se eliminó ningún registro
            return res.status(404).json({
                status: 'Usuario no encontrado'
            });
        }

        res.json({ status: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({
            status: 'Error al eliminar usuario',
            error: error.message
        });
    }
};

// Buscar un usuario por correo
usuarioCtrl.getUsuarioPorCorreo = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: { correo: req.params.correo } // Condición para buscar por correo
        });

        if (!usuario) {
            return res.status(404).json({
                status: 'Usuario no encontrado'
            });
        }

        res.json(usuario); // Retorna el usuario encontrado
    } catch (error) {
        res.status(500).json({
            status: 'Error al buscar usuario',
            error: error.message
        });
    }
};

//METODO LOGIN
// Login de usuario básico
usuarioCtrl.loginUsuario = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        // Buscar el usuario por correo y contraseña
        const usuario = await Usuario.findOne({
            where: { correo, contrasena }
        });

        if (!usuario) {
            return res.status(404).json({
                status: 'Error',
                message: 'Correo o contraseña incorrectos'
            });
        }

        res.json({
            status: 'Login exitoso',
            usuario
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error.message
        });
    }
};

 
//exporto el módulo
module.exports = usuarioCtrl;
