import React from "react";
//import NavBar from "../NavBar/NavBar";
import { Link } from 'react-router-dom'
import style from './Home.module.css'
import SearchVideogame from "../SearchBar/SearchBar";
//import { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { getAllGames } from "../../Actions/actions";
//import NavBar from "./NavBar/NavBar.module.css";


import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getAllGames } from "../../Actions/actions";

export default function Home() {

  const dispatch = useDispatch()
  const allGames = useSelector(state => state.allGames);
  useEffect(() => {
    getAllGames(dispatch)
    console.log("Todos los juegos son: ",allGames);
  }, [])

  return (
    <div className={style.background}>

      <div className="home-container">
        <div className="nav-bar">
          <SearchVideogame />
        </div>

        <div className="games-card-container">

          {allGames.map(game => <p className={style.p}>{game.name}</p>)}

        </div>


      </div>







    </div>
  )
}