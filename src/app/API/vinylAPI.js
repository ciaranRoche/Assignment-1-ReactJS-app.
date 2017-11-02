import _ from 'lodash';
const https = require("https");
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
      
      console.log(body);
    });
  }

  AddAlbum(a,al,i,g,y,n,l,r){
    console.log('add album',a,al,i,g,y,n,l,r);
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

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    });
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
}

export default (new VinylAPI());
