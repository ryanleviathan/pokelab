import React, { Component } from 'react'
import './App.css';
// import {
//   BrowserRouter as Router, 
//   Route, 
//   Switch,
// } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
// import FetchPage from './FetchPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
              <>
                {/* <Router> */}
                    <Header />
                    {/* <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <WolfPage {...routerProps} />} 
                    />
                    <Route 
                        path="/list" 
                        exact
                        render={(routerProps) => <ListPage {...routerProps} />} 
                    />
                    <Route 
                        path="/fetch" 
                        exact
                        render={(routerProps) => <FetchPage {...routerProps} />} 
                    />
                    </Switch> */}
                    <Footer />
                {/* </Router> */}
              </>
            </div>
        )
    }
}