import axios from "axios";

const api = axios.create({
  xsrfHeaderName: "X-CSRFTOKEN",
  xsrfCookieName: "csrftoken",
  responseType: "json",
  withCredentials: true,
  baseURL: "api/",
});

export default api;
