import React, {Component} from 'react';
import {Card, Icon, Image, Container, Button} from 'semantic-ui-react';
import {Link} from 'react-router';
import vinylApi from '../API/vinylAPI';
import Loading from './Loading';
import VinylCards from './vinylCards';
import _ from 'lodash';

class CardList extends Component{
  constructor(props){
    super(props);
    this.state = {
      vinyls : []
    }
  }

  componentDidMount(){
    let p = vinylApi.getAll();
    p.then(response => {
      let vinyles = response;
      this.setState({vinyls : vinyles})
    })
  }
  
  render(){
    return(<div>
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