import './reset'
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Link, browserHistory, indexRoute, hashHistory } from 'react-router'
import JokeContainer from './components/JokeContainer/JokeContainer';
import App from './components/App/App';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <indexRoute component={JokeContainer} />
      <Route path='/settings' component={Settings} />
    </Route>
  </Router>
)

render(router, document.querySelector('.application'));
