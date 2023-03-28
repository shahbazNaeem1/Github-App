import axios from 'axios';
import {GITHUB_API} from '../constants/URL';

const request = axios.create({
  baseURL: GITHUB_API,
});

request.interceptors.request.use(
  async config => {
    config.headers['Accept'] = 'application/vnd.github.v3+json';

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
