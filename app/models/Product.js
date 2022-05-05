const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Product extends Sequelize.Model {}
/**
 * Voici les champs nécessaires pour faire le Model
 * category_id int
 * ref string
 * attr string
 * image string
 * metaDescription string
 * title string
 * description text
 * excerpt string
 * priceHT number
 * tableName: 'products',
 */

module.exports = Product;
