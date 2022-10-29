//const { Router } = require('express');
//const axios= require('axios')
//const router = Router();
//const getAllGenres= require("../controllers/genre.controller.js");


//router.get("/genre", async (req, res)=> {
//    try{
 //       res.status(200).json(await getAllGenres());
  //  }catch (error){
  //      res.status(500).json({error: error.message});
   // }
//});


//module.exports = router;



const { getAllGenres }= require("../controllers/genre.controller.js");
const { Router }= require("express");
const router= Router();

router.get("/genres", async (req,res)=>{
   try{
      let sendGenres= await getAllGenres();
      res.status(200).json(sendGenres);
   }catch(error){
      res.status(404).send("Genre not found");
   }
})





module.exports = router;