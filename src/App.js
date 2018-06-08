import React from 'react';
import './App.css';
import HomePage from './HomePage'
import Portfolio from './Portfolio'
import Contact from './Contact'
import WorkExperience from './WorkExperience'
import NameBadgeComp from './NameBadgeComp';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

export default () => (
        <BrowserRouter>
          <Switch>
            <Route path ="/" exact component = {HomePage}/>
            <Route path ="/portfolio" component ={Portfolio}/>
            <Route path ="/contact" component = {Contact}/>
            <Route path ="/workexperience" component = {WorkExperience}/>
            <Route path ="/namebadgecomp" component = {NameBadgeComp}/>
          </Switch>
        </BrowserRouter>
)
