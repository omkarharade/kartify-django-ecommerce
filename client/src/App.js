
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Introduction from './components/Introduction';
import Features from './components/Features/Features';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Introduction/>
        <Features/>
      </div>
    );
  }
  
}

export default App;
