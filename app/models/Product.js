const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Product extends Sequelize.Model {}

//On crée le Model Product qui hérite des propriétés du parent Sequelize.Model 

Product.init(
    {
    category_id: {
        type: DataTypes.INTEGER
    },
    ref: {
        type: DataTypes.STRING
    },

    //Je mets en commentaire car cela n'est pas dans la BDD et ma requête plante quand je clique sur shop 
    // attr: {
    //     type: DataTypes.STRING
    // },
    image: {
        type: DataTypes.STRING
    },
    //Je mets en commentaire car cela n'est pas dans la BDD et ma requête plante quand je clique sur shop
    // metaDescription: {
    //     type: DataTypes.STRING
    // },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    //Je mets en commentaire car cela n'est pas dans la BDD et ma requête plante quand je clique sur shop
    // excerpt: {
    //     type: DataTypes.STRING
    // },

    //Je change volontairement le priceHT en price pour cadrer avec ma BDD.
    price: {
        type: DataTypes.NUMBER
    },
},{
    sequelize, //Le connecteur
    tableName: "products" //Le nom de la table
});

/** INFOS de l'énoncé
 * Voici les champs nécessaires pour faire le Model
 * category_id int*
 * ref string*
 * attr string*
 * image string*
 * metaDescription string*
 * title string*
 * description text*
 * excerpt string*
 * priceHT number*
 * tableName: 'products',
 */

module.exports = Product;
