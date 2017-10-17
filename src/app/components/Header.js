import React, {Component} from 'react';
import {Menu, Segment, Header} from 'semantic-ui-react';
import {Link} from 'react-router'

class HeaderComponent extends Component{
  render(){
    return(<div>
        <Menu pointing secondary>
          <Link to='/'><Menu.Item name='Home'></Menu.Item></Link>
          <Link to='about'><Menu.Item name='About'></Menu.Item></Link>
        </Menu>
        <Header as='h1'>
          Rust
        </Header>
      </div>
    )
  }
}

export default HeaderComponent;