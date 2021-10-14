import React, { Component } from 'react';
import "./Pokecard.css"


class Pokecard extends Component {

    render() {
        let img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
        let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);
        let imgsrc = `${img}${padToThree(this.props.prop.id)}.png`;

        return (
            <div className="card">
                <h3>{this.props.prop.name}</h3>
                <img src={imgsrc} alt="" srcset="" />
                <div>
                    <p>type:{this.props.prop.type}</p>
                    <p>EXP:{this.props.prop.base_experience}</p>
                </div>

            </div>
        );
    }
}

export default Pokecard;
