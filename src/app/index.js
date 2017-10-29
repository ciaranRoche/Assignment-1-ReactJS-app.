import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import About from './components/About';
import Profile from './components/Profile';
import Home from './components/Home';
import Blog from './components/Blog';
import Landing from './components/Landing';
import styles from './assets/style.css';

ReactDOM.render(
  <Router history={hashHistory}>
        <Route exact path="/" component={Landing}/>
        <Route path='app/' component={App}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/blog/:id" component={Blog}/>
          <Route path="/profile/:id" component={Profile}/>
        </Route>
    </Router>,

  document.getElementById('root')
);

