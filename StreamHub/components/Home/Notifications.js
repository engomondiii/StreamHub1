import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NotificationsApi from './NotificationsApi'; // Import the NotificationsApi

const Notifications = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications when the component mounts
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await NotificationsApi.getNotifications();
      setNotifications(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      await NotificationsApi.markNotificationAsRead(notificationId);
      // After marking the notification as read, fetch notifications again to update the UI
      fetchNotifications();
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* Logo */}
        <Text style={styles.logo}>SH</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Notifications</Text>
        {/* Display notifications */}
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={styles.notificationItem}
            onPress={() => markNotificationAsRead(notification.id)}
          >
            <Text style={styles.notificationText}>{notification.title}</Text>
            <Text style={styles.notificationText}>{notification.body}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 16,
    color: 'white',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#777',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default Notifications;
