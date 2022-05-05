const { Category, Product } = require('../models');

const catalogController = {
    index: async (req, res) => {
        res.render('index');
    },

    productsList: async (req, res) => {
        try {

            // Étape 2 - Faire la requête ici, aller chercher la liste des produits avec Sequelize
            const products = [];

            // Étape 4 - Faire la requête ici, aller chercher la liste catégories avec Sequelize
            const categories = [];

            // Ne pas modifier cette ligne
            res.render('shop', { 
                categories,
                products 
            });

        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    },

    category: async (req, res) => {

        // Étape 6 - Récupérez l'id de la catégorie à afficher (params)

        // Étape 6 - Récupérer la catégorie demandée avec les produits associés à cette catégorie
        // const category = ...;

        res.render('category', { 
            // category
        });
    },

    product: async (req, res) => {
        try {
            const { id } = req.params;

            // Bonus - Récupérez le produit demandé en base de données.
            const product = {
                id: id,
                title: 'title',
                description: 'description',
                price: 1500,
            };

            res.render('product', { product });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    },

    cart: (req, res) => {
        res.render('cart');
    },
};

module.exports = catalogController;
