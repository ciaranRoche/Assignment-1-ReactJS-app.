import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import HeaderComponent from './Header';

class App extends Component{
  render(){
    return(
      <Container textAlign='center'>
        <HeaderComponent/>
          {this.props.children}
      </Container>
    )
  }
};

export default App;
