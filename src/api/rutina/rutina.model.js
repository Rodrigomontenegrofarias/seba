// rutina.model.js
const mongoose = require('mongoose');

const rutinaSchema = new mongoose.Schema({
    test: {
        type: String,
        required: true
    }
});

const Rutina = mongoose.model("Rutina", rutinaSchema);
module.exports = Rutina;
