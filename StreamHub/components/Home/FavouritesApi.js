import axios from 'axios';

const API_BASE_URL = 'http://your-backend-domain/api/';

const FavouritesApi = {
  getAllFavourites: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}favourites/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching favourites:', error);
      throw error;
    }
  },

  addFavourite: async (favouriteData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}favourites/`, favouriteData);
      return response.data;
    } catch (error) {
      console.error('Error adding favourite:', error);
      throw error;
    }
  },

  updateFavourite: async (favouriteId, favouriteData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}favourites/${favouriteId}/`, favouriteData);
      return response.data;
    } catch (error) {
      console.error('Error updating favourite:', error);
      throw error;
    }
  },

  deleteFavourite: async (favouriteId) => {
    try {
      await axios.delete(`${API_BASE_URL}favourites/${favouriteId}/`);
    } catch (error) {
      console.error('Error deleting favourite:', error);
      throw error;
    }
  }
};

export default FavouritesApi;
