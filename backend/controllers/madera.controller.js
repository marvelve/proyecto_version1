const Madera = require('../models/madera');

// Crear registro en la tabla Madera
exports.crearMadera = async (req, res) => {
    try {
        const nuevaMadera = await Madera.create(req.body);
        res.json({ status: 'Registro de madera creado', nuevaMadera });
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
};

// Obtener registros de madera por correo
exports.getMaderaPorCorreo = async (req, res) => {
    try {
        const madera = await Madera.findAll({ where: { correo: req.params.correo } });
        if (madera.length > 0) {
            res.json(madera);
        } else {
            res.status(404).json({ message: 'No se encontraron Medidas en Madera para este correo' });
        }
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
};

// Actualizar registro de madera por correo
exports.actualizarMaderaPorCorreo = async (req, res) => {
    try {
        const actualizado = await Madera.update(req.body, {
            where: { correo: req.params.correo }
        });
        if (actualizado[0] === 1) {
            res.json({ status: 'Registro actualizado' });
        } else {
            res.status(404).json({ message: 'Registro no encontrado o sin cambios' });
        }
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
};
