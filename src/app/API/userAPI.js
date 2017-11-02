import _ from 'lodash';
const request = require('request-promise')
const url = "http://localhost:3000/users/";

class UserAPI{
  constructor(){
    this.users = []
  }
}

export default(new UserAPI());