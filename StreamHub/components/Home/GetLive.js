import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import GetLiveApi from './GetLiveApi'; // Import the GetLiveApi

const GetLive = () => {
  const [isStreaming, setStreaming] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [audioPermission, setAudioPermission] = useState(null);

  const [streamTitle, setStreamTitle] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [audioRecording, setAudioRecording] = useState(null);

  useEffect(() => {
    // Request camera permission
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();

    // Request audio permission
    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      setAudioPermission(status === 'granted');
    })();
  }, []);

  const startStreaming = async () => {
    if (cameraPermission !== 'granted' || audioPermission !== 'granted') {
      console.log('Permissions not granted');
      return;
    }

    // Call the createStream method from GetLiveApi
    try {
      const newStream = await GetLiveApi.createStream({ stream_title: streamTitle });
      console.log('New stream created:', newStream);
    } catch (error) {
      console.error('Error creating stream:', error);
    }

    // Initialize camera
    const camera = new Camera();
    await camera.initializeAsync();

    // Start audio recording
    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);

    // Start recording
    await recording.startAsync();

    setStreaming(true);
    setAudioRecording(recording);
  };

  const stopStreaming = async () => {
    if (audioRecording) {
      await audioRecording.stopAndUnloadAsync();
    }

    setStreaming(false);
    setAudioRecording(null);
  };

  const handleChatSend = async (message) => {
    // Call the createChatMessage method from GetLiveApi
    try {
      const newMessage = await GetLiveApi.createChatMessage({
        stream: 1, // Assuming the stream ID is 1 for demonstration purposes
        user: 1, // Assuming the user ID is 1 for demonstration purposes
        message: message,
      });
      console.log('New chat message created:', newMessage);
    } catch (error) {
      console.error('Error creating chat message:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>SH</Text>
      </View>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.front}
        useCamera2Api
      />
      <View style={styles.overlay}>
        {isStreaming ? (
          <TouchableOpacity style={styles.stopButton} onPress={stopStreaming}>
            <Text style={styles.buttonText}>Stop Streaming</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Stream Title"
              onChangeText={setStreamTitle}
            />
            <TouchableOpacity style={styles.goLiveButton} onPress={startStreaming}>
              <Text style={styles.buttonText}>Go Live</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.chatContainer}>
        {/* Implement a chat interface here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', // Dark background
  },
  header: {
    padding: 20,
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: 24,
    color: 'red',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    paddingLeft: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  goLiveButton: {
    flex: 2,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  stopButton: {
    flex: 2,
    backgroundColor: 'blue', // Blue color for the stop button
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default GetLive;
