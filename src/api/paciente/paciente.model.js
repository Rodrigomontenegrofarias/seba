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
