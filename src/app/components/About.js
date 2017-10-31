import React, {Component} from 'react';
import {Container,Image} from 'semantic-ui-react';

class About extends Component{
  render(){
    return(
      <div>
        <Container textAlign='center'>
        <div className="ui vertical stripe center aligned segment">
          <div className='ui text container'>
            <h1>About Pied Piper</h1>
            <p><b>Discover</b> new music.</p>
            <p><b>Track</b> your collection.</p>
            <p><b>Contribute</b> to the database.</p>
          </div>
        </div>
        </Container>
        <Image src='https://s3-eu-west-1.amazonaws.com/piedpipervinyl/cover.jpg' fluid style={{height: '350px', margin:'40px 0'}}/>
        <Container textAlign='center'>
        <div className="ui vertical stripe center aligned segment">
          <div className="ui text container">
          <p>Lorem ipsum dolor sit amet, suscipit nec dui lorem pellentesque, lectus vitae sed culpa cras et neque, ultrices mattis aliquet nec ultrices curabitur. Justo aenean nullam vitae tellus amet nullam, et wisi, gravida odio hac turpis viverra diam nam, dolor ipsum libero. Vulputate leo pede rutrum proin, pede nulla, tellus orci et elit consequuntur sed neque. Nonummy justo egestas. Sociis sem justo sed pede, wisi rutrum risus dolor morbi justo, rutrum a amet vehicula. Elit sed eros id nostra facilisi, taciti et vulputate dolor, velit vel praesent eu, neque duis nunc cursus. Viverra cursus hac urna suspendisse, eros porta at at mauris, ut morbi ut quaerat rutrum eleifend sagittis.</p>
          <p>Lorem ipsum dolor sit amet, suscipit nec dui lorem pellentesque, lectus vitae sed culpa cras et neque, ultrices mattis aliquet nec ultrices curabitur. Justo aenean nullam vitae tellus amet nullam, et wisi, gravida odio hac turpis viverra diam nam, dolor ipsum libero. Vulputate leo pede rutrum proin, pede nulla, tellus orci et elit consequuntur sed neque.</p>
          <p>Lorem ipsum dolor sit amet, suscipit nec dui lorem pellentesque, lectus vitae sed culpa cras et neque, ultrices mattis aliquet nec ultrices curabitur. Justo aenean nullam vitae tellus amet nullam, et wisi, gravida odio hac turpis viverra diam nam, dolor ipsum libero. Vulputate leo pede rutrum proin, pede nulla, tellus orci et elit consequuntur sed neque. Nonummy justo egestas. Sociis sem justo sed pede, wisi rutrum risus dolor morbi justo, rutrum a amet vehicula. Elit sed eros id nostra facilisi, taciti et vulputate dolor, velit vel praesent eu, neque duis nunc cursus. Viverra cursus hac urna suspendisse, eros porta at at mauris, ut morbi ut quaerat rutrum eleifend sagittis.</p>
          </div>
        </div>
        </Container>
      </div>
    )
  }
}

export default About;