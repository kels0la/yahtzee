const categoryController = require('../../controllers/categoryController');
const categoryRouter = require('express').Router();
const db = require('../../models');

categoryRouter.route('/categories')
  .get(categoryController.findAll)

module.exports = categoryRouter;