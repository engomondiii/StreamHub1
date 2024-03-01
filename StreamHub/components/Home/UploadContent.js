import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, ProgressBarAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import 'react-native-gesture-handler';

const UploadContent = () => {
  const [mediaType, setMediaType] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [privacy, setPrivacy] = useState('public');
  const [tags, setTags] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleSelectMedia = (type) => {
    // Implement logic to select media from gallery or capture new media
    // Set mediaType and mediaPreview accordingly
  };

  const handleUpload = () => {
    // Implement the upload logic here, e.g., sending the data to a server
    setIsUploading(true);

    // Simulating upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => prevProgress + 10);
      if (uploadProgress === 100) {
        clearInterval(interval);
        setIsUploadComplete(true);
      }
    }, 1000);
  };

  const handleCancelUpload = () => {
    // Implement the logic to cancel the upload
    setIsUploading(false);
    setUploadProgress(0);
  };

  const handleCreateNewAlbum = () => {
    // Implement logic to create a new album
  };

  const handleAlbumSelection = (album) => {
    // Implement logic to select an existing album
  };

  const handleAlbumManagement = () => {
    // Implement logic for album management
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>SH</Text> 
      <TouchableOpacity onPress={() => handleSelectMedia('photo')} style={styles.buttonRed}>
        <Text style={styles.buttonTextWhite}>Select from Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectMedia('video')} style={styles.buttonBlue}>
        <Text style={styles.buttonTextWhite}>Capture Photos / Record Videos</Text>
      </TouchableOpacity>

      {mediaPreview && <Image source={{ uri: mediaPreview }} style={styles.mediaPreview} />}

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Text style={styles.text}>Privacy Settings:</Text>
      <Picker selectedValue={privacy} onValueChange={(itemValue) => setPrivacy(itemValue)}>
        <Picker.Item label="Public" value="public" />
        <Picker.Item label="Private" value="private" />
        <Picker.Item label="Subscribers Only" value="subscribers" />
      </Picker>

      <TextInput
        placeholder="Tags (comma-separated)"
        value={tags}
        onChangeText={(text) => setTags(text)}
      />

      {isUploading && <ProgressBarAndroid styleAttr="Horizontal" progress={uploadProgress / 100} />}
      {isUploadComplete && <Text style={styles.text}>Upload Complete!</Text>}

      <TouchableOpacity onPress={handleUpload} style={styles.buttonRed}>
        <Text style={styles.buttonTextWhite}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancelUpload} style={styles.buttonBlue}>
        <Text style={styles.buttonTextWhite}>Cancel Upload</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Album Selection:</Text>
      <Picker selectedValue={selectedAlbum} onValueChange={handleAlbumSelection}>
        {/* Implement logic to populate album options */}
      </Picker>
      <TouchableOpacity onPress={handleCreateNewAlbum} style={styles.buttonRed}>
        <Text style={styles.buttonTextWhite}>Create New Album</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAlbumManagement} style={styles.buttonBlue}>
        <Text style={styles.buttonTextWhite}>Manage Albums</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#222', // Dark background
  },
  logo: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonRed: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  buttonBlue: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  buttonTextWhite: {
    color: 'white',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 10,
  },
  mediaPreview: {
    width: 200,
    height: 200,
  },
});

export default UploadContent;
