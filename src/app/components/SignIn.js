import React, {Component} from 'react';
import {Link} from 'react-router';
import {Container,Button,Form} from 'semantic-ui-react';
import HeaderComponent from './Header'

class SignIn extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      email : '',
      password : '',
    }
  }

  handleClick = (e) => {
    console.log('submit clicked')
    console.log(this.state.email, this.state.password)
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
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
      <Link to='rust/'><Button type='submit' onClick={this.handleClick.bind(this)}>SignIn</Button></Link>
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