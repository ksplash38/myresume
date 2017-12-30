import React, { Component } from 'react';
import NavBar from './layout/NavBar.js';
import Index from './pages/indexpage';
import Experience from './pages/experience';
import Education from './pages/education';
import Skill from './pages/skill';
import Award from './pages/award';
import Interest from './pages/interest';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid'


class App extends Component {


  render() {
    return (


      <BrowserRouter>


            <div  className="container-fluid" id="toTop">
                <NavBar/>


                <Route exact path="/" component={Index} />

                  <Route exact path="/pages/experience" component={Experience} />
                  <Route exact path="/pages/education" component={Education} />
                   <Route exact path="/pages/skill" component={Skill} />
                   <Route exact path="/pages/award" component={Award} />
                    <Route exact path="/pages/interest" component={Interest} />


            </div>
      </BrowserRouter>

    );
  }
}

export default App;
