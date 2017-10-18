import React, {Component} from 'react';
import {Card, Icon, Image, Container} from 'semantic-ui-react';
import {Link} from 'react-router';

class CardList extends Component{
  constructor(props){
    super(props);
    this.state = {
      blogs : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/blogs').then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(data => {
      if(data!=null){
        this.setState({blogs:data})
      }
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
            {data.name}
          </Card.Header>
          <Card.Description>
            {data.snippet}
          </Card.Description>
        </Card.Content>
      </Card>
    })
  }

  render(){
    return(
      <div>
      <Card.Group itemsPerRow={3}>
        {this.buildCards()} 
        </Card.Group>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <h1>Daily Blogs</h1>
          <CardList/>
      </Container>
    )
  }
}

export default Home;