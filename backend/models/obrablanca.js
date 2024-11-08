const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importa tu conexión a la base de datos

const ObraBlanca = sequelize.define('ObraBlanca', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medida_area_privada: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    medida_cocina: DataTypes.DOUBLE,
    medida_bano: DataTypes.DOUBLE,
    medida_zona_oficios: DataTypes.DOUBLE,
    medida_salpicadero_cocina: DataTypes.DOUBLE,
    cantidad_banos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad_poyos: DataTypes.INTEGER,
    cantidad_panel: DataTypes.INTEGER,
    cantidad_muros: DataTypes.INTEGER,
    cantidad_puntos_electricos: DataTypes.INTEGER
}, {
    tableName: 'obra_blanca',
    timestamps: false
});

module.exports = ObraBlanca;
