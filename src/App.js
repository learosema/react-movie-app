import React, { Component } from 'react';
import { apiKey } from './apikey';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


/*
React router works like this: 
<Link to={`/movie/${movie.id}`}>Link description</Link>

Define Routes:

<Route path="/movie/:movieId" component={Movie} />

<Route exact={true} path="/" render={() => (<h1>Hello</h1>)}/>

const Movie = (props) => {
  ...
}

*/


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
        <header className="site-header">
          <div className="logo">logo</div>
          <nav>
            <ul><Link to={"/discover/top-rated"}>Top rated movies</Link></ul>
            <ul><Link to={"/discover/upcoming"}>Upcoming movies</Link></ul>
            <ul><Link to={"/discover/now-playing"}>Now playing</Link></ul>
          </nav>
          <h2>test</h2>
        </header>
        <div class="site-main">
          <Route exact={true} path="/" render={() => (
            <h1>Hello World!</h1>
          )} />
          <Route path="/discover/:category" render={ ({match}) =>  (
            <MovieList category={match.params.category} />
          )} />
        </div>
        <footer>powered by <a href="https://www.themoviedb.org/">themoviedb</a></footer>
      </div>
      </Router>
    );
  }
}

const MovieList = ({ category }) => (<div>{category}</div>);


export default App;
