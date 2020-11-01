// rutina.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const rutinaSchema = new mongoose.Schema({
    idPaciente: {
        type: Schema.Types.ObjectId,
        ref: 'Rutina'
    },
    fecha: {
        type: Date,
        required: true
    },
});

const Rutina = mongoose.model("Rutina", rutinaSchema);
module.exports = Rutina;
