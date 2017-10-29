import React, {Component} from 'react';
import {Container, Form, Button} from 'semantic-ui-react';
import {Link} from 'react-router';

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
      about : '',
      picture : '',
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = () => {
    console.log('clicked')
  }

  render(){
    const { value } = this.state
    return(
      <Container textAlign='center'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' />
            <Form.Input label='Last name' placeholder='Last name' />
            <Form.Select label='Gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='Email' placeholder='Email Address' />
            <Form.Input type='password' label='Password' placeholder='Password' />
            <Form.Input type='picture' label='Profile Image' placeholder='Profile Picture' />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Link to='app/'><Form.Button onClick={this.handleSubmit}>Submit</Form.Button></Link>
        </Form>
      </Container>
    )
  }
}

export default SignUp