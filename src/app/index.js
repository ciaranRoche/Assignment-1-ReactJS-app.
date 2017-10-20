import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import About from './components/About';
import Profile from './components/Profile';
import Home from './components/Home';
import Blog from './components/Blog';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import styles from './assets/style.css';

ReactDOM.render(
  <Router history={hashHistory}>
        <Route exact path="/" component={SignIn}/>
          <Route path='rust/' component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/blog/:id" component={Blog}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/signIn" component={SignIn}/>
          </Route>
    </Router>,

  document.getElementById('root')
);

