const pacienteServices = require('./paciente.service');

module.exports = {

    async createPaciente(req, res, next) {
        try {
            const result = await pacienteServices.createPaciente(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear un Paciente.",
                    code: 0
                });
            }
            return res.json({
                status: 'success',
                data: result,
                code: 1
            });
        } catch (exception) {
            next(exception);
        }
    },

    async updatePaciente(req, res, next) {
        try {
            const result = await pacienteServices.updatePaciente(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar el Paciente.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }

    },
    async deletePaciente(req, res, next) {
        try {
            const result = await pacienteServices.deletePaciente(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar el Paciente.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }
    },

    async getPacientes(req, res, next) {
        try {
            const result = await pacienteServices.getPacientes();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener los Pacientes.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }

    },

    async getPaciente(req, res, next) {
        try {
            const result = await pacienteServices.getPaciente(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar el Paciente.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }
    },




}
