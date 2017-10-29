import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import About from './components/About';
import Profile from './components/Profile';
import Home from './components/Home';
import Album from './components/Album';
import Landing from './components/Landing';
import styles from './assets/style.css';

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/album/:id" component={Album}/>
          <Route path="/profile/:id" component={Profile}/>
        </Route>
    </Router>,

  document.getElementById('root')
);

