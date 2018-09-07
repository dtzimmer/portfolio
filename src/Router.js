import React from 'react';
import './App.css';
import HomePage from './HomePage'
import Portfolio from './Portfolio'
import WorkExperience from './WorkExperience'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

export default () => (
    <Router>
        <Switch>
            <Route path ="/" exact component = {HomePage}/>
            <Route path ="/portfolio" component ={Portfolio}/>
            <Route path ="/workexperience" component = {WorkExperience}/>
        </Switch>
    </Router>
)