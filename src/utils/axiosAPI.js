import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const get = async (path, config = {}) => {
  const response = await instance.get(path, config);
  return response.data;
}

export const post = async (path, config = {}) => {
  const response = await instance.post(path, config);
  return response.data;
}

export default instance;