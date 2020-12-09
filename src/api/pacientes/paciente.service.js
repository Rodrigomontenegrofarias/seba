const Paciente = require('./paciente.model'); // Paciente model

module.exports = {

    async createPaciente(data) {
        return await Paciente.create(data);
    },

    async updatePaciente(id, data) {
        return await Paciente.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deletePaciente(id) {
        return await Paciente.deleteOne({ _id: id });
    },

    async getPacientes() {
        return await Paciente.find({});
    },

    async getPaciente(id) {
        return await Paciente.findOne({ _id: id });
    },

}