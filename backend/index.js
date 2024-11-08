const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./database'); // Importar la conexión MySQL
const app = express();  // la constante app tendrá ahora todo el funcionamiento del servidor

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json()); 
app.use(cors({ origin: 'http://localhost:4200' }));

// Rutas de nuestro servidor
app.use('/api/usuarios', require('./routes/usuario.route'));
app.use('/api/obrablanca', require('./routes/obrablanca.route'));
app.use('/api/madera', require('./routes/madera.route'));

// Sincronizar con la base de datos antes de iniciar el servidor
sequelize.sync({ force: false }) // Crea tablas si no existen, pero no elimina datos
  .then(() => {
    app.listen(app.get('port'), () => {
      console.log('Server activo en el puerto', app.get('port'));
    });
  })
  .catch((err) => console.error('Error al sincronizar la base de datos:', err));