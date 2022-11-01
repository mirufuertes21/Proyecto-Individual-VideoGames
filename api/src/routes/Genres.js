const {Router} = require('express')
const {Genres} = require('../db.js')
const getGenre = require('./Controller/getGenres')

const routerGenres = Router()

routerGenres.get('/genres', async (req,res) =>{
  const genres =  await Genres.findAll()
  res.send(genres)
})

module.exports = routerGenres




