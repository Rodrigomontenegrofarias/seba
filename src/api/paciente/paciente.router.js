const pacienteController = require('./paciente.controller');

const express = require('express');
const pacienteRouter = express.Router();

//Create Paciente
pacienteRouter.post(
    '/',
    pacienteController.createPaciente);

//Update Paciente by id
pacienteRouter.put(
    '/:id',
    pacienteController.updatePaciente);

//Delete Paciente by id
pacienteRouter.delete(
    '/:id',
    pacienteController.deletePaciente);

//Get All Pacientes
pacienteRouter.get(
    '/',
    pacienteController.getPacientes);

//Get One Paciente by id
pacienteRouter.get(
    '/:id',
    pacienteController.getPaciente);

module.exports = pacienteRouter;
