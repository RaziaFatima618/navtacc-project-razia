import axios from 'axios';



const API_URL = 'http://localhost:5000/api/auth';



export const register = async (userData) => {

  return await axios.post(`${API_URL}/register`, userData);

};



export const login = async (userData) => {

  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data.token) {

    localStorage.setItem('token', response.data.token);

  }

  return response.data;

};



export const getProfile = async () => {

  const token = localStorage.getItem('token');

  return await axios.get(`${API_URL}/profile`, {

    headers: {

      Authorization: `Bearer ${token}`,

    },

  });

};