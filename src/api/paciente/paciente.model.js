// paciente.model.js
const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    altura: {
        type: Number,
        required: true
    }
});

const Paciente = mongoose.model("Paciente", pacienteSchema);
module.exports = Paciente;
