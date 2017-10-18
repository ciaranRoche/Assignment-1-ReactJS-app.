import React, {Component} from 'react';
import {Container, Image} from 'semantic-ui-react';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      content : '',
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
          content: data.snippet
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
        <p>{this.state.content}</p>
      </Container>

      </div>
    )
  }
}

export default Blog;