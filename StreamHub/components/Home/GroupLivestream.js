import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const GroupLivestream = () => {
  const [livestreams, setLivestreams] = useState([]);
  const [selectedLivestream, setSelectedLivestream] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [isStreaming, setStreaming] = useState(false);

  // Simulated livestream data (you should fetch this from a server)
  const initialLivestreams = [
    { id: 1, title: 'Livestream 1', streamer: 'User1', viewers: 100, category: 'Music' },
    { id: 2, title: 'Livestream 2', streamer: 'User2', viewers: 50, category: 'Gaming' },
    // Add more livestreams as needed
  ];

  useEffect(() => {
    // Simulate fetching initial livestream data
    setLivestreams(initialLivestreams);
  }, []);

  const joinLivestream = (livestream) => {
    setSelectedLivestream(livestream);
    // Implement logic to join the selected livestream for viewing.
    // You'll need to integrate a video streaming library for this.
  };

  const startStreaming = () => {
    setStreaming(true);
    // Implement logic to start streaming your own livestream.
  };

  const stopStreaming = () => {
    setStreaming(false);
    // Implement logic to stop your own livestream.
  };

  const handleChatSend = (message) => {
    // Implement logic to send chat messages to the selected livestream.
    const newMessage = {
      text: message,
      user: 'User1', // Replace with the current user's name
      timestamp: new Date(),
    };
    setChatMessages([...chatMessages, newMessage]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SH</Text> {/* Red text logo */}
      {selectedLivestream ? (
        // Display the selected livestream
        <View>
          {/* Video streaming component */}
          {/* Chat interface */}
          {/* Viewer interaction buttons (like, share, etc.) */}
        </View>
      ) : (
        // Display a list of ongoing livestreams
        <FlatList
          data={livestreams}
          keyExtractor={(livestream) => livestream.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => joinLivestream(item)}
              style={styles.livestreamItemRed} 
            >
              <Text>{item.title}</Text>
              <Text>By: {item.streamer}</Text>
              <Text>Viewers: {item.viewers}</Text>
              <Text>Category: {item.category}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {isStreaming ? (
        // Display your own streaming interface
        <View>
          {/* Video streaming component */}
          {/* Chat interface */}
          {/* Stop streaming button */}
        </View>
      ) : (
        // Display the button to start your own livestream
        <TouchableOpacity
          onPress={startStreaming}
          style={styles.startStreamingButtonRed} 
        >
          <Text style={styles.buttonTextWhite}>Start Your Livestream</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', // Light dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  livestreamItemRed: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'red',
    borderRadius: 10, // Round corners
  },
  startStreamingButtonRed: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10, // Round corners
  },
  buttonTextWhite: {
    color: 'white',
    textAlign: 'center',
  },
});

export default GroupLivestream;
