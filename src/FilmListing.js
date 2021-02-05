import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import TMDB from './TMDB';

class FilmListing extends Component {
    
    render() {
        
        return (
            
             
            
            <ul>
            {this.props.films.map((film, i) => {
                return <div className="film-row"> 
                <h1> <FilmPoster films={TMDB.films}/>{film.title} </h1> 
                </div>
            })}
            </ul>
            
        )
    }
}

export default FilmListing