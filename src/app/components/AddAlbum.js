import React, {Component} from 'react';
import {Container, Form, Image} from 'semantic-ui-react';
import vinylAPI from '../API/vinylAPI';

class AddAlbum extends Component{
  constructor(props){
    super(props);
    this.state = {
      artist : '',
      album : '',
      genre : '',
      year : '',
      image : '',
      note : '',
      likes : 0,
      review : []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const name = event.target.name;
    this.setState({[name] : event.target.value});
    console.log(this.state[name]);
  }

  handleSubmit(e){
    e.preventDefault();
    let a = this.state.artist.trim();
    let al = this.state.album.trim();
    let i = this.state.image.trim();
    let g = this.state.genre.trim();
    let y = this.state.year.trim();
    let n = this.state.note.trim();
    let l = this.state.likes;
    let r = this.state.review;
    if(!a || !al || !i || !g || !y || !n){
      console.log('error')
      return;
    }
    vinylAPI.AddAlbum(a,al,i,g,y,n,l,r);
    console.log('submit')
  }

  render(){
    const { value } = this.state
    return (<div>
        <Container textAlign='center'>
          <div className="ui vertical stripe center aligned segment">
            <div className='ui text container'>
              <h1>Add an Album</h1>
              <p><b>Contribute</b> to the database.</p>
              <p><b>Add</b> an album </p>
              <p><b>Help</b> build a better collection</p>
            </div>
          </div>
        </Container>
        <Image src='https://s3-eu-west-1.amazonaws.com/piedpipervinyl/cover1.jpg' fluid style={{height: '350px', margin:'40px 0'}}/>
        <Container textAlign='center'>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input label='Artist' name='artist' placeholder='Artist' onChange={this.handleChange} />
              <Form.Input label='Album' name='album' placeholder='Album' onChange={this.handleChange} />
              <Form.Input label='Genre' name='genre' placeholder='Genre' onChange={this.handleChange} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Year' name='year' placeholder='Year' onChange={this.handleChange} />
              <Form.Input label='Image' name='image' placeholder='Image' onChange={this.handleChange} />
            </Form.Group>
            <Form.TextArea label='Note' name='note' placeholder='Tell us more about the album...' onChange={this.handleChange} />
            <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
          </Form>
        </Container>
        </div>
    )
  }
}

export default AddAlbum;