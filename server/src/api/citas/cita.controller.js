const citaServices = require('./cita.service');

module.exports = {

    async createCita(req, res, next) {
        try {
            const result = await citaServices.createCita(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Cita.",
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

    async updateCita(req, res, next) {
        try {
            const result = await citaServices.updateCita(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar la Cita.",
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
    async deleteCita(req, res, next) {
        try {
            const result = await citaServices.deleteCita(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar la Cita.",
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


    async getCitas(req, res, next) {
        try {
            const result = await citaServices.getCitas();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Citas.",
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

    async getCita(req, res, next) {
        try {
            const result = await citaServices.getCita(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar la Cita.",
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
