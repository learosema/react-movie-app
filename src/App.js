import React, { Component } from 'react';
import logo from './logo.svg';
import { apiKey } from './apikey';
import './App.css';
import axios from 'axios';




class App extends Component {

  constructor() {
    super();
    this.state = { movies: [] };
  }

  componentDidMount() {
    const lang = navigator.language
    axios.get(`https://api.themoviedb.org/4/list/1?api_key=${apiKey}&language=${lang}`).then(res => {
      console.log(res);
      console.table(res.data.results);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
