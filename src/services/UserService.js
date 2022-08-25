import axios from 'axios';

import { baseUrl } from '../utilities/Statics';

class UserService {
  getUsers = async () => {
    return axios.get(`${baseUrl}/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  };
  getUser = async (id) => {
    return axios.get(`${baseUrl}/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  };
}

const userService = new UserService();
export default userService;