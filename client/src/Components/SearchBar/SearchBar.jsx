import React, {useState} from "react";
//import { Link } from 'react-router-dom'
import style from './SearchBar.module.css'
import { useDispatch} from 'react-redux';
import { getVideogamesByName } from "../../Actions/actions";

function SearchVideogame () {
   const dispatch= useDispatch();
   const [input, setInput]= useState('')
   
  const handlerInput=(e)=>{
   setInput(e.target.value)
  }

  const handlerSubmit=(e)=>{
     e.preventDeFault()
     //if(input)
     //dispatch(getVideogamesByName(input))
     setInput('')
   }
   return(
      <div className={style.SearchBar}>
         <input
            value= {input}
            onChange={(e) => handlerInput(e)}
            placeholder= "Search a game..."
            type= "text"
         />
         <button onClick={(e)=>handlerSubmit(e)} type='submit' className={style.button}> SEARCH </button>
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
   
