const Categories = require('../models/Categories');

const listCategories = async (req, res) => {
  const categories = await Categories.getCategories();

  res.render('categories', { categories });
}

module.exports = {
  listCategories,
}