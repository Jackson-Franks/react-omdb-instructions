import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import TMDB from './TMDB';

class FilmListing extends Component {
    
    render() {
        let allFilms = this.props.films.map((film, i) => {
            return (
                <div className="film-row" key={`filmRow-${i}`}> 
                        <h1> {film.title} </h1> 
                    </div>
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