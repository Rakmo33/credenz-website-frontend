// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { Component } from 'react';
import Main from './Components/mainComponent/mainComponent'
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


