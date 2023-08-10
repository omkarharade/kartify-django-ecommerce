
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Introduction from './components/Introduction';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Introduction/>
      </div>
    );
  }
  
}

export default App;
