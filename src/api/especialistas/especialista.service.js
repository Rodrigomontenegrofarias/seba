const Especialista = require('./especialista.model'); // Especialista model

module.exports = {

    async createEspecialista(data) {
        return await Especialista.create(data);
    },

    async updateEspecialista(id, data) {
        return await Especialista.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteEspecialista(id) {
        return await Especialista.deleteOne({ _id: id });
    },

    async getEspecialistas() {
        return await Especialista.find({});
    },

    async getEspecialista(id) {
        return await Especialista.findOne({ _id: id });
    },

}