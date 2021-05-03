const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const palabrasSchema = new Schema({
  username: { type: String, required: true },
  palabraADefinir: { type: String, required: true },
  significado: { type: String, required: true },
}, {
  timestamps: true,
});

const Palabra = mongoose.model('palabra', palabrasSchema);

module.exports = Palabra;