import React, {Component} from 'react';
import {Link} from 'react-router';
import {Container, Image, Grid, Segment, Rail, Sticky, Header, Icon} from 'semantic-ui-react';


class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      contentA : '',
      contentB : '',
      highlight : '',
      snippet : '',
      image : '',
      likes : 0,
      authorId : '',
      author : []
    }
  }

  componentWillMount(){
    fetch('http://localhost:3000/blogs/' + this.props.params.id).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(data => {
      if(data!=null){
        this.setState({
          title : data.name,
          snippet: data.snippet,
          image: data.imageUrl,
          contentA: data.contentA,
          highlight : data.highlight,
          contentB: data.contentB,
          likes : data.likes,
          authorId : data.author
        })
      }
    }).then(() => {
      fetch('http://localhost:3000/users/' + this.state.authorId).then(res => {
        if(res.ok){
          return res.json()
        }
      }).then(data => {
        if(data!=null){
          this.setState({
            author : data
          })
        }
      })
    })
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleLike = () => {
    console.log('liked :)')
    let newLikes = this.state.likes + 1;
    this.setState({likes: newLikes})
    
  }

  render(){
    const { contextRef } = this.state
    let blogAuthor = '/profile/' + this.state.author.id
    return(
      <div>
      <Container textAlign='center'>
        <h1>{this.state.title}</h1>
        <p>{this.state.snippet}</p>
      </Container>
        <Image src={this.state.image} fluid style={{'height':'500px', margin:'40px 0'}}/>
      <Container textAlign='center'>
        <Grid stackable centered columns={2}>
          <Grid.Column>
            <div ref={this.handleContextRef}>
                <p>{this.state.contentA}</p>
                <Segment stacked>
                  <p><b>{this.state.highlight}</b></p>
                </Segment>
                  <p>{this.state.contentB}</p>
                <Rail position='left' size='mini'>
                  <Sticky context={contextRef}>
                    <Segment vertical>
                      <h3>{this.state.title}</h3>
                      <Link to={blogAuthor}><p><b>Author</b> {this.state.author.firstname} {this.state.author.surname}</p></Link>
                      <span onClick={this.handleLike}><Icon name='thumbs outline up' style={{cursor:'pointer'}} size='big'/>{this.state.likes}</span>
                    </Segment>
                  </Sticky>
                </Rail>
     
            </div>
          </Grid.Column>
        </Grid>
      </Container>

      </div>
    )
  }
}

export default Blog;