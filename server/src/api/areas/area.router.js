const areaController = require('./area.controller');

const express = require('express');
const areaRouter = express.Router();

//Create Area
areaRouter.post(
    '/',
    areaController.createArea);

//Update Area by id
areaRouter.put(
    '/:id',
    areaController.updateArea);

//Delete Area by id
areaRouter.delete(
    '/:id',
    areaController.deleteArea);

//Get All Areas
areaRouter.get(
    '/',
    areaController.getAreas);

//Get One Area by id
areaRouter.get(
    '/:id',
    areaController.getArea);

module.exports = areaRouter;
