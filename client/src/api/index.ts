import axios from "axios";

export { Endpoints } from "./endpoints";

export default axios.create({
  xsrfHeaderName: "X-CSRFTOKEN",
  xsrfCookieName: "csrftoken",
  responseType: "json",
  withCredentials: true,
  baseURL: "/api/",
});
