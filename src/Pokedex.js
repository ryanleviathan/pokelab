import React, { Component } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import fetch from 'superagent'
// loading gif
import poke from './assets/poke.gif'

export default class Pokedex extends Component {
    state = {
        pokemonArray: [],
        pokemon: '',
        category: '',
        sort: ''
    }
    // fetching from API
    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}&sort=${this.state.category}&direction=${this.state.sort}`)
        this.setState({ pokemonArray: response.body.results })
    }
    // mounting fetched data
    componentDidMount = async () => {
        await this.fetchPokemon()
    }
    // for search button
    handleClick = async () => {
        await this.fetchPokemon()
    }
    // for search form
    handleChange = (e) => {
        this.setState({ pokemon: e.target.value })
    }
    // category drop down
    handleCategory = async (e) => {
        await this.setState({ category: e.target.value })
        this.fetchPokemon()
        console.log(e.target.value)
    }
    // sort by category drop down
    handleSort = async (e) => {
        await this.setState({ sort: e.target.value })
        this.fetchPokemon()
    }

    render() {
        console.log(this.state.category)
        return (
            <>
            <div>
                <div className="left-column">
                    <input onChange={this.handleChange} />
                    <button className="button" onClick={this.handleClick}>Search by Name</button>
                </div>
                <div className="left-column">
                    <select onChange={this.handleCategory} className="dropdown">
                        <option value="">Category Selection!</option>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                    </select>
                    <select onChange={this.handleSort} className="dropdown">
                        <option value="">Sorting Selection!</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                {
                this.state.pokemonArray.length === 0
                ? <img src={poke} alt="Loading" />
                : this.state.pokemonArray.map(pokemon =>
                    <NavLink to={`detail/${pokemon.pokemon}`}>    
                        <div key={pokemon.render} className="right-column"> 
                            <h3 className="poke-name">Name: {pokemon.pokemon}</h3>
                            <img className="poke-img" src={pokemon.url_image} alt={pokemon.name} />
                            <p className="poke-t1">Type: {pokemon.type_1}</p>
                            <p className="poke-t2">Type 2: {pokemon.type_2}</p>
                            <p className="poke-a1">Ability: {pokemon.ability_1}</p>
                            <p className="poke-a2">Ability 2: {pokemon.ability_2}</p>
                            <p className="poke-a">Attack: {pokemon.attack}</p>
                            <p className="poke-d">Defense: {pokemon.defense}</p>
                        </div>
                    </NavLink>
                    )
                }
            </div>
            </>
        )
    }
}
