const { Router } = require('express');
const { Videogame } = require('../db.js');
const { Genres } = require('../db.js')
const createGame = require('./Controller/createGame.js');
const routerCreateGames = Router();

routerCreateGames.post('/videogames',  async (req, res) => {
  const { name, description,  rating, platforms, image, released, genre } =
    req.body;
  if (
    name &&
    description &&
    rating &&
    platforms &&
    image &&
    released &&
    genre &&
    createInDb
  ) {
    const game  = await Videogame.create({
      name,
      description,
      rating,
      platforms,
      image,
      released,
    });
    //  agregar los gneros al juego por el id de cada elemnto en el array de genre 
    const genres = await Genres.findAll({
      where: {
        name: genre 
      }
    });
   
    await game.addGenres(genres);
   res.send(game); 
}})


module.exports = routerCreateGames
