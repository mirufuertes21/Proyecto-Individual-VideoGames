
//const videogames= require("./videogames.js");
//const videogame= require("./videogame.js");
//const genres= require("./genres.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const axios= require('axios')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.get("/videogames", videogames);
//router.get("/videogame", videogame);
//router.get("/genres", genres);

const { Router } = require('express');
const videogames = require('./Videogames.js')
const genres = require('./Genres.js')
const detailById = require('./detailById')
const createGame = require('./createGames.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/',videogames)
 router.use('/',genres)
router.use('/',detailById) 
router.use('/',createGame)

module.exports = router;




