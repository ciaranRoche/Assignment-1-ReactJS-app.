import _ from 'lodash';
const request = require('request-promise')
const URL = "http://localhost:3000/users/";

class UserAPI{
  constructor(){
    this.users = []
  }

  addUser(f,s,g,e,p,ad,ab,c,i){
    var options = {
      method: 'POST',
      url : URL,
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

    let res;
    request(options, function(error, response, body){
      if(error) throw new Error(error);
      sessionStorage.setItem('userId', body.id);
      res = response
    });

    var promise = new Promise ((resolve, reject) => {
      setTimeout(() => resolve(res.statusCode), 1000)
    });
    return promise;
  }

  addCollection(user, vinyl){
    var options = { method: 'PATCH',
    url: URL + user,
    headers: 
    { 'postman-token': 'c0777f44-572d-7e52-9c75-851c819ccb95',
      'cache-control': 'no-cache',
      'content-type': 'application/json' },
    body: { collection: vinyl },
    json: true };

  let res;
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res = response;
  });

  var promise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve(res.statusCode), 1000)
  });
  return promise;
}

}

export default(new UserAPI());