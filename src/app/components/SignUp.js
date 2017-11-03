import React, {Component} from 'react';
import {Container, Form, Button} from 'semantic-ui-react';
import {Link} from 'react-router';
import usersAPI from '../API/userAPI';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other'}
]

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName : '',
      surname : '',
      gender : '',
      email : '',
      password : '',
      address: '',
      about : '',
      picture : '',
      signedUp : false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    this.setState({[name] : event.target.value});
    console.log(this.state[name]);
  }

  // handles change from gender drop down
  handleChangeGender(event, {value}){
    this.setState({gender:value});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let f = this.state.firstName.trim();
    let s = this.state.surname.trim();
    let g = this.state.gender.trim();
    let em = this.state.email.trim();
    let p = this.state.password.trim();
    let ad = this.state.address.trim();
    let ab = this.state.about.trim();
    let c = [];
    let i = this.state.picture.trim();
    if(!f || !s || !g || !em || !p || !ad || !ab || !i){
      return
    }
    let sign = usersAPI.addUser(f,s,g,em,p,ab,ad,c,i);
    sign.then(res => {
      if(res == 201){
        this.setState({
          signedUp : true
        })
      }
    })
  }

  buildButton(){
    let content;
    let signUp = <Button type='submit' onClick={this.handleSubmit.bind(this)}>SignIn</Button>
    let success = <Link to='app' ><Button>Success</Button></Link>
    this.state.signedUp == false ? content = signUp : content = success
    return content;
  }

  render(){
    const { value } = this.state
    return(
      <Container textAlign='center'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='First name' name='firstName' placeholder='First name' onChange={this.handleChange} />
            <Form.Input label='Last name' name='surname' placeholder='Last name' onChange={this.handleChange} />
            <Form.Select label='Gender' name='gender' options={options} value='gender' placeholder='Gender' onChange={this.handleChangeGender} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='Email' name='email' placeholder='Email Address' onChange={this.handleChange} />
            <Form.Input type='password' name='password' label='Password' placeholder='Password' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input type='address' name='address' label='Address' placeholder='Address' onChange={this.handleChange} />
            <Form.Input type='picture' name='picture' label='Profile Image' placeholder='Profile Picture' onChange={this.handleChange} />
          </Form.Group>
          <Form.TextArea label='About' name='about' placeholder='Tell us more about you...' onChange={this.handleChange}/>
          {this.buildButton()}
        </Form>
      </Container>
    )
  }
}

export default SignUp