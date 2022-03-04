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
export const getSliders = () => {
  return axios.get("/api/1.0/slider");
}
export const deleteSlider = (id) => {
  return axios.delete(`/api/1.0/slider/${id}`);
}
export const updateSlider = (id,body) => {
  return axios.put(`/api/1.0/slider/${id}`,body);
}
export const createSlider = (body) => {
  return axios.post(`/api/1.0/slider/create`,body);
}
export const getPageTechno = (page = 0, size = 3) => {
  return axios.get(`/api/1.0/techno/page?page=${page}&size=${size}`);
}