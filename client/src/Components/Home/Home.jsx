import React from "react";
//import NavBar from "../NavBar/NavBar";
import { Link } from 'react-router-dom'
import style from './Home.module.css'
import SearchVideogame  from "../SearchBar/SearchBar";
//import { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { getAllGames } from "../../Actions/actions";
//import NavBar from "./NavBar/NavBar.module.css";
export default function Home () {
    //const dispatch = useDispatch()
    //const AllGames= useSelector((state) => state.games)

    //useEffect(()=>{
      //  dispatch(getAllGames())
    //},[])

    //return {
     //  <div>
     //  <Link to= '/game' </Link>
       // </div>
    //}

    return (
      <div className = {style.background}>
         
            <h1><Link to= {'/create'}>Create Videogame</Link></h1>

            <button className={style.button}> A - Z </button>

            <button className={style.button}> Z - A </button>

            <SearchVideogame />


      </div>
    )
}