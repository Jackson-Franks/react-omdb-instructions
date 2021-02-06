import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import FilmListings from './FilmListing'
import './index.css';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListings films={TMDB.films}/>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <ul>
          {/* <FilmDetails films={TMDB.films} /> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;