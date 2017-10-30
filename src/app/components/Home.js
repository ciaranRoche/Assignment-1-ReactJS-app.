import React, {Component} from 'react';
import {Card, Icon, Image, Container, Button} from 'semantic-ui-react';
import {Link} from 'react-router';
import vinylApi from '../API/vinylAPI';
import Loading from './Loading';
import _ from 'lodash';

class CardList extends Component{
  constructor(props){
    super(props);
    this.state = {
      vinyls : []
    }
    this.handleLike = this.handleLike.bind(this)
  }

  componentDidMount(){
    let p = vinylApi.getAll();
    p.then(response => {
      let vinyles = response;
      this.setState({vinyls : vinyles})
    })
  }

  handleLike(e){
    e.preventDefault();
    vinylApi.like(e.target.name)
    this.setState({});
  }

  buildCards(){
    let imageStyle = {
      height:'200px',
      width:'100%'
    }
    let albums = _.sortBy(this.state.vinyls, function(vinyl){
      return -vinyl.likes
    })
    return albums.map((data) => {
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
      <Button primary onClick={this.handleLike} name={data.id}>
        <i className="thumbs outline up icon"></i>
        {data.likes} 
      </Button>
    </Card.Content>
      </Card>
    })
  }

  buildContent(){
    let content;
    if(this.state.vinyls == 0){
      content = <div><Loading/></div>
    }else{
      content = <div>
        <h1>Albums</h1>
        <Card.Group stackable itemsPerRow={3}>
          {this.buildCards()}
        </Card.Group>
      </div>
    }
    return content;
  }

  render(){
    return(<div>
        {this.buildContent()}
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <Container textAlign='center'>
          <CardList/>
      </Container>
    )
  }
}

export default Home;