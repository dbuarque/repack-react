import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router';
import Home from './Home';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home} >
        </Route>
    </Router>
    ,  document.getElementById('main-container'));
