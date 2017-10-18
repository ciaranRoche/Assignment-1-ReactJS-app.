import React, {Component} from 'react';
import {Card, Icon, Image, Container} from 'semantic-ui-react';
import Data from './TestData';


class CardList extends Component{
  buildCards(){
    let imageStyle = {
      height:'200px'
    }
    return this.props.data.map((data) => {
      return <Card key={data.id}>
        <Image src={data.imageUrl} style={imageStyle}/>
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
          <CardList data={Data}/>
      </Container>
    )
  }
}

export default Home;