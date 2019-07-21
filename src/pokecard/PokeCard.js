import React, {Component} from 'react';
import './PokeCard.css';

const IMG_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


class PokeCard extends Component{
    render(){
        let imgSrc = `${IMG_API}${this.props.id}.png`;
        return (
            <div className="PokeCard">
                <h1 className="PokeCard-header">{this.props.name}</h1>
                <div className="PokeCard-image"><img src={imgSrc} alt={this.props.id}/></div>
                <div className="PokeCard-data">Type:{this.props.type}</div>
                <div className="PokeCard-data">Exp:{this.props.exp}</div>
            </div>
            )
    }
}

export default PokeCard;