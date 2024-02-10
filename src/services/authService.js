import axios from 'axios';

const API_URL = '/api/users/';

// Register a new user
const register = (userData) => {
  return axios.post(API_URL + 'register', userData);
};

// Log in a user
const login = (email, password) => {
  return axios.post(API_URL + 'login', { email, password })
    .then((response) => {
      if (response.data.token) {
        // Save the token in local storage
        localStorage.setItem('userToken', response.data.token);
      }
      return response.data;
    });
};

// Log out the current user
const logout = () => {
  localStorage.removeItem('userToken');
};

// Check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('userToken');
  return !!token; // Convert token presence to boolean
};

export default {
  register,
  login,
  logout,
  isAuthenticated,
};
