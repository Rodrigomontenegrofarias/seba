// Horario.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const HorarioSchema = new mongoose.Schema({
    h_init: {
        type: Date,
        required: true
    },
    idEspecialista: {
        type: Schema.Types.ObjectId,
        ref: 'Especialista'
    },
    diaSemana: {
        type: String,
    }
});

const Horario = mongoose.model("Horario", HorarioSchema);
module.exports = Horario;
