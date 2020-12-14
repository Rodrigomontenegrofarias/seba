// hora.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const horaSchema = new mongoose.Schema({
    h_init: {
        type: Date,
        required: true
    },
    idEspecialista: {
        type: Schema.Types.ObjectId,
        ref: 'Especialista'
    },
    idCita: {
        type: Schema.Types.ObjectId,
        ref: 'Cita'
    }
});

const Hora = mongoose.model("Hora", horaSchema);
module.exports = Hora;
