
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

router.use('/', videogames)
router.use('/', genres)
router.use('/', detailById)
router.use('/', createGame)

module.exports = router;




