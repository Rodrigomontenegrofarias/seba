const horaServices = require('./hora.service');

module.exports = {

    async createHora(req, res, next) {
        try {
            const result = await horaServices.createHora(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Hora.",
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

    async updateHora(req, res, next) {
        try {
            const result = await horaServices.updateHora(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar la Hora.",
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
    async deleteHora(req, res, next) {
        try {
            const result = await horaServices.deleteHora(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar la Hora.",
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


    async getHoras(req, res, next) {
        try {
            const result = await horaServices.getHoras();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Horas.",
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

    async getHora(req, res, next) {
        try {
            const result = await horaServices.getHora(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar la Hora.",
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
