import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_ACCESS_KEY;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Client-ID ${key}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const Axios = {
  get: (url: string, request?: any) => baseInstance.get(url, request),
  delete: (url: string, request?: any) => baseInstance.delete(url, request),
  post: (url: string, data?: any, config?: any) => baseInstance.post(url, data, config),
};

export default Axios;
