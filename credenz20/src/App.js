import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from './Components/MainComponent';
import $ from 'jquery';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Modal from './Components/Modal/Login';
import useModal from './Components/Modal/useModal';


/*
class App extends Component {

  render() {

    return(
      <BrowserRouter>
        <div>
        <button className="button-default" onClick={toggle}>Show Modal</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <Main/>  
        </div>
      </BrowserRouter>
    );
  }

}
*/

const App = () => {
  const {isShowing, toggleModal} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggleModal}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggleModal}
      />
    </div>
  );
};


export default App;


