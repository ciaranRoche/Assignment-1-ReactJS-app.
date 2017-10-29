import React, {Component} from 'react';
import {Link} from 'react-router';
import {Container, Image, Grid, Segment, Rail, Sticky, Header, Icon} from 'semantic-ui-react';
import vinylApi from '../API/vinylAPI';
import Loading from './Loading';


class Album extends Component{
  constructor(props){
    super(props);
    this.state = {
      id : props.params.id,
      artist : '',
      album : '',
      image : '',
      genre : '',
      year : '',
      notes : '',
      likes : 0,
      reviews : []
    }
  }

  componentDidMount(){
    let p = vinylApi.getAlbum(this.state.id)
    this.setState({
      id : p.id,
      artist : p.artist,
      album : p.album,
      image : p.image,
      genre : p.genre,
      year : p.year,
      notes : p.notes,
      likes : p.likes,
      reviews : p.reviews
    })

  }


  render(){
    return(
      <div>
        <h1>{this.state.album}</h1>
      </div>
    )
  }
}

export default Album;