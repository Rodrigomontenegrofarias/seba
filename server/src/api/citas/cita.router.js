const citaController = require('./cita.controller');

const express = require('express');
const citaRouter = express.Router();

//Create Especialidad
citaRouter.post(
    '/',
    citaController.createCita);

//Update Especialidad by id
citaRouter.put(
    '/:id',
    citaController.updateCita);

//Delete Especialidad by id
citaRouter.delete(
    '/:id',
    citaController.deleteCita);

//Get All Especialidades
citaRouter.get(
    '/',
    citaController.getCitas);

//Get One Especialidad by id
citaRouter.get(
    '/:id',
    citaController.getCita);

module.exports = citaRouter;
