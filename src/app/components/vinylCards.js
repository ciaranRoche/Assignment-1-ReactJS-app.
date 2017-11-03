import React, {Component} from 'react';
import {Card, Icon, Image, Container, Button} from 'semantic-ui-react';
import {Link} from 'react-router';
import Loading from './Loading';
import vinylApi from '../API/vinylAPI';

class VinylCards extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleLike = this.handleLike.bind(this)
  }

  handleLike(e){
    e.preventDefault();
    vinylApi.like(e.target.name)
    this.setState({test:false});
  }

  buildCards(){
    let imageStyle = {
      height:'200px',
      width:'100%'
    }
    let albums = _.sortBy(this.props.vinyls, function(vinyl){
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
    if(this.props.vinyls == 0){
      content = <div><Loading/></div>
    }else{
      content = <div>
        <Card.Group stackable itemsPerRow={3}>
          {this.buildCards()}
        </Card.Group>
      </div>
    }
    return content;
  }

  render(){
    return(
      <div>
      {this.buildContent()}
      </div>
    )
  }
}

export default VinylCards;