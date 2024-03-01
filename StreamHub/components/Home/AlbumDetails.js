import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TextInput,
  Switch,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import the function to create a new album
// import { deleteAlbum } from './yourApi'; // Replace with your actual API functions

const AlbumDetails = ({ route }) => {
  const [selectedImageForUpload, setSelectedImageForUpload] = useState(null);
  const { album } = route.params;

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isMergeMoveModalVisible, setMergeMoveModalVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const [isMediaFullScreenVisible, setMediaFullScreenVisible] = useState(false);
  const [selectedMediaForFullScreen, setSelectedMediaForFullScreen] = useState(null);

  const [isStreamModalVisible, setStreamModalVisible] = useState(false);
  const [isStreaming, setStreaming] = useState(false);

  const [defaultMediaItems, setDefaultMediaItems] = useState([
    { id: 1, title: 'Virtual Media 1', icon: <Ionicons name="ios-image" size={50} color="white" /> },
    { id: 2, title: 'Virtual Media 2', icon: <Ionicons name="ios-videocam" size={50} color="white" /> },
    { id: 3, title: 'Virtual Media 3', icon: <MaterialIcons name="music-video" size={50} color="white" /> },
    { id: 4, title: 'Virtual Media 4', icon: <FontAwesome name="file-image-o" size={50} color="white" /> },
  ]);

  const navigation = useNavigation();


  const albumMedia = album.media || [];

  // Function to handle the delete album button
  const handleDeleteAlbum = () => {
    // Show a confirmation prompt to the user
    Alert.alert(
      'Delete Album',
      'Are you sure you want to delete this album?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Implement logic to delete the entire album permanently
            deleteAlbum(album.id)
              .then(() => {
                // If deletion is successful, navigate back or perform any other action
                navigation.goBack(); // Example: Go back to the previous screen
              })
              .catch(error => {
                console.error('Error deleting album:', error);
                // Handle error if deletion fails
              });
          },
        },
      ],
      { cancelable: false }
    );
    setDeleteModalVisible(false);
  };

  // Assuming you have an API endpoint for deleting an album
  const deleteAlbum = async (albumId) => {
    try {
      const response = await fetch(`https://example.com/api/albums/${albumId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // You might need to include additional headers or authentication tokens
        },
      });

      if (response.ok) {
        // Album deleted successfully
        console.log('Album deleted successfully');
      } else {
        // Handle the error, for example, log it to the console
        console.error('Failed to delete album:', response.statusText);
        throw new Error('Failed to delete album');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error deleting album:', error.message);
      throw new Error('Error deleting album');
    }
  };

  const handleMediaItemPress = item => {
    setSelectedMediaForFullScreen(item);
    setMediaFullScreenVisible(true);
  };

  const handleStreamMedia = () => {
    // Implement logic to start streaming
    setStreaming(true);
    // Your streaming logic goes here

    // Once streaming is complete, set the state accordingly
    setStreaming(false);
    setStreamModalVisible(false);
  };

  album.media = albumMedia;

  const handleCreateAlbum = () => {
    const newAlbum = {
      id: Math.random().toString(),
      name: newAlbumDetails.name || 'New Album',
      description: newAlbumDetails.description || '',
      media: [],
    };

    if (isNestedAlbum) {
      // Nested album
      const updatedNestedAlbums = [...nestedAlbums, newAlbum];
      setNestedAlbums(updatedNestedAlbums);
    } else {
      // Direct child
      const updatedMediaItems = [...defaultMediaItems, ...nestedAlbums, newAlbum];
      setNestedAlbums(updatedMediaItems);
    }

    // Close the create modal
    setCreateModalVisible(false);

    // Navigate to the newly created album
    navigation.push('AlbumDetails', { album: newAlbum });
  };

  const [nestedAlbums, setNestedAlbums] = useState(album.media || []);
  const allMediaItems = [...defaultMediaItems, ...nestedAlbums];

  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  const [newAlbumDetails, setNewAlbumDetails] = useState({
    name: '',
    description: '',
    // Add more details as needed
  });

  const handleCreateModalToggle = () => {
    setCreateModalVisible(!isCreateModalVisible);
  };

  const handleAlbumDetailsChange = (key, value) => {
    setNewAlbumDetails({
      ...newAlbumDetails,
      [key]: value,
    });
  };

  // Inside your component function
  const [isNestedAlbum, setIsNestedAlbum] = useState(false);

  const toggleAlbumLocation = () => {
    setIsNestedAlbum(!isNestedAlbum);
  };

  // Function to handle the move of media to a different album
  const moveMedia = async (mediaId, destinationAlbumId) => {
    try {
      // Make an API request to move the media to the destination album
      const response = await fetch(`https://example.com/api/moveMedia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include additional headers or authentication tokens as needed
        },
        body: JSON.stringify({
          mediaId: mediaId,
          destinationAlbumId: destinationAlbumId,
        }),
      });

      if (response.ok) {
        // Media moved successfully
        console.log('Media moved successfully');
      } else {
        // Handle the error, log it to the console or perform other actions
        console.error('Failed to move media:', response.statusText);
        throw new Error('Failed to move media');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error moving media:', error.message);
      throw new Error('Error moving media');
    }
  };

  // Function to handle the selection of the destination album
  const handleSelectAlbum = selectedAlbum => {
    // Implement your logic when an album is selected
    // For example, call the onMove function with the selected album
    moveMedia(selectedMedia.id, selectedAlbum.id) // Assuming moveMedia API is used
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

  return (
    <View style={styles.container}>
      {/* Logo and Album Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>SH</Text>
        </View>
        <View style={styles.albumHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableOpacity>
          <Text style={styles.albumName}>{album.name}</Text>
        </View>
      </View>

      <FlatList
        style={styles.albumContent}
        data={allMediaItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.rowItem}
            onPress={() => handleMediaItemPress(item)}
          >
            {/* Use the icon directly in the component */}
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.rowItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />

      {/* Conditionally render the bottom buttons based on whether a media item is selected for fullscreen */}
      {!selectedMediaForFullScreen && (
        <View style={styles.bottomButtonsContainer}>
          {/* Stream Button */}
          <TouchableOpacity
            style={[styles.bottomButton, styles.streamButton]}
            onPress={() => setStreamModalVisible(true)}
          >
            <Text style={styles.streamButtonText}>Stream</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomButton, styles.createButton]}
            onPress={handleCreateModalToggle}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>

          {/* Delete Album Button */}
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => setDeleteModalVisible(true)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Delete Album Modal */}
      <Modal visible={isDeleteModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delete Album?</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this album?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButtonModal}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButtonModal}
                onPress={handleDeleteAlbum}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Stream Modal */}
      <Modal visible={isStreamModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Stream Content</Text>
            {isStreaming ? (
              <Text style={styles.modalText}>Streaming in progress...</Text>
            ) : (
              <Text style={styles.modalText}>Start streaming from the beginning?</Text>
            )}
            <View style={styles.modalButtons}>
              {!isStreaming && (
                <TouchableOpacity
                  style={[styles.actionButtonModal, { backgroundColor: 'blue' }]}
                  onPress={() => handleStreamMedia()}
                >
                  <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.cancelButtonModal}
                onPress={() => setStreamModalVisible(false)}
              >
                <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Create Album Modal */}
      <Modal visible={isCreateModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Album</Text>
            {/* Album Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Album Name"
              onChangeText={(text) => handleAlbumDetailsChange('name', text)}
            />
            {/* Description Input */}
            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={(text) => handleAlbumDetailsChange('description', text)}
            />
            {/* Add more input fields as needed */}
            <View style={styles.albumLocationToggle}>
              <Text style={styles.albumLocationToggleText}>Album Location:</Text>
              <Switch
                value={isNestedAlbum}
                onValueChange={toggleAlbumLocation}
              />
              <Text style={styles.albumLocationToggleText}>
                {isNestedAlbum ? 'Nested' : 'Direct Child'}
              </Text>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.actionButtonModal, { backgroundColor: 'blue' }]}
                onPress={handleCreateAlbum}
              >
                <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButtonModal}
                onPress={handleCreateModalToggle}
              >
                <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Conditionally render the fullscreen modal */}
      {selectedMediaForFullScreen && (
        <MediaFullScreen
          media={selectedMediaForFullScreen}
          onClose={() => setMediaFullScreenVisible(false)}
          onDelete={() => handleDeleteAlbum()} // Delete the entire album
          onMove={() => handleMoveMedia()} // Implement your move logic here
          onStream={() => handleStreamMedia()} // Implement your streaming logic here
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 10,
  },
  
  backButton: {
    padding: 5,
    marginBottom: 5, // Adjusted marginBottom to lower the back arrow

  },
  albumName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10, // Adjust this value to control the space between the back button and album name
  },
  albumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 5, // Adjust this value to control the space between logo and album header
  },

  deleteButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'red',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  albumContent: {
    flex: 1,
    padding: 20,
    // Implement styles for the grid view here
    // You can use Flexbox or any other layout method
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
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButtonModal: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  cancelButtonModal: {
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    marginRight: 10, // Corrected property name
    borderWidth: 3,
    borderColor: 'darkgrey',
  },
  
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: 'blue',
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  gridItem: {
    width: '48%',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    elevation: 3,
  },

  gridItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  gridItemTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  actionButtonModal: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },

  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  albumName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  streamButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  streamButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  actionButton: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
  },

  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  bottomButton: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },

  streamButton: {
    backgroundColor: 'blue',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  rowItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
  },
  rowItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  rowItemTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  logoContainer: {
    marginBottom: 5, // Adjusted margin bottom as needed
  },


  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },


  // Add these styles at the end of your styles constant
albumLocationToggle: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 10,
},
albumLocationToggleText: {
  color: 'white',
  marginLeft: 5,
},


  
  // Rest of the styles remain unchanged...
});

export default AlbumDetails;
