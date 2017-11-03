import React, {Component} from 'react';
import {Route, Redirect, Link} from 'react-router';
import {Container, Grid, Image, Card} from 'semantic-ui-react';
import VinylCards from './vinylCards';
import vinylApi from '../API/vinylAPI';

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
      vinylCollection: [],
      vinyls: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users/' + sessionStorage.getItem('userId')).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(data => {
      if (data != null) {
        this.setState({
          firstname: data.firstname,
          surname: data.surname,
          gender: data.gender,
          email: data.email,
          address: data.address,
          about: data.about,
          vinylCollection: data.collection,
          profileImage: data.profile_image
        })
      }
    }).then(() => {
      let url = 'http://localhost:3000/vinyl?';
      this.state.vinylCollection.forEach((element) =>{
        url += 'id=' + element + '&'
      })
      fetch(url).then(res => {
        if(res.ok){
          return res.json()
        }
      }).then(data => {
        if(data!=null){
          this.setState({
            vinyls: data
          })
        }
      })
    })
  }

  render() {
    return (<div>
      <Container textAlign='center'>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image fluid src={this.state.profileImage} style={{height: '300px'}}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <h1 className='ui dividing header'>{this.state.firstname} {this.state.surname}</h1>
              <p>
                <b>Address :
                </b> {this.state.address}</p>
              <p>
                <b>Email :
                </b> {this.state.email}</p>
              <div className='ui divider'></div>
              <h3>About</h3>
              <p>{this.state.about}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
          <Image src='https://s3-eu-west-1.amazonaws.com/piedpipervinyl/cover6.gif' fluid style={{height: '350px', margin:'40px 0'}}/>
        <Container textAlign='center'>
        <div>
          <h2>My Collection</h2>
          <VinylCards vinyls={this.state.vinyls}/>
        </div>
      </Container>
      </div>
    )
  }
}

export default Profile;