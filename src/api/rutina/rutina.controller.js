const rutinaServices = require('./rutina.service');

module.exports = {

    async createRutina(req, res, next) {
        try {
            const result = await rutinaServices.createRutina(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear un Rutina.",
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

    async updateRutina(req, res, next) {
        try {
            const result = await rutinaServices.updateRutina(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar el Rutina.",
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
    async deleteRutina(req, res, next) {
        try {
            const result = await rutinaServices.deleteRutina(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar el Rutina.",
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

    async getRutinas(req, res, next) {
        try {
            const result = await rutinaServices.getRutinas();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener los Rutinas.",
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

    async getRutina(req, res, next) {
        try {
            const result = await rutinaServices.getRutina(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar el Rutina.",
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
