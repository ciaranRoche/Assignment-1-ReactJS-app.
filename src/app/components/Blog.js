import React, {Component} from 'react';
import {Container, Image, Grid, Segment} from 'semantic-ui-react';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      contentA : '',
      contentB : '',
      highlight : '',
      snippet : '',
      image : ''
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
          contentB: data.contentB
        })
      }
    })
  }

  render(){
    return(
      <div>
      <Container textAlign='center'>
        <h1>{this.state.title}</h1>
        <p>{this.state.snippet}</p>
      </Container>
        <Image src={this.state.image} fluid style={{'height':'500px', margin:'40px 0'}}/>
      <Container textAlign='center'>
        <Grid>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>{this.state.contentA}</p>
              <Segment stacked>
                <p><b>{this.state.highlight}</b></p>
              </Segment>
            <p>{this.state.contentB}</p>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid>
      </Container>

      </div>
    )
  }
}

export default Blog;