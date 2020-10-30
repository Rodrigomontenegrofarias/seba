const Ejercicio = require('./ejercicio.model'); // post model

module.exports = {

    async createEjercicio(data) {
        return await Ejercicio.create(data);
    },

    async updateEjercicio(id, data) {
        return await Ejercicio.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteEjercicio(id) {
        return await Ejercicio.deleteOne({ _id: id });
    },

    async getEjercicios() {
        return await Ejercicio.find({});
    },

    async getEjercicio(id) {
        return await Ejercicio.findOne({ _id: id });
    },

}