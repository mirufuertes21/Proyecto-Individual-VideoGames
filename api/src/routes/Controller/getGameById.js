const axios = require('axios')
const {Videogame}  = require('../../db.js')
require('dotenv').config()
const { API_URL, API_KEY } = process.env

const getInfoByIdFromApi = async  (idGame) =>  {
  const response  = await axios.get(`${API_URL}/${idGame}?key=${API_KEY}`)
  const data = response.data 
  const  {id, name, description,  released, rating, platforms, background_image} = data
  return  {
    id,
    name,
    released,
    rating,
     platforms: platforms.map((platform) => platform.platform.name),
    background_image,
    description
  }
}

const getInfoByIdFromDb = async (igGame) => {
  const game = await  Videogame.findOne({where: {id: igGame}})
  return game
}


// verificar si una cadena tiene un valor numerico
const getInfoById = async (igGame) => {
  if (/^[0-9]+$/.test(igGame)) {
    return await getInfoByIdFromApi(igGame)
  }
  return await getInfoByIdFromDb(igGame)
}


module.exports = getInfoById