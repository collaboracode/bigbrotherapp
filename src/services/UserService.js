import axios from 'axios';

import { baseUrl } from '../utilities/Statics';

class UserService {

  constructor() {
    let service = axios.create({
      baseURL: baseUrl,
      withCredentials: true
    });
    this.service = service;
  }

  getUsers = async () => {
    return this.service.get(`/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  };
  getUser = async (id) => {
    return axios.get(`/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  };
  login = async (inputParams) => {
    const loginParams = { ...inputParams }
    // console.log(loginParams)
    return this.service.post(`/login`, loginParams, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res)
      // .then(res => res.data)
      .catch(err => console.error(err));
  };
  
  logout = async () => {
    return this.service.post(`/logout`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.status)
      .catch(err => console.error(err));
  };

  loggedIn = async () => {
    return this.service.get(`/logged_in`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res)
      .catch(err => console.error(err));
  };
}

const userService = new UserService();
export default userService;