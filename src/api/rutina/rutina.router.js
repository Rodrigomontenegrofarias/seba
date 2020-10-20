const rutinaController = require('./rutina.controller');

const express = require('express');
const rutinaRouter = express.Router();

//Create Rutina
rutinaRouter.post(
    '/',
    rutinaController.createRutina);

//Update Rutina by id
rutinaRouter.put(
    '/:id',
    rutinaController.updateRutina);

//Delete Rutina by id
rutinaRouter.delete(
    '/:id',
    rutinaController.deleteRutina);

//Get All Rutinas
rutinaRouter.get(
    '/',
    rutinaController.getRutinas);

//Get One Rutina by id
rutinaRouter.get(
    '/:id',
    rutinaController.getRutina);

module.exports = rutinaRouter;
