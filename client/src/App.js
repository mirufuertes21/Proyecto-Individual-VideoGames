//import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
       
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
