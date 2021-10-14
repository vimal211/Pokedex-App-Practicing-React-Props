import React, { Component } from 'react';
import "./Pokecard.css"

class Pokecard extends Component {
    render() {
        let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.prop.id}.png`
        return (
            <div className="card">
                <h3>{this.props.prop.name}</h3>
                <img src={img} alt="" srcset="" />
                <div>
                    <p>type:{this.props.prop.type}</p>
                    <p>EXP:{this.props.prop.base_experience}</p>
                </div>

            </div>
        );
    }
}

export default Pokecard;
