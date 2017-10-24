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
      password : '',
      users : [],
      trigger : false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users').then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(data => {
      if(data != null){
        this.setState({users:data})
      }
    })
  }

  handleClick = (e) => {
    console.log(this.state.users)
    console.log('submit clicked')
    let users = this.state.users;
    let email = "sondrabeasley@earwax.com"
    let password = "elit"
    users.forEach((user) => {
      if(user.email === email && user.password == password){
        sessionStorage.setItem('loggedIn', user.id);
        this.setState({trigger: true});
      }
    })
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }

  authUser(){

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
      <Button type='submit' onClick={this.handleClick.bind(this)}>SignIn</Button>
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