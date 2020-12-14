const Rutina = require('./rutina.model'); // post model

module.exports = {

    async createRutina(data) {
        return await Rutina.create(data);
    },

    async updateRutina(id, data) {
        return await Rutina.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteRutina(id) {
        return await Rutina.deleteOne({ _id: id });
    },

    async getRutinas() {
        return await Rutina.find({});
    },

    async getRutina(id) {
        return await Rutina.findOne({ _id: id });
    },

}