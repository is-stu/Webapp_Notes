const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true, //Que es requerido, obviamente
      trim: true, //limpia los datos, ejemplo, espacios innecesarios
      unique: true, // que sea unico en la bd, que si existe uno ya no se pueda crear otro
    },
  },
  {
    timestamps: true,
  }
);
// timestamp agrega fecha de agregacion y de actualizacion

module.exports = model('User', userSchema);
