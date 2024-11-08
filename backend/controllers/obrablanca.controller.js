const ObraBlanca = require('../models/obrablanca');

// Crear registro de Obra Blanca
const crearObraBlanca = async (req, res) => {
    try {
        const nuevaObra = await ObraBlanca.create(req.body);
        res.json({ status: 'Registro creado', nuevaObra });
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
};

// Obtener registros de Obra Blanca por correo
const getObraPorCorreo = async (req, res) => {
    try {
        const { correo } = req.params;
        const registros = await ObraBlanca.findAll({ where: { correo } });

        if (registros.length === 0) {
            return res.status(404).json({ status: 'Error', message: 'No se encontraron registros para este correo' });
        }

        res.json(registros);
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
};

// Actualizar registro de Obra Blanca por correo
const actualizarObraPorCorreo = async (req, res) => {
    try {
        const { correo } = req.params;
        const [actualizado] = await ObraBlanca.update(req.body, { where: { correo } });

        if (!actualizado) {
            return res.status(404).json({ status: 'Error', message: 'Registro no encontrado para actualizar' });
        }

        res.json({ status: 'Registro actualizado' });
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
};

module.exports = {
    crearObraBlanca,
    getObraPorCorreo,
    actualizarObraPorCorreo
};
