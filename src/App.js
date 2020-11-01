import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Header from './Header.js'
import Home from './Home.js'
import Pokedex from './Pokedex.js'
import Detail from './Detail.js'
import Footer from './Footer.js'
// import FetchPage from './FetchPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => 
                            <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/pokedex" 
                            exact
                            render={(routerProps) => 
                            <Pokedex {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:pokemonName" 
                            exact
                            render={(routerProps) => 
                            <Detail {...routerProps} />} 
                        />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }
}