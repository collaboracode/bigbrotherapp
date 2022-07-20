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
}

const guestService = new GuestService();
export default guestService;