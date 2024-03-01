// MediaFullScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Video from 'react-native-video'; // Import the Video component



// Assuming you have an API endpoint for fetching albums and moving media
import { getAlbums, moveMedia } from './yourApi'; // Replace with your actual API functions

const MediaFullScreen = ({ media, onMerge, onDelete, onMove, onStream }) => {
  const [isMoveModalVisible, setMoveModalVisible] = useState(false);
  const [destinationAlbum, setDestinationAlbum] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch the list of albums from your API
    getAlbums()
      .then(albumsData => setAlbums(albumsData))
      .catch(error => console.error('Error fetching albums:', error));
  }, []); // Fetch albums on component mount

  const openMoveModal = () => {
    setMoveModalVisible(true);
  };

  const handleSelectAlbum = selectedAlbum => {
    // Implement your logic when an album is selected
    // For example, call the onMove function with the selected album
    moveMedia(media.id, selectedAlbum.id) // Assuming moveMedia API is used
      .then(() => {
        // Move successful, you can update UI or perform other actions
        onMove(selectedAlbum);
        setMoveModalVisible(false);
      })
      .catch(error => {
        console.error('Error moving media:', error);
        // Handle error if moving fails
      });
  };

  // Add the following helper function to render nested albums
  const renderNestedAlbums = (nestedAlbums, handleSelectAlbum) => {
    return nestedAlbums.map(album => (
      <TouchableOpacity
        key={album.id}
        style={styles.albumItem}
        onPress={() => handleSelectAlbum(album)}
      >
        <Text style={styles.albumItemText}>{album.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Media Content */}
      <View style={styles.mediaContainer}>
        {/* Use the relevant media properties based on your data structure */}
        {media.type === 'image' && (
          <Image source={{ uri: media.image }} style={styles.mediaImage} />
        )}
        {media.type === 'video' && (
          /* Add your video component based on your data structure */
          <Video source={{ uri: media.video }} style={styles.mediaImage} />
        )}
        {/* You can add other media content here based on your requirements */}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        {/* Close Button */}
        <TouchableOpacity style={styles.bottomButton} onPress={onMerge}>
          <Ionicons name="close" size={24} color="white" />
          <Text style={styles.buttonText}>Merge</Text>
        </TouchableOpacity>

        {/* Move Button */}
        <TouchableOpacity style={styles.bottomButton} onPress={openMoveModal}>
          <Ionicons name="move" size={24} color="white" />
          <Text style={styles.buttonText}>Move</Text>
        </TouchableOpacity>

        {/* Stream Button */}
        <TouchableOpacity style={styles.bottomButton} onPress={onStream}>
          <Ionicons name="play" size={24} color="white" />
          <Text style={styles.buttonText}>Stream</Text>
        </TouchableOpacity>

        {/* Delete Button */}
        <TouchableOpacity style={styles.bottomButton} onPress={onDelete}>
          <Ionicons name="trash" size={24} color="white" />
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      {/* Move Modal */}
      <Modal visible={isMoveModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Destination Album</Text>
            {/* Render nested albums with proper indentation or visual cues */}
            {renderNestedAlbums(albums, handleSelectAlbum)}
            <FlatList
              data={albums}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.albumItem}
                  onPress={() => handleSelectAlbum(item)}
                >
                  <Text style={styles.albumItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.cancelButtonModal}
              onPress={() => setMoveModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  mediaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust as needed
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  bottomButton: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
  albumItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  albumItemText: {
    color: 'black',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cancelButtonModal: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default MediaFullScreen;
