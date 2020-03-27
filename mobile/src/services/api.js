import axios from "axios";

const api = axios.create({
  baseURL: "http://177.136.166.247:3333"
});

export default api;