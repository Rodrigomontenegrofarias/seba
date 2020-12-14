const centroServices = require('./centro.service');

module.exports = {

    async createCentro(req, res, next) {
        try {
            const result = await centroServices.createCentro(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear un Centro.",
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

    async updateCentro(req, res, next) {
        try {
            const result = await centroServices.updateCentro(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar el Centro.",
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
    async deleteCentro(req, res, next) {
        try {
            const result = await centroServices.deleteCentro(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar el Centro.",
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

    async getCentros(req, res, next) {
        try {
            const result = await centroServices.getCentros();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener los Centros.",
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

    async getCentro(req, res, next) {
        try {
            const result = await centroServices.getCentro(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar el Centro.",
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
