// Especialista.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const EspecialistaSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    idEspecialidad: {
        type: Schema.Types.ObjectId,
        ref: 'Especialidad'
    },
    email: {
        type: String,
    },
    rut: {
        type: String,
    },
    telefono: {
        type: String,
    }
});

const Especialista = mongoose.model("Especialista", EspecialistaSchema);
module.exports = Especialista;
