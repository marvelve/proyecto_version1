const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno desde .env

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario
  process.env.DB_PASSWORD, // Contraseña
  {
    host: process.env.DB_HOST, // Host de la base de datos
    dialect: 'mysql', // Tipo de base de datos
    port: process.env.DB_PORT || 3306, // Puerto de MySQL
  }
);

// Probar la conexión
sequelize
  .authenticate()
  .then(() => console.log('Conexión a MySQL establecida correctamente.'))
  .catch((err) => console.error('Error al conectar a MySQL:', err));

module.exports = sequelize;