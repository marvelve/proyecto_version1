const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que este sea el archivo que configura tu conexión a la base de datos

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      isEmail: true // Validación de correo electrónico
    }
  },
  nombre_proyecto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING, 
    allowNull: false
  }
}, {
  tableName: 'usuario', // Nombre de la tabla en la base de datos
  timestamps: false // Opcional: si no necesitas columnas createdAt y updatedAt
});

module.exports = Usuario;
