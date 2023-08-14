
import './App.css';
import React from 'react';
import "./asset/Fonts/Fonts.css";
import LandingPage from './components/LandingPage/LandingPage';

// importing color variables
import './asset/variables/colorVariables.css';

// importing fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTruck, faCheckToSlot, faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faTruck, faCheckToSlot, faStar);


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <LandingPage/>
      </div>
    );
  }
  
}

export default App;
