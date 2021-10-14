import React, { Component } from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css";


class Pokedex extends Component {

    render() {
        let ele = this.props.prop.map(ele => {
            return <Pokecard prop={ele} />
        })
        return (
            <div className="pokedex">
                <h3 className={this.props.isWinner ? 'win' : 'lose'}>{this.props.isWinner ? 'Winning Hand' : 'Loosing Hand'}</h3>
                <p>Total Experience : {this.props.exp}</p>
                <div className="pokecard_container">
                    {ele}
                </div>
            </div>
        );
    }
}

export default Pokedex;
