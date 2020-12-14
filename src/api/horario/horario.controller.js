const HorarioServices = require('./horario.service');

module.exports = {

    async createHorario(req, res, next) {
        try {
            const result = await HorarioServices.createHorario(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Horario.",
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

    async updateHorario(req, res, next) {
        try {
            const result = await HorarioServices.updateHorario(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar la Horario.",
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
    async deleteHorario(req, res, next) {
        try {
            const result = await HorarioServices.deleteHorario(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar la Horario.",
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


    async getHorarios(req, res, next) {
        try {
            const result = await HorarioServices.getHorarios();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Horarios.",
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

    async getHorario(req, res, next) {
        try {
            const result = await HorarioServices.getHorario(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar la Horario.",
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
