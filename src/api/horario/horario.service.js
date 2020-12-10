const Horario = require('./horario.model'); // Horario model

module.exports = {

    async createHorario(data) {
        return await Horario.create(data);
    },

    async updateHorario(id, data) {
        return await Horario.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteHorario(id) {
        return await Horario.deleteOne({ _id: id });
    },

    async getHorarios() {
        return await Horario.find({});
    },

    async getHorario(id) {
        return await Horario.findOne({ _id: id });
    },

}