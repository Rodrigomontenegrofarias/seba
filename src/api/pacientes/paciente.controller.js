const PacienteServices = require('./paciente.service');

module.exports = {

    async createPaciente(req, res, next) {
        try {
            const result = await PacienteServices.createPaciente(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Paciente.",
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
            const result = await PacienteServices.updatePaciente(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar la Paciente.",
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
            const result = await PacienteServices.deletePaciente(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar la Paciente.",
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
            const result = await PacienteServices.getPacientes();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Pacientes.",
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
            const result = await PacienteServices.getPaciente(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar la Paciente.",
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
