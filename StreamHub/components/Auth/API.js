import axios from 'axios';

const BASE_URL = 'http://your-backend-url/api/auth'; // Replace 'your-backend-url' with your actual backend URL

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle user login
export const loginUser = async (email_or_username, password) => {
  try {
    const response = await API.post('/login/', {
      email_or_username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await API.post('/register/', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default API;
