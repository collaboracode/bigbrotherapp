import axios from 'axios';

import { baseUrl } from '../utilities/Statics';

class GuestService {
  getGuests = async () => {
    return axios.get(`${baseUrl}/guests`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  };
  getGuest = async (id) => {
    return axios.get(`${baseUrl}/guests/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  };

  updateGuest = async (id, inputObject) => {
    const guestUpdate = { ...inputObject };
    return axios.patch(`${baseUrl}/guests/${id}`, guestUpdate, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.data)
    .catch(err => console.error(err));
  };

  postGuest = async (inputObject) => {
    const newGuest = { ...inputObject };
    return axios.post(`${baseUrl}/guests`, newGuest, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.data)
    .catch(err => console.error(err));
  };

  deleteGuest = async (id) => {
    return axios.delete(`${baseUrl}/guests/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.status)
    .catch(err => console.error(err));
  }
}

const guestService = new GuestService();
export default guestService;