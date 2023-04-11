import axios from 'axios';

const getData = axios.create({
  method: 'GET',
  baseURL: 'http://localhost:3000',
});

export { getData };
