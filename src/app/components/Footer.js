import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import styles from '../assets/style.css';

class Footer extends Component{
  state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const {activeItem} = this.state
    const style = {
      position: 'fixed',
      background: '#E6E6E6',
      bottom: '0px',
      height: '75px',
      width: '100%',
      left: '0px'
    }
    return(<div style={style}>
        <div className='ui fixed vertical footer segment'>
        Ima footer
      </div>
    </div>
    )
  }
}

export default Footer;