// Importamos primero que todo las variables de entorno, para la conexion a la bd
require('dotenv').config();
// Otras importaciones
const { app } = require('./app');
require('./database');

async function main() {
  await app.listen(app.get('port'));
  console.log('Server on port: ' + app.get('port'));
}

main();

// Seguir cap 4
