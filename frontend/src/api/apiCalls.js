import axios from 'axios';

export const login = creds => {
    return axios.post('/api/1.0/admin/auth',creds);
  };

export const createLogin = created => {
  return axios.post('/api/1.0/news/create',created);
}