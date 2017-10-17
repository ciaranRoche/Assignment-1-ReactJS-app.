import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import About from './components/About';

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
        </Route>
    </Router>,
  document.getElementById('root')
);

