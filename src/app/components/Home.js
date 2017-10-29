import React, {Component} from 'react';
import {Card, Icon, Image, Container} from 'semantic-ui-react';
import {Link} from 'react-router';
import api from '../API/vinylAPI';

class CardList extends Component{
  constructor(props){
    super(props);
    this.state = {
      vinyls : []
    }
  }

  componentDidMount(){
    let p = api.getAll();
    p.then(response => {
      let vinyles = response;
      this.setState({vinyls : vinyles})
    })
  }

  handleLike(){
    console.log('clicked')
  }

  buildCards(){
    let imageStyle = {
      height:'200px',
      width:'100%'
    }
    return this.state.vinyls.map((data) => {
      return <Card key={data.id}>
        <Link to={'album/' + data.id}><Image src={data.image} style={imageStyle}/></Link>
        <Card.Content>
          <Card.Header>
            <Link to={'album/' + data.id}>{data.album}</Link>
          </Card.Header>
          <Card.Description>
            <p><b>Artist : </b>{data.artist}</p>
            <p><b>Released : </b>{data.year}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
      <a onClick={this.handleLike}>
        <Icon name='thumbs outline up' />
        {data.likes} 
      </a>
    </Card.Content>
      </Card>
    })
  }

  render(){
    return(
      <div>
      <Card.Group stackable itemsPerRow={3}>
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
        <h1>Albums</h1>
          <CardList/>
      </Container>
    )
  }
}

export default Home;