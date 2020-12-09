// paciente.model.js
const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    peso: {
        type: Number,
    },
    edad: {
        type: Number,
    },
    altura: {
        type: Number,
    },
    name: {
        type: String,
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

const Paciente = mongoose.model("Paciente", pacienteSchema);
module.exports = Paciente;
