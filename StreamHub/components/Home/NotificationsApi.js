import axios from 'axios';

const BASE_URL = 'http://your-backend-url/api/notifications/';

const NotificationsApi = {
  getNotifications: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  },

  markNotificationAsRead: async (notificationId) => {
    try {
      const response = await axios.post(`${BASE_URL}${notificationId}/mark-as-read/`);
      return response.data;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  },
};

export default NotificationsApi;
