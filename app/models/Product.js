const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Product extends Sequelize.Model {}

//On crée le Model Product qui hérite des propriétés du parent Sequelize.Model 

Product.init({
    category_id: DataTypes.INTEGER,
    ref: DataTypes.STRING,
    attr: DataTypes.STRING,
    image: DataTypes.STRING,
    metaDescription: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    excerpt: DataTypes.STRING,
    priceHT: DataTypes.NUMBER,
}, {
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
