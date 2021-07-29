import axios from 'axios';

const token = localStorage.getItem('token');
export const instance = () => {
  const data = axios.create({
    baseURL: 'http://localhost:8001/api/v1/',
    headers: {
      authorization: token,
    },
  });

  return data;
};
