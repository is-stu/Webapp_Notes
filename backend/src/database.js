// Traemos el driver para conectar con mongoDB
const mongoose = require('mongoose');

// Traemos la cadena de la base de datos (Ex abajo en comentario - se utiliza Variables de entorno por seguridad)
// const uri =
//   'mongodb+srv://<user>:<password>@todomern.epshd.mongodb.net/TIPO -> Connect your app... ';
// Para entrar a la variable de entorno, necesitamos utilizar process.env
const uri = process.env.URI_MONGO
  ? process.env.URI_MONGO
  : console.log('No tiene enlace a la BD');

//   Tambien puedo colocar 'mongodb://localhost/databasetest'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => console.log('DB is Connected'));
