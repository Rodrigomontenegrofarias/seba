const fichaPacienteController = require('./fichaPaciente.controller');

const express = require('express');
const fichaPacienteRouter = express.Router();

//Create Hora
fichaPacienteRouter.post(
    '/',
    fichaPacienteController.createFichaPaciente);

//Update Hora by id
fichaPacienteRouter.put(
    '/:id',
    fichaPacienteController.updateFichaPaciente);

//Delete Hora by id
fichaPacienteRouter.delete(
    '/:id',
    fichaPacienteController.deleteFichaPaciente);

//Get All Horas
fichaPacienteRouter.get(
    '/',
    fichaPacienteController.getFichasPaciente);

//Get One Hora by id
fichaPacienteRouter.get(
    '/:id',
    fichaPacienteController.getFichaPaciente);

module.exports = fichaPacienteRouter;
