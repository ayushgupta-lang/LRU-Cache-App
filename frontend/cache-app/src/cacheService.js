import axios from 'axios';

const BASE_URL = 'http://localhost:8090'; 

const CacheService = {
  setKeyValue: (key, value) => {
    return axios.post(`${BASE_URL}/set`, { key, value });
  },

  getKeyValue: (key) => {
    return axios.get(`${BASE_URL}/get?key=${key}`);
  },
};
export default CacheService;
