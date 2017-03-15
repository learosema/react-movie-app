import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Header = () => (
  <header className="site-header">
    <div className="logo"><Link exact to="/">logo</Link></div>
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
  </header>)
  export default Header