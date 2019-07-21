import React, { Component } from 'react';
import PokeCard from '../pokecard/PokeCard';
import './PokeDex.css';

class PokeDex extends Component {
     render() {

        let title;

        if(this.props.isWinner){
          title = <h1 className="pokedex-winner">Winner!</h1>
        }else{
          title = <h1 className="pokedex-loser">Loser!</h1>
        }

        return (<div className="PokeDex">
            <h1>Total Experience:{this.props.exp}</h1>
            {title}
            <div className="pokedex-card">
            {this.props.pokemon.map((p) => (
                <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience}
                />
            ))}
           </div>
        </div>);
    }
}

export default PokeDex;