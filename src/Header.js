import React, { Component } from 'react'
import logo from './assets/pokemon.png';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img className='header-logo' src={logo} alt="pokemon-logo" />
                <h1>
                    Welcome to your Pokédex!
                </h1>
            </header>
        )
    }
}
