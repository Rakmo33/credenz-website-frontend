import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from './Components/MainComponent';
import $ from 'jquery';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import "./fontawesome.js";

class App extends Component {

  render() {

    return(
      <BrowserRouter>
        <div>
        <Main/>  
        </div>
      </BrowserRouter>
    );
  }

}

export default App;


