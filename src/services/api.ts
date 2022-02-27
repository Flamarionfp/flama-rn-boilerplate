import axios from 'axios';

const ip = '000.000.0.0';
const port = 3333;
const baseURL = `https://${ip}:${port}/`;
const timeout = 30000;

const api = axios.create({
  baseURL,
  timeout,
});

export default api;
