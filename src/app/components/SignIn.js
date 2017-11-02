import React, {Component} from 'react';
import {Link, Redirect, Route} from 'react-router';
import {Container,Button,Form} from 'semantic-ui-react';
import HeaderComponent from './Header';
import App from './App';
import Home from './Home';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      email : '',
      password : ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    let url = 'http://localhost:3000/users?email=' + this.state.email;
    fetch(url).then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(data => {
      if(data != null){
        if(data[0].email == this.state.email){
          console.log('woohoo it works')
          sessionStorage.setItem('userId', data[0].id)
          console.log(sessionStorage.getItem('userId'))
        }else{
          console.log('we gots a mistake')
        }
      }
    })
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
    console.log(this.state.email)
  }

  buildForm(){
    return <Form>
      <Form.Field>
        <label>Email</label>
        <input name='email' placeholder="email" onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input name='password' type='password' placeholder='password' onChange={this.handleChange}/>
      </Form.Field>
      <Link to='app' ><Button type='submit' onClick={this.handleClick.bind(this)}>SignIn</Button></Link>
    </Form>
  }

  render() {
    return (
      <Container textAlign='center'>
        {this.buildForm()}
      </Container>
    )
  }
}

export default SignIn