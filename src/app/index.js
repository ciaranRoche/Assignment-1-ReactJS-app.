import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import About from './components/About';
import Profile from './components/Profile';
import Home from './components/Home';
import Blog from './components/Blog';
import styles from './assets/style.css';

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About} />
          <Route path="profile" component={Profile}/>
          <Route path="blog/:id" component={Blog}/>
        </Route>
    </Router>,

  document.getElementById('root')
);

