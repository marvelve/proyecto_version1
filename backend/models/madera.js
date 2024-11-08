const { DataTypes } = require('sequelize');
const db = require('../database'); 

const Madera = db.define('madera', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anchoMuebleAlto: DataTypes.DOUBLE,
    anchoMuebleBajo:DataTypes.DOUBLE, 
    anchoMuebleBano: DataTypes.DOUBLE,
    anchoCloset:DataTypes.DOUBLE,
    anchoVestier:DataTypes.DOUBLE,
    cantidadCloset:DataTypes.INTEGER,
    cantidadPuertas:DataTypes.INTEGER,
    medidaPuertas: DataTypes.DOUBLE
    
}, {
    timestamps: false, // Si no necesitas createdAt y updatedAt
    tableName: 'madera' // Asegúrate que coincida con la tabla en la base de datos
});

module.exports = Madera;
