const { Router } = require('express');
const axios= require('axios')
const router = Router();
const getVideogameId= require("../controllers/genre.controller.js");

//traigo cada videogame por el id

router.get("/:videogameId", async (req, res) =>{
    let { videogameId}  = req.params;
    try {
        res.status(200).json(await getVideogameId(videogameId));
    }   catch (error){
            res.status(404).json("Videogame not found");
    }
});

module.exports = router;