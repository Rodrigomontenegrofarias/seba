const centroController = require('./centro.controller');

const express = require('express');
const centroRouter = express.Router();

//Create Centro
centroRouter.post(
    '/',
    centroController.createCentro);

//Update Centro by id
centroRouter.put(
    '/:id',
    centroController.updateCentro);

//Delete Centro by id
centroRouter.delete(
    '/:id',
    centroController.deleteCentro);

//Get All Centros
centroRouter.get(
    '/',
    centroController.getCentros);

//Get One Centro by id
centroRouter.get(
    '/:id',
    centroController.getCentro);

module.exports = centroRouter;
