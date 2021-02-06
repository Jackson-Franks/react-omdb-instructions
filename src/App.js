import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import FilmListings from './FilmListing'
import FilmDetails from './FilmDetails'
import './index.css';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListings films={TMDB.films}/>

        <FilmDetails films={TMDB.films} />
      </div>
    );
  }
}

export default App;