const PacienteController = require('./paciente.controller');

const express = require('express');
const PacienteRouter = express.Router();

//Create Paciente
PacienteRouter.post(
    '/',
    PacienteController.createPaciente);

//Update Paciente by id
PacienteRouter.put(
    '/:id',
    PacienteController.updatePaciente);

//Delete Paciente by id
PacienteRouter.delete(
    '/:id',
    PacienteController.deletePaciente);

//Get All Pacientes
PacienteRouter.get(
    '/',
    PacienteController.getPacientes);

//Get One Paciente by id
PacienteRouter.get(
    '/:id',
    PacienteController.getPaciente);

module.exports = PacienteRouter;
