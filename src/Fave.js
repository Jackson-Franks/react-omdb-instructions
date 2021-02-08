import React, { Component } from 'react'

class Fave extends Component {
    
    state = {
        isFave: 'false'
    }
    

    handleClick = (e) => {
        this.setState({
            isFave: !this.state.isFave
        })
        console.log('click')
        e.stopPropagation()

    }

    

    render() {
         this.switch = `film-row-fave ${this.state.isFave ? 'add_to_queue' : 'remove_from_queue'}`;

        
        return (
            <div className={this.switch}>
                <p className="material-icons" onClick={this.handleClick}>{this.switch}</p>
            </div>

        )
    }
}

export default Fave