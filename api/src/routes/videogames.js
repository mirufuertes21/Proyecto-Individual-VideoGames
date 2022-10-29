const { Router } = require('express');
const router = Router();
const {  getApiDb  }= require("../controllers/videogames.controller");



router.get("/videogames", async (req, res)=>{
    
    //res.send(apiDbAll);
    //try{
      //  const apiDbAll= await getApiDb();
      //  res.json(models.apiDbAll())
   // }catch(error){
     //   res.status(400).json({error}) //que numero de error pongo?
   // }
})




module.exports = router;

