import React, {Component} from 'react';
import {Menu, Segment, Header, Icon} from 'semantic-ui-react';
import {Link} from 'react-router'

class HeaderComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home',
    }
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render(){
    const {activeItem} = this.state
    return(<div>
        <Header as='h1' icon textAlign='center'>
          <Icon name='pied piper alternate' size='massive' color='green' />
          <Header.Content>
            Welcome to Pied Piper
            <Header.Subheader>
              The Internets No1 Content Website
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Menu pointing secondary>
          <Menu.Item as={Link} to='rust/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}/>
          <Menu.Item as={Link} to='about' name='About' active={activeItem === 'About'} onClick={this.handleItemClick}/> 
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='profile' name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick}/>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default HeaderComponent;