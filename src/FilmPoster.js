import React, { Component } from 'react';
import TMDB from './TMDB'

class FilmPoster extends Component {
    
    render() {
        
        return (
            <img src={this.props.posterUrl} alt={this.props.title} />
            
        )
    }
}

export default FilmPoster