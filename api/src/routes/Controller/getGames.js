const axios= require('axios');
const { Genre, VideoGame }= require('../db');
const { API_KEY } = process.env;

//traigo todos los juegos de la api
let link= `https://api.rawg.io/api/games?key=${ API_KEY }`
const apiInfo = async () => {
  let games = [];
  while (games.length < 100) {
    const response = await axios.get(link);
    const intration = response.data.results.map((game) => {
      return {
        name: game.name,
        id: game.id,
        rating: game.rating,
        released: game.released,
        img: game.background_image,
        genres: game.genres.map((genre) => genre.name),
        platforms: game.platforms.map((platform) => platform.platform.name),
      };
    });
    games.push(...intration);
    link = response.data.next;
  }
  console.log(games.slice(0, 10));
  console.log(games.length);
};
apiInfo();

const getDb= async () => {
    try{
        return await VideoGame.findAll({
        include:{
            model: Genre,
            attributes:["name"],
            through: {
                attributes:[],
            },
        },
    });
    }catch (error){
        console.log("Este error es de la Base de Datos", error);
    }
};

const getApiDb= async ()=>{
    const apiData= await getApi();
    const bdData= await getDb();
    const hola= apiData.concat(bdData);
    return hola;
}

module.exports= {getApiDb};