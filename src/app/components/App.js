import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import HeaderComponent from './Header';
import Footer from './Footer';



class App extends Component{
  render(){
    return(<div>
        <Container textAlign='center'>
          <HeaderComponent/>
            {this.props.children}
            <Footer/>
        </Container>
      </div>
    )
  }
};

export default App;
