import React, {Component} from 'react';
import {Container,Image} from 'semantic-ui-react';

class About extends Component{
  render(){
    return(
      <div>
        <Container textAlign='center'>
          <h1>About Rust</h1>
          <p>Lorem ipsum dolor sit amet, ligula eget a dapibus mauris pede, elit nulla turpis amet, eu sit ut. Dictumst malesuada wisi enim integer,</p>
        </Container>
        <Image src='https://i.gyazo.com/7ddfe5743669fbd89c140e479e02b6a8.png' fluid style={{height: '350px', margin:'40px 0'}}/>
        <Container textAlign='center'>
          <p>Lorem ipsum dolor sit amet, suscipit nec dui lorem pellentesque, lectus vitae sed culpa cras et neque, ultrices mattis aliquet nec ultrices curabitur. Justo aenean nullam vitae tellus amet nullam, et wisi, gravida odio hac turpis viverra diam nam, dolor ipsum libero. Vulputate leo pede rutrum proin, pede nulla, tellus orci et elit consequuntur sed neque. Nonummy justo egestas. Sociis sem justo sed pede, wisi rutrum risus dolor morbi justo, rutrum a amet vehicula. Elit sed eros id nostra facilisi, taciti et vulputate dolor, velit vel praesent eu, neque duis nunc cursus. Viverra cursus hac urna suspendisse, eros porta at at mauris, ut morbi ut quaerat rutrum eleifend sagittis.</p>
          <p>Lorem ipsum dolor sit amet, suscipit nec dui lorem pellentesque, lectus vitae sed culpa cras et neque, ultrices mattis aliquet nec ultrices curabitur. Justo aenean nullam vitae tellus amet nullam, et wisi, gravida odio hac turpis viverra diam nam, dolor ipsum libero. Vulputate leo pede rutrum proin, pede nulla, tellus orci et elit consequuntur sed neque. Nonummy justo egestas. Sociis sem justo sed pede, wisi rutrum risus dolor morbi justo, rutrum a amet vehicula. Elit sed eros id nostra facilisi, taciti et vulputate dolor, velit vel praesent eu, neque duis nunc cursus. Viverra cursus hac urna suspendisse, eros porta at at mauris, ut morbi ut quaerat rutrum eleifend sagittis.</p>
          <p>Lorem ipsum dolor sit amet, suscipit nec dui lorem pellentesque, lectus vitae sed culpa cras et neque, ultrices mattis aliquet nec ultrices curabitur. Justo aenean nullam vitae tellus amet nullam, et wisi, gravida odio hac turpis viverra diam nam, dolor ipsum libero. Vulputate leo pede rutrum proin, pede nulla, tellus orci et elit consequuntur sed neque. Nonummy justo egestas. Sociis sem justo sed pede, wisi rutrum risus dolor morbi justo, rutrum a amet vehicula. Elit sed eros id nostra facilisi, taciti et vulputate dolor, velit vel praesent eu, neque duis nunc cursus. Viverra cursus hac urna suspendisse, eros porta at at mauris, ut morbi ut quaerat rutrum eleifend sagittis.</p>
        </Container>
      </div>
    )
  }
}

export default About;