const { Router } = require('express');
//const videogames= require("./videogames.js");
//const videogame= require("./videogame.js");
//const genres= require("./genres.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const axios= require('axios')
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.get("/videogames", videogames);
//router.get("/videogame", videogame);
//router.get("/genres", genres);

router.get("/hola", async (req, res) =>{
    res.send("Hola");
   
});



module.exports = router;
