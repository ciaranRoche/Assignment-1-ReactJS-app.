import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

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

  }

  render(){
    return(
      <Container textAlign='center'>
        Ima Blog Post {this.props.params.id}
      </Container>
    )
  }
}

export default Blog;