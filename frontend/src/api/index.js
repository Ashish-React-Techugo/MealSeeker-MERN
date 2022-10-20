import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:8000/" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.accesstoken = localStorage.token;
  }
  return req;
});
export default api;