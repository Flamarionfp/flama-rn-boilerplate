import axios from 'axios';

const ip = '192.168.0.1';
const port = 3333;
const timeout = 30000;
const baseURL = `https://${ip}:${port}/`;
const token = 'tokenfromstorage';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

const api = axios.create({
  baseURL,
  timeout,
  headers,
});

export default api;
