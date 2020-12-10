const Especialista = require('./especialista.model'); // Especialista model
const Hora = require('../horas/hora.model');
const Cita = require('../citas/cita.model');

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


    //Get citas de especialista
    async getHorariosEspecialista(id) {
        return await Hora.find({ idEspecialista: id });
    },
    //Get citas de especialista
    async getHorariosWeekDay(id, weekDay) {
        return await Hora.find(
            { 
                idEspecialista: id,
                diaSemana: weekDay
            }
        );
    },
    //Get horarios de especialista
    async getCitasEspecialista(id) {
        return await Cita.find({ idEspecialista: id });
    },

}