import axios from 'axios';

const API_BASE_URL = 'http://your-backend-domain/api/';

const GetLiveApi = {
  getAllStreams: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}streams/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching streams:', error);
      throw error;
    }
  },

  getStreamById: async (streamId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}streams/${streamId}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching stream:', error);
      throw error;
    }
  },

  createStream: async (streamData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}streams/`, streamData);
      return response.data;
    } catch (error) {
      console.error('Error creating stream:', error);
      throw error;
    }
  },

  updateStream: async (streamId, streamData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}streams/${streamId}/`, streamData);
      return response.data;
    } catch (error) {
      console.error('Error updating stream:', error);
      throw error;
    }
  },

  deleteStream: async (streamId) => {
    try {
      await axios.delete(`${API_BASE_URL}streams/${streamId}/`);
    } catch (error) {
      console.error('Error deleting stream:', error);
      throw error;
    }
  },

  getAllChatMessages: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}chat_messages/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      throw error;
    }
  },

  getChatMessageById: async (chatMessageId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}chat_messages/${chatMessageId}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching chat message:', error);
      throw error;
    }
  },

  createChatMessage: async (chatMessageData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}chat_messages/`, chatMessageData);
      return response.data;
    } catch (error) {
      console.error('Error creating chat message:', error);
      throw error;
    }
  },

  updateChatMessage: async (chatMessageId, chatMessageData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}chat_messages/${chatMessageId}/`, chatMessageData);
      return response.data;
    } catch (error) {
      console.error('Error updating chat message:', error);
      throw error;
    }
  },

  deleteChatMessage: async (chatMessageId) => {
    try {
      await axios.delete(`${API_BASE_URL}chat_messages/${chatMessageId}/`);
    } catch (error) {
      console.error('Error deleting chat message:', error);
      throw error;
    }
  }
};

export default GetLiveApi;
