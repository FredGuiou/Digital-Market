const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const { User, Role } = require('../models');

const userController = {
    index: (req, res) => {
        res.render('register');
    },

    register: async (req, res) => {
        // register a user here
        try {
            // !! votre code à partir d'ici
            // verif email here avec email-validator

            // verif password === password confirm

            // Hash password with salt

            // Attribuer un rôle ici, vous devrez auparavant en sélectionner un depuis la BDD : le role customer.

            // sauvegarder user

            // !! ne pas modifier cette ligne
            res.render('login', {
                message: 'Vous pouvez maintenant vous connecter !',
            });
        } catch (error) {
            console.log(error);
            res.render('register', { error: error.message });
        }
    },

    show: async (req, res) => {
        res.render('dashboard/dashboard');
    },
};

module.exports = userController;
