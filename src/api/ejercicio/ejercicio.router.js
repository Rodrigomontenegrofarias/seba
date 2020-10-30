const ejercicioController = require('./ejercicio.controller');

const express = require('express');
const ejercicioRouter = express.Router();

//Create Ejercicio
ejercicioRouter.post(
    '/',
    ejercicioController.createEjercicio);

//Update Ejercicio by id
ejercicioRouter.put(
    '/:id',
    ejercicioController.updateEjercicio);

//Delete Ejercicio by id
ejercicioRouter.delete(
    '/:id',
    ejercicioController.deleteEjercicio);

//Get All Ejercicios
ejercicioRouter.get(
    '/',
    ejercicioController.getEjercicios);

//Get One Ejercicio by id
ejercicioRouter.get(
    '/:id',
    ejercicioController.getEjercicio);

module.exports = ejercicioRouter;
