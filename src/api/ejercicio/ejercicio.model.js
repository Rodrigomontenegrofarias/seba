// ejercicio.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ejercicioSchema = new mongoose.Schema({
    idRutina: {
        type: Schema.Types.ObjectId,
        ref: 'Rutina'
    },
    nombre: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    vidLink: {
        type: String,
        required: true
    },
});

const Ejercicio = mongoose.model("Ejercicio", ejercicioSchema);
module.exports = Ejercicio;
