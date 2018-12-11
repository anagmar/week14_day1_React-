import React, { Component } from 'react';
import MovieBox from './containers/MovieBox.js';
import "./App.css"

class App extends Component {
  render() {
    return (
      <MovieBox
                title = "Wes Anderson"
                title2 = "- Movies -"/>
    );
  }
}

export default App;
