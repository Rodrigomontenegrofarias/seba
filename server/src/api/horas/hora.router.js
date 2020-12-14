const horaController = require('./hora.controller');

const express = require('express');
const horaRouter = express.Router();

//Create Hora
horaRouter.post(
    '/',
    horaController.createHora);

//Update Hora by id
horaRouter.put(
    '/:id',
    horaController.updateHora);

//Delete Hora by id
horaRouter.delete(
    '/:id',
    horaController.deleteHora);

//Get All Horas
horaRouter.get(
    '/',
    horaController.getHoras);

//Get One Hora by id
horaRouter.get(
    '/:id',
    horaController.getHora);

module.exports = horaRouter;
