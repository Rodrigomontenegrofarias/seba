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

module.exports = EspecialistaRouter;
