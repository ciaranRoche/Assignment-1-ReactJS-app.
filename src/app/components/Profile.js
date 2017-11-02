import React, {Component} from 'react';
import {Container, Button} from 'semantic-ui-react';

class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return(
      <Container textAlign='center'>
        <h1>Ima Profile</h1>
      </Container>
    )
  }
}

export default Profile;