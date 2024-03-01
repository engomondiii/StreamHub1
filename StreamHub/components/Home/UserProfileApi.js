import axios from 'axios';

const BASE_URL = 'http://your-backend-url/api/user/profile/';

const UserProfileApi = {
  getUserProfile: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  updateUserProfile: async (userData) => {
    try {
      const response = await axios.put(BASE_URL, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },

  deleteUserProfile: async () => {
    try {
      const response = await axios.delete(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error deleting user profile:', error);
      throw error;
    }
  },
};

export default UserProfileApi;
