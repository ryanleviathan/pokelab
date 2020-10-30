import React, { Component } from 'react'
import fetch from 'superagent'
import poke from './assets/poke.gif'

export default class Pokedex extends Component {
    state = {
        pokemonArray: [],
        search: ''
    }

    componentDidMount = async () => {
        const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        this.setState({ pokemonArray: response.body.results })
    }

    handleClick = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}`);
        this.setState({ pokemonArray: response.body.results })
    }

    handleChange = (e) => {
        this.setState({ pokemon: e.target.value })
    }

    render() {
        return (
            <>
            <div>
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search by Name</button>
                {
                this.state.pokemonArray.length === 0
                ? <img src={poke} alt="Loading" />
                : this.state.pokemonArray.map(pokemon =>
                    <div key={pokemon.render} className="poke-render">
                        <p className="poke-name">Name: {pokemon.pokemon}</p>
                        <img className="poke-img" src={pokemon.url_image} alt={pokemon.name} />
                        <p className="poke-t1">Type: {pokemon.type_1}</p>
                        <p className="poke-t2">Type 2: {pokemon.type_2}</p>
                        <p className="poke-a1">Ability: {pokemon.ability_1}</p>
                        <p className="poke-a2">Ability 2: {pokemon.ability_2}</p>
                    </div>)
                }
            </div>
            </>
        )
    }
}
