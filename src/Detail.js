import React, { Component } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import fetch from 'superagent'
// loading gif
import poke from './assets/poke.gif'

export default class Detail extends Component {
    state = {
        pokemonArray: [],
        pokemon: '',
        category: '',
        sort: ''
    }
    // fetching from API
    fetchPokemon = async () => {
        console.log(this.props.match.params.pokemonName)
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`)
        this.setState({ pokemonArray: response.body.results })
    }
    // mounting fetched data
    componentDidMount = async () => {
        await this.fetchPokemon()
    }

    render() {
        console.log(this.state.category)
        return (
            <>
            <div>
                <div>
                    <NavLink to="/pokedex">
                        <button className="home-button">Back to Pokédex!</button>
                    </NavLink>
                </div>
                {
                this.state.pokemonArray.length === 0
                ? <img src={poke} alt="Loading" />
                : this.state.pokemonArray.map(pokemon =>
                    <div key={pokemon.render} className="right-column">
                        <h3>Name: {pokemon.pokemon}</h3>
                        <img src={pokemon.url_image} alt={pokemon.name} />
                        <p className="poke-t1">Type: {pokemon.type_1}</p>
                        <p className="poke-t2">Type 2: {pokemon.type_2}</p>
                        <p className="poke-a1">Ability: {pokemon.ability_1}</p>
                        <p className="poke-a2">Ability 2: {pokemon.ability_2}</p>
                        <p className="poke-a">Attack: {pokemon.attack}</p>
                        <p className="poke-d">Defense: {pokemon.defense}</p>
                        <p className="poke-h">Height: {pokemon.height}</p>
                        <p className="poke-w">Weight: {pokemon.weight}</p>
                        <p className="poke-s">Speed: {pokemon.speed}</p>
                        <p className="poke-sh">Shape: {pokemon.shape}</p>
                        <p className="poke-b">Base: {pokemon.pokebase}</p>
                        <p className="poke-d">Official Pokédex: <a href={`${pokemon.pokedex}`}>{pokemon.pokedex}</a></p>
                    </div>)
                }
            </div>
            </>
        )
    }
}