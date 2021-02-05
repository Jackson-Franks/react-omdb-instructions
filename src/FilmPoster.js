import React, { Component } from 'react';
import TMDB from './TMDB'

class FilmPoster extends Component {
    
    render() {
        
        return (
            
             
            
            <ul>
            {this.props.films.map((film, i) => {
                return <div className="film-row"> 
                <h1> <img src={film.poster_path} /></h1> 
                </div>
            })}
            </ul>
            
        )
    }
}

export default FilmPoster