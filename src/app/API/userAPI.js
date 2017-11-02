import _ from 'lodash';
const request = require('request-promise')
const url = "http://localhost:3000/users/";

class UserAPI{
  constructor(){
    this.users = []
  }

  addUser(f,s,g,e,p,ad,ab,c,i){
    var options = {
      method: 'POST',
      url : url,
      headers:{
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body:{
        firstname: f,
        surname: s,
        gender: g,
        email: e,
        password: p,
        address: ad,
        about: ab,
        collection: c,
        profile_image: i
      },
      json: true
    };

    request(options, function(error, response, body){
      if(error) throw new Error(error);
      sessionStorage.setItem('userId', body.id)
    });
  }

}

export default(new UserAPI());