// centro.model.js
const mongoose = require('mongoose');

const centroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Centro = mongoose.model("Centro", centroSchema);
module.exports = Centro;
