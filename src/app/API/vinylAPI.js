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

  getAlbum(key){
    let result = null;
    let index = _.findIndex(this.vinyl, function(vinyl){
      return vinyl.id == key;
    });
    if (index !== -1){
      result = this.vinyl[index];
    }
    return result;
  }

  AddAlbum(a,al,i,g,y,n,l,r){
    console.log('add album',a,al,i,g,y,n,l,r);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          this.vinyl.push({id:this.vinyl.length ,artist:a, album:al, image:i, genre:g, year:y, notes:n, likes:l, reviews:r})
          console.log(this.vinyl)
          resolve(true)
      }, 1000)
    })
    return promise;
  }

  like(key){
    let index = _.findIndex(this.vinyl, function(vinyl){
      return vinyl.id == key;
    });
    if (index !== -1){
      this.vinyl[index].likes += 1;
      let newUrl = url + '/' + this.vinyl[index].id
      var request = require("request");

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
