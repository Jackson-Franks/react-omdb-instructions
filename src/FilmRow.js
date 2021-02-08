import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
    handleDetailsClick = (e) => {
        console.log('Film Row')
    }
    render() {
        let posterUrl = 'https://image.tmdb.org/t/p/w780/' + this.props.film.poster_path

        return (
            <div className="film-row" onClick={this.handleDetailsClick}> 
                <Fave />
                <FilmPoster posterUrl={posterUrl} title={this.props.film.title}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div> 
            </div>
        )
    }
}

export default FilmRow