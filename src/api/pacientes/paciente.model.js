// Paciente.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PacienteSchema = new mongoose.Schema({
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

const Paciente = mongoose.model("Paciente", PacienteSchema);
module.exports = Paciente;
