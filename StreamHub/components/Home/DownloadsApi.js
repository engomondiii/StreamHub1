import axios from 'axios';

const API_BASE_URL = 'http://your-backend-domain/api/';

const DownloadsApi = {
  getAllDownloads: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}downloads/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching downloads:', error);
      throw error;
    }
  },

  addDownload: async (downloadData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}downloads/`, downloadData);
      return response.data;
    } catch (error) {
      console.error('Error adding download:', error);
      throw error;
    }
  }
};

export default DownloadsApi;
