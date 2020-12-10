const EspecialistaController = require('./especialista.controller');

const express = require('express');
const EspecialistaRouter = express.Router();

//Create Especialista
EspecialistaRouter.post(
    '/',
    EspecialistaController.createEspecialista);

//Update Especialista by id
EspecialistaRouter.put(
    '/:id',
    EspecialistaController.updateEspecialista);

//Delete Especialista by id
EspecialistaRouter.delete(
    '/:id',
    EspecialistaController.deleteEspecialista);

//Get All Especialistas
EspecialistaRouter.get(
    '/',
    EspecialistaController.getEspecialistas);

//Get One Especialista by id
EspecialistaRouter.get(
    '/:id',
    EspecialistaController.getEspecialista);

//Get All Horarios from Especialista
EspecialistaRouter.get(
    '/:id/horarios',
    EspecialistaController.getHorariosEspecialista);

//Get All Horarios from Especialista
EspecialistaRouter.get(
    '/:id/horas',
    EspecialistaController.getHorasEspecialista);

    

//Get All Citas from Especialista
EspecialistaRouter.get(
    '/:id/citas',
    EspecialistaController.getCitasEspecialista);

//Get All horarios de un dia de semana
EspecialistaRouter.get(
    '/:id/horarios/:weekDay',
    EspecialistaController.getHorariosWeekDay);



module.exports = EspecialistaRouter;
