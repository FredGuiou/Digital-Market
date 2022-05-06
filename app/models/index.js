const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Role = require('./Role');

// Associer les catégories aux produits (as products)

Category.hasMany(Product, {
    //Après vérif dans la BDD via requête sql
    //Une catégorie référence plusieurs produits
    foreignKey: 'category_id',
    as: 'products',
});
// Associer les produits aux catégories (as category)

Product.belongsTo(Category, {
    //Après vérif dans la BDD via requête sql
    //Un produit appartient à une catégorie.
    foreignKey: 'category_id', //On spécifie la clé de liaison
    as: 'category',
});


Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'users',
});

User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'role',
});

module.exports = { User, Category, Product, Role };
