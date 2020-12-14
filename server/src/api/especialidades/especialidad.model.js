// especialidad.model.js
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const especialidadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    idArea: {
        type: Schema.Types.ObjectId,
        ref: 'Area'
    },
    duracionConsulta: {
        type: Number,
        required: true
    },
});

const Especialidad = mongoose.model("Especialidad", especialidadSchema);
module.exports = Especialidad;
