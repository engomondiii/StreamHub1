import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification'; // Import the notification library

const CreateWatchParty = ({ navigation }) => {
  const [eventName, setEventName] = useState();
  const [startTime, setStartTime] = useState();
  const [privacySettings, setPrivacySettings] = useState();

  const createWatchParty = () => {
    // Implement the logic to create the watch party with the entered details
    // You can send an API request to your backend here
    // After creating the watch party, you can navigate the user to the watch parties list or any other screen

    // Schedule a notification for the watch party
    scheduleNotification(eventName, startTime);
  };

  const inviteFriends = () => {
    // Implement logic to invite friends to join the watch party
    // You can provide options for sending invitations via email, SMS, or in-app notifications
    // Depending on your requirements, you can use third-party services or in-app features for sending invitations
  };

  // Function to schedule a notification for the watch party
  const scheduleNotification = (eventName, startTime) => {
    // Calculate the notification time based on the startTime
    // You can use a library like moment.js to handle date/time calculations
    const notificationTime = new Date(startTime); // Replace with the actual calculation

    PushNotification.localNotificationSchedule({
      message: `Reminder: ${eventName} starts soon!`, // Notification message
      date: notificationTime, // Date and time to show the notification
    });
  };

  return (
    <View style={styles.container}>
      {/* Red text logo at the top left */}
      <Text style={styles.logo}>SH</Text>

      <Text style={styles.screenTitle}>Create Watch Party</Text>
      <TextInput
        placeholder="Event Name"
        value={eventName}
        onChangeText={(text) => setEventName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Start Time"
        value={startTime}
        onChangeText={(text) => setStartTime(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Privacy Settings"
        value={privacySettings}
        onChangeText={(text) => setPrivacySettings(text)}
        style={styles.input}
      />
      {/* Round red button for creating watch party */}
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={createWatchParty}
      >
        <Text style={styles.buttonText}>Create Watch Party</Text>
      </TouchableOpacity>

      {/* Round blue button for inviting friends */}
      <TouchableOpacity
        style={[styles.button, styles.blueButton]}
        onPress={inviteFriends}
      >
        <Text style={styles.buttonText}>Invite Friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light dark background
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 24,
    color: 'black', // Changed text color to black
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: 'red',
  },
  blueButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateWatchParty;
