const Hora = require('./hora.model'); // Hora model

module.exports = {

    async createHora(data) {
        return await Hora.create(data);
    },

    async updateHora(id, data) {
        return await Hora.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteHora(id) {
        return await Hora.deleteOne({ _id: id });
    },

    async getHoras() {
        return await Hora.find({});
    },

    async getHora(id) {
        return await Hora.findOne({ _id: id });
    },

}