const { Router }  =require('express')
const getAllGames = require('./Controller/getGames.js')
const req = require('express/lib/request')
const getSearch = require('./Controller/search.js')

const routerVideogames = Router()

routerVideogames.get('/videogames',async (req,res) => {
  const {search} = req.query
  if(!search){
  const games = await getAllGames()
  res.send(games)
  }
  else {
    const games = await getSearch(search) 
    res.status(200).send(games)
  }
})

module.exports = routerVideogames


    //res.send(apiDbAll);
    //try{
      //  const apiDbAll= await getApiDb();
      //  res.json(models.apiDbAll())
   // }catch(error){
     //   res.status(400).json({error}) //que numero de error pongo?
   // }







