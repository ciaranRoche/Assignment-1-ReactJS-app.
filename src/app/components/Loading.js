import React from 'react';
import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react'

class Loading extends React.Component{
  render(){
    return(
    <Segment>
    <Dimmer active>
      <Loader>Loading...</Loader>
    </Dimmer>

    <Image fluid src='https://s3-eu-west-1.amazonaws.com/piedpipervinyl/vinyl.jpg' />
  </Segment>
    )
  }
}

export default Loading;