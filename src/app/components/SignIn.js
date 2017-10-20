import React, {Component} from 'react';
import {Link} from 'react-router';
import {Container,Button,Form} from 'semantic-ui-react';
import HeaderComponent from './Header'

class SignIn extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('clicked')
    sessionStorage.setItem('loggedIn', true)
  }

  buildForm(){
    return <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder="email"/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type='password' placeholder='password'/>
      </Form.Field>
      <Link to='rust/'><Button type='submit'>SignIn</Button></Link>
    </Form>
  }


  render() {
    return (
      <Container textAlign='center'>
        <h1>Welcome back to RUST</h1>
        {this.buildForm()}
      </Container>
    )
  }
}

export default SignIn