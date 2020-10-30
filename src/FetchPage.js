import React, { Component } from 'react'
import fetch from 'superagent';

export default class FetchPage extends Component {
    state = {
        pokemonArray: []
    }
    componentDidMount = async () => {
        const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        this.setState({ pokemonArray: response.body })
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state.pokemonArray)}
            </div>
        )
    }
}
