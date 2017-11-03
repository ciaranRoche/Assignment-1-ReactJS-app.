import React, {Component} from 'react';
import {Card, Icon, Image, Container, Button, Input} from 'semantic-ui-react';
import {Link} from 'react-router';
import vinylApi from '../API/vinylAPI';
import Loading from './Loading';
import VinylCards from './vinylCards';
import _ from 'lodash';

class CardList extends Component{
  constructor(props){
    super(props);
    this.state = {
      vinyls : [],
      ogVinyls: []
    }
    this.searchVinyls = this.searchVinyls.bind(this)
  }

  componentDidMount(){
    let p = vinylApi.getAll();
    p.then(response => {
      let vinyles = response;
      this.setState({vinyls : vinyles, ogVinyls: vinyles})
    })
  }

  searchVinyls(e){
    let updatedVinyls = this.state.ogVinyls;
    updatedVinyls = updatedVinyls.filter(function (item){
      return item.artist.toLowerCase().search(
        e.target.value.toLowerCase()
      ) !== -1;
    });
    this.setState({vinyls : updatedVinyls})
  }

  render(){
    return(<div>
        <h1>Albums</h1>
        <Input fluid focus onChange={this.searchVinyls} placeholder='Search by Artist...' />
        <br/>
        <VinylCards vinyls={this.state.vinyls}/>
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