import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App'; 
import HomePage from './components/HomePage'
import Trainers from './components/Trainers'
import About from './components/About'
import Contact from './components/Contact'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/trainers" component={Trainers} />
    </Route>
);