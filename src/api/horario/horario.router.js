const HorarioController = require('./horario.controller');

const express = require('express');
const HorarioRouter = express.Router();

//Create Horario
HorarioRouter.post(
    '/',
    HorarioController.createHorario);

//Update Horario by id
HorarioRouter.put(
    '/:id',
    HorarioController.updateHorario);

//Delete Horario by id
HorarioRouter.delete(
    '/:id',
    HorarioController.deleteHorario);

//Get All Horarios
HorarioRouter.get(
    '/',
    HorarioController.getHorarios);

//Get One Horario by id
HorarioRouter.get(
    '/:id',
    HorarioController.getHorario);

module.exports = HorarioRouter;
