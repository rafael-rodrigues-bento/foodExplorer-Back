const knex = require('../database/knex');

class DishesController {
  async create(request, response) {
    const { title, description, category, ingredients, price } = request.body;

    const dish_id = await knex('dishes').insert({
      title,
      description,
      price,
      category
    });

    return response.json();
  }
}

module.exports = DishesController;
