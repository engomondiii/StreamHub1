import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { GiftedChat } from 'react-native-gifted-chat';

const JoinWatchParty = ({ route, navigation }) => {
  const { watchParty } = route.params;
  const [messages, setMessages] = useState([]);
  const [privacySettings, setPrivacySettings] = useState('public'); // Default to public

  // Function to handle new chat messages
  const handleSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  // Function to leave the watch party
  const leaveWatchParty = () => {
    // Implement logic to leave the watch party here
    // This could include updating the server or local state
    // Then, navigate to the WatchParties screen or HomeScreen
    navigation.navigate('WatchParties'); // Replace with the appropriate screen name
  };

  useEffect(() => {
    // Fetch chat messages and privacy settings from your backend or storage
    // Update the messages state and privacySettings state accordingly
    // Example:
    const initialMessages = [
      {
        _id: 1,
        text: 'Welcome to the Watch Party!',
        createdAt: new Date(),
        user: {
          _id: 2, // Replace with the actual user ID
          name: 'Host', // Replace with the host's name
        },
      },
    ];
    setMessages(initialMessages);

    // Set the initial privacy setting (public, private, invitation-only)
    // Example:
    // setPrivacySettings(watchParty.privacySettings); // Uncomment this line if you have privacy settings in your watchParty data
  }, []);

  return (
    <View style={styles.container}>
      {/* Red text logo at the top left */}
      <Text style={styles.logo}>SH</Text>

      {/* Video Player Component */}
      <Video
        source={{ uri: watchParty.videoURL }} // Replace with your video source
        style={styles.videoPlayer}
        paused={false} // Set to false for synchronized playback
      />

      {/* Chat Component */}
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{ _id: 1 }} // You can replace with the user's ID
      />

      {/* Leave Watch Party Button */}
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={leaveWatchParty}
      >
        <Text style={styles.buttonText}>Leave Watch Party</Text>
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
  videoPlayer: {
    flex: 1,
    aspectRatio: 16 / 9, // Adjust as needed for your video aspect ratio
    marginBottom: 20,
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
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JoinWatchParty;
