import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const get = async (path, config = {}) => {
  const response = await instance.get(path, config);
  return response.data;
}

export const post = async (path, data = {}, config = {}) => {
  const response = await instance.post(path, data, config);
  return response.data;
}

export const path = {
  // auth
  login: "auth/login",
  register: "auth/register",
  getUser: "auth/info-user"
  // job
}

export default instance;