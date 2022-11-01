require('dotenv').config()
const {Genres} = require('../../db.js')
const axios = require('axios')
const {API_KEY} = process.env
const link = 'https://api.rawg.io/api/genres'

const getGenre = async () =>{
  const response = await axios.get(`${link}?key=${API_KEY}`)
  const data = response.data.results
  const genres = data.map(genre => genre.name)
  return genres
}

const apiToDb = async () =>{
  const genres = await getGenre()
  genres.forEach(async genre => {
    await Genres.findOrCreate({
      where: {
        name: genre
      }
    }) 
  });
}



module.exports = apiToDb