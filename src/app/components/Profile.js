import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import {Container} from 'semantic-ui-react';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname : '',
      surname: '',
      gender: '',
      email: '',
      address: '',
      about: '',
      blogs: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users/' + sessionStorage.getItem('userId')).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(data => {
      if(data!=null){
        this.setState({
          firstname: data.firstname,
          surname: data.surname,
          gender: data.gender,
          email: data.email,
          address : data.address,
          about: data.about
        })
      }
    })  
  }

  render() {
    console.log(this.state.firstname, this.state.surname, this.state.email, this.state.address, this.state.about)
    return (
      <Container textAlign='center'>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
        <h1>Ima Dumb Profile Component</h1>
      </Container>
    )
  }
}

export default Profile;