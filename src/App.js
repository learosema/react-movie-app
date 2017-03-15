import React, { Component } from 'react';
import { apiKey } from './apikey';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, NavLink as Link, Route } from 'react-router-dom';

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
        <header className="site-header">
          <div className="logo"><Link to="/">logo</Link></div>
          <nav className="site-nav">
            <ul>
              <li><Link activeClassName="active" to={"/discover/top-rated"}>Top rated</Link></li>
              <li><Link activeClassName="active" to={"/discover/most-popular"}>Most popular</Link></li>
              <li><Link activeClassName="active" to={"/discover/upcoming"}>Upcoming movies</Link></li>
              <li><Link activeClassName="active" to={"/discover/now-playing"}>Now playing</Link></li>
              <li><Link activeClassName="active" to={"/search"}>Search</Link></li>
            </ul>
          </nav>
          <div className="powered-by">
            powered by <a href="https://www.themoviedb.org/">themoviedb</a>
          </div>
        </header>
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
