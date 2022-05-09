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
            // Sélectionner user avec email et inclure le role, si on ne le trouve pas :
            const user = await User.findOne({
                where: {
                    email: req.body.email
                },
                include: { 
                    association:'role'
                }
            });
            // Est-ce que l'utilisateur existe en BDD ?
            if (!user) { // SI USER TROUVE
                //      on envoie un message d'erreur dans un objet:  {error: `l'utilisateur n'existe pas !`} et on render `login` en lui passant l'erreur
                res.status(401);

                const  error  = "l'utilisateur n'existe pas";
                
                res.render('login', {error: true, error});
                return;
            } else {
                // Sinon on continue.
                // Le mot de passe est il correct ?
                // On compare le mots de passe du formulaire avec celui de l'utilisateur
                const isMatch = await bcrypt.compare(req.body.password, user.password);
                
                //      Si le mot de passe est incorrect : on envoie un message d'erreur dans un objet:  {error: `Mot de passe incorrect`} et on render `login` en lui passant l'erreur
                if (!isMatch) {
                    res.status(401);

                    const  error  = "Mot de passe incorrect";
                    
                    res.render('login', {error: true, error});
                    return;
                } else {
                    // On ajoute user a la session
                    req.session.user = user;
                    
                    // On enlève le mot de passe de la session.
                    delete req.session.user.password;

                    //On accueille l'utilisateur avec un message
                    res.locals.message = `Bienvenue ${user.name} ! Vous êtes connecté !`;
                    
                    if (user.role.name === 'admin'){
                        return res.redirect('/dashboard');
                    } else {
                        return res.redirect('/profile');
                    };
                };
            };
            // !! Ne pas modifier cette ligne
            // res.redirect('/');
        } catch (e) {
            console.error(e.message);
            res.status(500).send('Server Error');
        };
    },

    logout: (req, res) => {
        // !! Votre code ici
        req.session.destroy();

        res.redirect('/');
    },
};

module.exports = sessionController;