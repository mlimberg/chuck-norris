import './reset'
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory, IndexRedirect } from 'react-router'

import JokeContainer from './components/JokeContainer/JokeContainer';
import App from './components/App/App';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Favorites from './components/Favorites/Favorites';
import Home from './components/Home/Home';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <IndexRedirect to='/jokes' /> 
      <Route path='/jokes'  component={JokeContainer} />
      <Route path='/settings' component={Settings} />
      <Route path='/favorites' component={Favorites} />
    </Route>
  </Router>
)

render(router, document.querySelector('.application'));
