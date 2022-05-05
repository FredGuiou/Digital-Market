const { Category, Product } = require('../models');

const categoryController = {

    show: async (req, res) => {
        // findAll retourne un tableau, donc on réutilise shop.ejs sans modifs, (utilisez findAll avec where, inclure les produits)
        const category = [];

        res.render('shop', { categories: category, filtered: true });
    },
};

module.exports = categoryController;
