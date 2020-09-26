import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from './Components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

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


