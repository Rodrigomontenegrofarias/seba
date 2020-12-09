const fichaPaciente = require('./fichaPaciente.service');

module.exports = {

    async createFichaPaciente(req, res) {
        try {
            const result = await fichaPaciente.createFichaPaciente(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear la ficha de Paciente.",
                    code: 0,
                    state: false
                });
            }
            return res.json({
                status: 'success',
                data: result,
                code: 1,
                state: true
            });
        } catch (e) {
            console.error(e);
            return res.json({
                status: 'failed',
                msg: "Error al crear la ficha de Paciente.",
                code: 0,
                state: false
            });
        }
    },

    async updateFichaPaciente(req, res) {
        try {
            const result = await fichaPaciente.updateFichaPaciente(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar la Ficha Paciente.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }

    },
    async deleteFichaPaciente(req, res) {
        try {
            const result = await fichaPaciente.deleteFichaPaciente(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar la Ficha de Paciente.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }
    },


    async getFichasPaciente(req, res) {
        try {
            const result = await fichaPaciente.getFichasPaciente();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener la Fichas de los Paciente.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }

    },

    async getFichaPaciente(req, res) {
        try {
            const result = await fichaPaciente.getFichaPaciente(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede obtener la Ficha del Paciente.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }
    },

}