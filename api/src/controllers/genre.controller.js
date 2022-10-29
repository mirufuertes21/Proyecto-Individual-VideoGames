const axios= require('axios');
const { Genre, VideoGame }= require('../db');
const { API_KEY } = process.env;


const getAllGenres= async () =>{
    let genresDb= await Genre.findAll();
    if (dbGenres.length !== 0) return dbGenres;
}