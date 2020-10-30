import React, { Component } from 'react';
import pica from './assets/small.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>Pokédex by /ryanleviathan</p>
                <p>
                    <img className="pica" src={pica} alt="picachu" />
                    API @ https://alchemy-pokedex.herokuapp.com
                </p>
            </div>
        )
    }
}
