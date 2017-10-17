import React, {Component} from 'react';
import {Menu, Segment, Header} from 'semantic-ui-react';
import {Link} from 'react-router'

class HeaderComponent extends Component{
  state = {activeItem: 'home'}
  
  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render(){
    const {activeItem} = this.state
    return(<div>
        <Menu pointing secondary>
          <Menu.Item as={Link} to='/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}/>
          <Menu.Item as={Link} to='about' name='About' active={activeItem === 'About'} onClick={this.handleItemClick}/> 
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/' name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick}/>
          </Menu.Menu>
        </Menu>
        <Header as='h1'>
          Rust
        </Header>
      </div>
    )
  }
}

export default HeaderComponent;