import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <p>
                    So, you've found yourself on my Pokédex page!
                </p>
                <p>
                    Here you can search through and filter a complete Pokédex to your liking.
                </p>
                <p>
                    Explore and enjoy!
                </p>
                <button className="home-button">Continue</button>
            </div>
        )
    }
}
