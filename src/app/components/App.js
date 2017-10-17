import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import HeaderComponent from './Header';
import Footer from './Footer';

class App extends Component{
  render(){
    return(
      <Container textAlign='center'>
        <HeaderComponent/>
          {this.props.children}
        <Footer/>
      </Container>
    )
  }
};

export default App;
