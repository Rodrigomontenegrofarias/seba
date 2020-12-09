const { } = require('./fichaPaciente.controller');
const fichaPaciente = require('./fichaPaciente.model');

module.exports = {

    async createFichaPaciente(data) {
        return await fichaPaciente.create(data);
    },

    async updateFichaPaciente(id, data) {
        return await fichaPaciente.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteFichaPaciente(id) {
        return await fichaPaciente.deleteOne({ _id: id });
    },

    async getFichasPaciente() {
        return await fichaPaciente.find({});
    },

    async getFichaPaciente(id) {
        return await fichaPaciente.findOne({ _id: id });
    },

}