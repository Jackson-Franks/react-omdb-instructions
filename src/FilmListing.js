import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import TMDB from './TMDB';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    
    render() {
        let allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow film={film} key={`filmRow-${i}`}/>
            )
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                    {allFilms}
            </div>
        )
    }
}

export default FilmListing