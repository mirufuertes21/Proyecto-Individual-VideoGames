const axios = require('axios');
const { Videogame } = require('../../db.js')
require('dotenv').config();
const { API_KEY, API_URL } = process.env;
// https://api.rawg.io/api/games?search=Mad%20Max&key=4c0f2e6ed2494fae97b2a5901afb7e21
const getSearch = async (game) => {
  try {
    const response = await axios.get(
      `${API_URL}?search=${game}&key=${API_KEY}`
    );
    const data = response.data.results;
    let only15 = data.slice(0, 15);
    var gamesFromApi = only15.map(
      (g) => {
        return {
          id: g.id,
          name: g.name,
          description: g.description,
          released: g.released,
          rating: g.rating,
          platforms: g.platforms.map((p) => p.platform.name),
          image: g.background_image,
        };
      }
      // buscar juego en la base de datos
    );
  } catch (error) {
    console.log(error);
  }
  const gamesFromDb = await Videogame.findAll({
    where: {
      name: game,
    },
  });
  return [...gamesFromApi, ...gamesFromDb];
};

module.exports = getSearch;