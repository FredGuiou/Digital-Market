const bcrypt = require('bcrypt');
const {
    User,
    Role
} = require('../models');

const sessionController = {
    index: (req, res) => {
        res.render('login');
    },

    // post data here and create session
    login: async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;
            // !! Votre code à partir d'ici

            // On récupère user avec le role
            const user = await User.findOne({
                where: {
                    email,
                    password
                }
            });
            // Est-ce que l'utilisateur existe en BDD ?
            if (user) { // SI USER TROUVE
                // Sélectionner user avec email et inclure le role, si on ne le trouve pas :
                user = await User.findOne({
                    where: {
                        email,
                        password,
                        role_id
                    }
                });
            } else {
                const { error } = res.send("l'utilisateur n'existe pas");
                
                res.render('login', { error });
                //      on envoie un message d'erreur dans un objet:  {error: `l'utilisateur n'existe pas !`} et on render `login` en lui passant l'erreur
                // Sinon on continue.
            }
            if (user) {
                // Le mot de passe est il correct ?
                const isMatch = await bcrypt.compare(req.body.password, user.password);
                // On compare le mots de passe du formulaire avec celui de l'utilisateur
                if (!isMatch) {
                    //      Si le mot de passe est incorrect : on envoie un message d'erreur dans un objet:  {error: `Mot de passe incorrect`} et on render `login` en lui passant l'erreur
                    const { error } = res.send("Mot de passe incorrect");

                    res.render('login', { error });
                } else {
                    // On ajoute user a la session
                    user = req.session.user;
                    // On enlève le mot de passe de la session.
                    delete req.session.user.password;
                    // !! Ne pas modifier cette ligne
                    res.redirect('/');
                }
            }
        } catch (e) {
            console.error(e.message);
            res.status(500).send('Server Error');
        }
    },

    logout: (req, res) => {
        // !! Votre code ici
        res.redirect('/');
    },
};

module.exports = sessionController;