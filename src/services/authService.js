// client/src/services/authService.js

import axios from 'axios';

const API_URL = '/api/users/';

const register = async (userData) => {
  return axios.post(API_URL + 'register', userData);
};

const login = async (email, password) => {
  return axios.post(API_URL + 'login', { email, password }).then((response) => {
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('userToken');
};

const isAuthenticated = () => {
  const token = localStorage.getItem('userToken');
  return !!token;
};

export default {
  register,
  login,
  logout,
  isAuthenticated,
};
