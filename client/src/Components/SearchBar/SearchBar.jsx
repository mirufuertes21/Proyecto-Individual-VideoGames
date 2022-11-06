import React, { useState } from "react";
//import { Link } from 'react-router-dom'
import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux';
import { getVideogamesByName } from "../../Actions/actions";

function SearchVideogame() {
   const dispatch = useDispatch();
   const [searchGameInput, searchGameInputSetter] = useState('');

   const handlerInput = (e) => {
      searchGameInputSetter(e.target.value);
   }

   const handlerSearchGame = (e) => {
      getVideogamesByName(dispatch,searchGameInput);
      searchGameInputSetter('')
   }

   return (
      <div >
         <button>Crear juego</button>
         <input type="text" onChange={(e)=>handlerInput(e)} placeholder="Buscar juego"  value={searchGameInput}/>
         <button onClick={(e)=>{handlerSearchGame(e)}}>BUSCAR JUEGO</button>
         <label >Orden</label>
         <select name="order" id="">
            <option value="">A - Z</option>
            <option value="">Z - A</option>
         </select>
         <label >Genero</label>
         <select name="order" id="">
            
         </select>
         <label >Plataforma</label>
         <select name="order" id="">
      
         </select>
      </div>
   )
}
export default SearchVideogame;
   //return (
    //  <div className = {style.SearchBar}>
       //  <form className= {style.form}>
      //     <input className={ style.searchBar} type= "text" onChange={e=> handleInput(e)} value= {searchVideoGame} placeholder="Search..."/>

       //    </form>
       // </div>
    //)

