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
export const deleteBody = (body,cate) => {
  return axios.delete("/api/1.0/"+cate+"/deleted/"+body.id);
}
export const getAdmins = () => {
  return axios.get("/api/1.0/admin/getAdmin");
}