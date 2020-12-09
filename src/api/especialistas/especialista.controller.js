const EspecialistaServices = require('./especialista.service');

module.exports = {

    async createEspecialista(req, res, next) {
        try {
            const result = await EspecialistaServices.createEspecialista(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Especialista.",
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

    async updateEspecialista(req, res, next) {
        try {
            const result = await EspecialistaServices.updateEspecialista(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar la Especialista.",
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
    async deleteEspecialista(req, res, next) {
        try {
            const result = await EspecialistaServices.deleteEspecialista(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar la Especialista.",
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


    async getEspecialistas(req, res, next) {
        try {
            const result = await EspecialistaServices.getEspecialistas();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Especialistas.",
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

    async getEspecialista(req, res, next) {
        try {
            const result = await EspecialistaServices.getEspecialista(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar la Especialista.",
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
