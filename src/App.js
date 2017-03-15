import React, { Component } from 'react';
import { apiKey } from './apikey';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Header';

const Home = () => <h1>Home</h1>

const MovieList = ({ category }) => <div><h1>{category}</h1></div>;

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
      <Router>
      <div className="site">
        <Header />
        <div class="site-main">
          <Route exact path="/" component={Home} />
          <Route path="/discover/:category" render={ ({match}) =>  (
            <MovieList category={match.params.category} />
          )} />
          <Route path="/search" render={() => (<div>search</div>)} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
