import React from 'react';
import { MinesWeeper } from '../Minesweeper/Minesweeper.js'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MinesWeeper />
      </div>
    );
  }
}

export default App;
