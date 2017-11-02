import React, {Component} from 'react';
import {Route, Redirect, Link} from 'react-router';
import {Container, Grid, Image, Card} from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      gender: '',
      email: '',
      address: '',
      about: '',
      profileImage: '',
      likedBlogs: [],
      blogs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users/' + sessionStorage.getItem('userId')).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(data => {
      if (data != null) {
        console.log(data.profile_image)
        this.setState({
          firstname: data.firstname,
          surname: data.surname,
          gender: data.gender,
          email: data.email,
          address: data.address,
          about: data.about,
          likedBlogs: data.liked_blogs,
          profileImage: data.profile_image
        })
      }
    })
  }

  render() {
    return (
      <Container textAlign='center'>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image fluid src={this.state.profileImage}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <h1 className='ui dividing header'>{this.state.firstname} {this.state.surname}</h1>
              <p>
                <b>Address :
                </b>{this.state.address}</p>
              <p>
                <b>Email :
                </b>{this.state.email}</p>
              <div className='ui divider'></div>
              <h3>About</h3>
              <p>{this.state.about}</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image fluid src={this.state.profileImage}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className='ui divider'></div>
        <div>
        </div>
      </Container>

    )
  }
}

export default Profile;