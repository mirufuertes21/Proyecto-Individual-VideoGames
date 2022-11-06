//import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import React from 'react';
//import NavBar from './Components/NavBar/NavBar';
import VideogameDetail from './Components/VideogameDetail/VideogameDetail';
import CreateVideogame from './Components/CreateVideogame/CreateVideogame';

function App() {
  return (
    //<BrowserRouter>
    <div>
      
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/videogame/:id' component ={VideogameDetail}/>
        <Route exact path ='/create' component ={CreateVideogame}/>
      </Switch>
    </div>
    //</BrowserRouter>
  );
}

export default App;
