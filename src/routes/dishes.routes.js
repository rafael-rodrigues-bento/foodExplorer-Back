const { Router } = require('express');

DishesController = require('../controllers/DishesController');

const dishRoutes = Router();

const dishesController = new DishesController();

dishRoutes.post('/', dishesController.create);
dishRoutes.get('/:id', dishesController.show);
dishRoutes.get('/', dishesController.index);
dishRoutes.put('/:id', dishesController.update);
dishRoutes.delete('/:id', dishesController.delete);

module.exports = dishRoutes;
