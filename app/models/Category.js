const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {}

//On crée le Model Category (avec la fonction init) qui hérite via le extends des propriétés de Sequelize.Model

Category.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
},{
    sequelize, //Le connecteur
    tableName: 'categories' //Le nom de la table
});

/*** INFOS de l'énoncé
 * Voici les champs nécessaires pour le Model
 * name string null false unique true
 * tableName: 'categories',
 */

module.exports = Category;
