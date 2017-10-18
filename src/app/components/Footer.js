import React, {Component} from 'react';
import {Divider} from 'semantic-ui-react';
import styles from '../assets/style.css';



class Footer extends Component{
  render(){
    return(<div>
        <div className='ui vertical segment'>
        <Divider/>
          <h3>Ima A Footer</h3>
      </div>
    </div>
    )
  }
}

export default Footer;