//const { Router } = require('express');

//const axios= require('axios')

//const router = Router();

//import platform from "../controllers/controllers.js";

//el /platforms ya fue puesta en el index
//router.get("/", platform)

//module.exports = router; 

const { Router } = require('express')
const { is } = require('express/lib/request')
const getInfoById = require('./Controller/getGameById')

const routerDetail = Router()

routerDetail.get('/videogames/:idVideogame', async (req,res)=> {
  const idVideogame =  req.params.idVideogame
  const infoGame = await getInfoById(idVideogame) 
  res.send(infoGame)
})

module.exports = routerDetail
