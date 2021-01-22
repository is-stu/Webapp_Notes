const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
// timestamp agrega fecha de agregacion y de actualizacion

module.exports = model('Note', noteSchema);
