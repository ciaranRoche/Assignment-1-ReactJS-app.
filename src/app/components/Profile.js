import React, {Component} from 'react';
import {Route, Redirect, Link} from 'react-router';
import {Container, Grid, Image, Card} from 'semantic-ui-react';

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
      profileImage: '',
      likedBlogs: [],
      blogs: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users/' + this.props.params.id).then(res =>{
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
          about: data.about,
          likedBlogs: data.liked_blogs,
          profileImage: data.profile_image
        })
      }
    }).then(() => {
      let link = 'http://localhost:3000/blogs?'
      this.state.likedBlogs.forEach((element) =>{
        link += 'id=' + element + '&'
      })
      fetch(link).then(res => {
        if(res.ok){
          return res.json()
        }
      }).then(data => {
        if(data!=null){
          this.setState({
            blogs: data
          })
        }
      })
    }) 
  }

  buildCards(){
    let imageStyle = {
      height:'200px',
      width:'100%'
    }
    return this.state.blogs.map((data) => {
      return <Card key={data.id}>
        <Link to={'blog/' + data.id}><Image src={data.imageUrl} style={imageStyle}/></Link>
        <Card.Content>
          <Card.Header>
            <Link to={'blog/' + data.id}>{data.name}</Link>
          </Card.Header>
          <Card.Description>
            {data.snippet}
          </Card.Description>
        </Card.Content>
      </Card>
    })
  }

  buildLikeBlogs(){
    let content = 'liked blogs'
    if(this.state.blogs.length == 0){
      content = <div>
        <h1>No Liked Blogs :( </h1>
      </div>
    }else{
      content = <div>
        <h1>Liked Blogs</h1>
        <Card.Group itemsPerRow={4}>
          {this.buildCards()}
        </Card.Group>
      </div>
    }
    return content
  }

  render() {
    return (
      <Container textAlign='center'>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image fluid src={this.state.profileImage} />
            </Grid.Column>
            <Grid.Column width={10}>
              <h1 className='ui dividing header'>{this.state.firstname} {this.state.surname}</h1>
              <p><b>Address : </b>{this.state.address}</p>
              <p><b>Email : </b>{this.state.email}</p>
              <div className='ui divider'></div>
              <h3>About</h3>
              <p>{this.state.about}</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image fluid src={this.state.profileImage} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className='ui divider'></div>
        <div>
        {this.buildLikeBlogs()}
        </div>
      </Container>

    )
  }
}

export default Profile;