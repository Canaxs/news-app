import axios from 'axios';

export const login = creds => {
    return axios.post('/api/1.0/admin/auth',creds);
  };

export const createLogin = (news,body) => {
  return axios.post('/api/1.0/'+news+'/created',body);
};
export const getBody = (cate) => {
  return axios.get(`/api/1.0/${cate}/get`);
};