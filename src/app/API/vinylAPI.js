import _ from 'lodash';
const request = require('request-promise')
const url = "http://localhost:3000/vinyl";


class VinylAPI{
  constructor(){
    this.vinyl = []
  }

  getAll() {
    let options = {
      method: 'GET',
      uri: url
    }
    let _ = this;
    request(options)
      .then(function(response){
        response = JSON.parse(response)
        _.vinyl = response
      })  
    var promise = new Promise ((resolve, reject) => {
      setTimeout(() => resolve(this.vinyl), 1000)
    });
    return promise;
  }

  deleteAlbum(key){
    var options = {
      method: 'DELETE',
      url: url + '/' + key,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      }
    };

    request(options, function (error, response, body) {
      if (error) 
        throw new Error(error);
    });
  }

  AddAlbum(a,al,i,g,y,n,l,r){
    var options = { method: 'POST',
      url: url,
      headers: 
      { 
        'cache-control': 'no-cache',
        'content-type': 'application/json' },
      body: 
      { artist: a,
        album: al,
        image: i,
        genre: g,
        year: y,
        notes: n,
        likes: l,
        reviews: r },
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

  like(key){  
    let index = _.findIndex(this.vinyl, function(vinyl){
      return vinyl.id == key;
    });
    if (index !== -1){
      this.vinyl[index].likes += 1;
      let newUrl = url + '/' + this.vinyl[index].id

      var options = { method: 'PATCH',
        url: newUrl,
        headers: 
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json' },
        body: { likes: this.vinyl[index].likes },
        json: true };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      });

      return true;
    }
    return false;
  }

  addReview(body, id){
    var options = { method: 'PATCH',
      url: 'http://localhost:3000/vinyl/' + id,
      headers: 
      { 
        'cache-control': 'no-cache',
        'content-type': 'application/json' },
      body: 
      { reviews: body },
      json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    });

  }
}

export default (new VinylAPI());
