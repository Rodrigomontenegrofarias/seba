const areaServices = require('./area.service');

module.exports = {

    async createArea(req, res, next) {
        try {
            const result = await areaServices.createArea(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear un Area.",
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

    async getAreas(req, res, next) {
        try {
            const result = await areaServices.getAreas();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Areas.",
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

    async updateArea(req, res, next) {
        try {
            const result = await areaServices.updateArea(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar el Area.",
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
    async deleteArea(req, res, next) {
        try {
            const result = await areaServices.deleteArea(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar el Area.",
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
    async getArea(req, res, next) {
        try {
            const result = await areaServices.getArea(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar el Area.",
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
