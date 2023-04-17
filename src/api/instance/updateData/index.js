import axios from 'axios';

const update = axios.create({
  baseURL: 'http://localhost:3000',
});

export { update };
