const ejercicioServices = require('./ejercicio.service');

module.exports = {

    async createEjercicio(req, res, next) {
        try {
            const result = await ejercicioServices.createEjercicio(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear un Ejercicio.",
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

    async updateEjercicio(req, res, next) {
        try {
            const result = await ejercicioServices.updateEjercicio(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar el Ejercicio.",
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
    async deleteEjercicio(req, res, next) {
        try {
            const result = await ejercicioServices.deleteEjercicio(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar el Ejercicio.",
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

    async getEjercicios(req, res, next) {
        try {
            const result = await ejercicioServices.getEjercicios();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener los Ejercicios.",
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

    async getEjercicio(req, res, next) {
        try {
            const result = await ejercicioServices.getEjercicio(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar el Ejercicio.",
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
