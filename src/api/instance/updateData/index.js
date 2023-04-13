import axios from 'axios';

const update = axios.create({
  baseURL: 'http://localhost:3000',
});

const fullUpdate = axios.create({
  method: 'PUT',
  baseURL: 'http://localhost:3000',
});

export { update, fullUpdate };
