import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Event';
import Contact from './Components/Contact';
import Testimonials from './Components/Developers';
import Portfolio from './Components/Portfolio';
import Home from './Components/Home';
import { Switch, Route, BrowserRouter,Redirect } from "react-router-dom";
import {Loginpage} from './Components/Loginpage';

class App extends Component {


  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Loginpage" component={()=>
        <Loginpage/>
      }
        /> 
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
