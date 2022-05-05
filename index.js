const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const path = require('path');
const router = require('./app/routers');
//
const errorHandlers = require('./middlewares/errorHandlers');
//
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        saveUninitialized: true,
        resave: true,
        secret: 'Un secret pour signer les id de sessions',
    })
);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './assets')));

// Nos Routes
app.use(router);
// middleware 404
app.use(errorHandlers.notFound);
// middleware formatage et affichage des erreurs
app.use(errorHandlers.developmentErrors);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
