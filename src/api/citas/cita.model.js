// cita.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const citaSchema = new mongoose.Schema({
    idPaciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    idHora: {
        type: Schema.Types.ObjectId,
        ref: 'Hora'
    },
    idEspecialista: {
        type: Schema.Types.ObjectId,
        ref: 'Especialista'
    },
    fechaHora: {
        type: Date,
        required: true
    },
    confirmada: {
        type: Boolean,
        default: false
    }
});

const Cita = mongoose.model("Cita", citaSchema);
module.exports = Cita;
