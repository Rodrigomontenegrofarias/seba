// rutina.model.js
const mongoose = require('mongoose');

const rutinaSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
});

const Rutina = mongoose.model("Rutina", rutinaSchema);
module.exports = Rutina;
