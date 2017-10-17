import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

class Main extends Component{
  render(){
    return(
      <main>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='about' component={About}/>
          <Route path='profile' component={Profile}/>
        </Switch>
      </main>
    )
  }
}

export default Main;