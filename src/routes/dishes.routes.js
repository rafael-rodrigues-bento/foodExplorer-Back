const { Router } = require('express');

DishesController = require('../controllers/DishesController');

const dishRoutes = Router();

const dishesController = new DishesController();

dishRoutes.post('/', dishesController.create);

module.exports = dishRoutes;
