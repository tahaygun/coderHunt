import React, { Component } from 'react';
import Navbar from './Navbar';
import Recent from './Recent';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route= ReactRouter.Route;
export default class App extends Component {
    render() {
        return (
             <Router>
                <div>
                    <Navbar/>
                    <Route  exact path="/" type="development" component={Recent} />
                    <Route  exact path="/system" type="system" component={Recent} />
                    <Route  exact path="/tools" type="tools" component={Recent} />
                </div>
             </Router>
        );
    }
}