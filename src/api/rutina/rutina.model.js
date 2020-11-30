// rutina.model.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const rutinaSchema = new mongoose.Schema({
    rut: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
});

const Rutina = mongoose.model("Rutina", rutinaSchema);
module.exports = Rutina;
