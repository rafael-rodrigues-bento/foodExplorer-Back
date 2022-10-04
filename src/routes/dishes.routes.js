const { Router } = require('express');

DishesController = require('../controllers/DishesController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ensureAdmin = require('../middlewares/ensureAdmin');

const dishRoutes = Router();

const dishesController = new DishesController();

dishRoutes.use(ensureAuthenticated);
dishRoutes.post('/', ensureAdmin, dishesController.create);
dishRoutes.get('/:id', dishesController.show);
dishRoutes.get('/', dishesController.index);
dishRoutes.put('/:id', dishesController.update);
dishRoutes.delete('/:id', ensureAdmin, dishesController.delete);

module.exports = dishRoutes;
