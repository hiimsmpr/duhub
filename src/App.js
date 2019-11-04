import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Components/Boiler Plate/nav'
import Header from './Components/Boiler Plate/header'
import RecCalc from './Components/Calculators/recipe'
import SuCalc from './Components/Calculators/sutime'
import CompList from './Components/Wiki/componentList'
import OreFinder from './Components/Wiki/oreFinder'
import PlanetInfo from './Components/Wiki/planetList'
import './App.css';

function App() {
  return (
    <Router>
      <div className="AppBody">
        <div className="HeaderDiv">
          <Header />
        </div>
        <div className="NavDiv">
          <Nav />
        </div>
        <div className="BodyDiv">
          <Switch>
            <Route exact path='./Calculator/Recipe' component={RecCalc} />
            <Route exact path='./Calculator/SuTime' component={SuCalc} />
            <Route exact path='./Wiki/Components' component={CompList} />
            <Route exact path='./Wiki/OreFinder' component={OreFinder} />
            <Route exact path='./Wiki/Planet' component={PlanetInfo} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
