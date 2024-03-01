import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  ScrollView, // Import ScrollView
  ImageBackground,
  Platform,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; // Import necessary icons
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Import Expo's ImagePicker
import * as Progress from 'react-native-progress';





const DigitalAlbum = () => {
  const navigation = useNavigation();

  // Sample precreated albums with built-in Expo icons
  const albumList = [
    { id: 1, name: 'Family Moments', icon: 'ios-people', color: '#3498db' }, // Light blue for family
    { id: 2, name: 'Travel Adventures', icon: 'ios-airplane', color: '#2ecc71' }, // Green for travel
    { id: 3, name: 'Pets and Pals', icon: 'ios-paw', color: '#e74c3c' }, // Red for pets
    { id: 4, name: 'Special Occasions', icon: 'ios-ribbon', color: '#9b59b6' }, // Purple for special occasions
    { id: 5, name: 'Fitness Journey', icon: 'ios-fitness', color: '#f39c12' }, // Orange for fitness
    { id: 6, name: 'Foodie Delights', icon: 'ios-restaurant', color: '#e67e22' }, // Dark orange for food
    { id: 7, name: 'Nature Escapes', icon: 'ios-leaf', color: '#27ae60' }, // Dark green for nature
    { id: 8, name: 'Art and Creativity', icon: 'ios-color-palette', color: '#1abc9c' }, // Turquoise for art
    { id: 9, name: 'Throwback Classics', icon: 'ios-albums', color: '#34495e' }, // Dark blue-gray for classics
    { id: 10, name: 'Random Fun', icon: 'ios-flask', color: '#c0392b' }, // Dark red for random fun
  ];
  

  const [albums, setAlbums] = useState(albumList); // Use the sample albums

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumName, setAlbumName] = useState('');
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);

  const [customAlbumCovers, setCustomAlbumCovers] = useState({});
  const [selectedCustomAlbumId, setSelectedCustomAlbumId] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null); // To store the selected image for album cover


  const [newAlbumName, setNewAlbumName] = useState('');
  const [newAlbumCover, setNewAlbumCover] = useState(null);
  const [isNewAlbumModalVisible, setNewAlbumModalVisible] = useState(false);
  


// Inside your component function
const [isUploadModalVisible, setUploadModalVisible] = useState(false);
const [selectedUploadAlbum, setSelectedUploadAlbum] = useState(null);




const [selectedMediaFiles, setSelectedMediaFiles] = useState([]);
const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);


// Inside your component function
const [uploadProgress, setUploadProgress] = useState(0);
const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);













  const handleCreateAlbum = () => {
    const newAlbum = {
      id: albums.length + 1,
      name: newAlbumName,
      icon: newAlbumCover ? 'custom' : null,
      description: 'My Album',
      media: [],
      coverImage: selectedImage, // Use the selected image as the cover
    };
  
    setAlbums([...albums, newAlbum]);
    setNewAlbumName('');
    setNewAlbumCover(null);
    setNewAlbumModalVisible(false);
  };
  

  
  // Function to handle album press and navigate to AlbumDetails
  const handleAlbumPress = (album) => {
    navigation.navigate('AlbumDetails', { album }); // Navigate to AlbumDetails screen with the selected album
  };

  // Function to handle customizing the album cover
  const handleCustomizeCover = (albumId) => {
    setSelectedCustomAlbumId(albumId);
  };

  // Function to open the image picker for setting custom album cover
  const handleUpload = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('Permission to access photos is required!');
        return;
      }
  
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (pickerResult.cancelled === true) {
        return;
      }
  
      // Add the selected media file to the state
      setSelectedMediaFiles([...selectedMediaFiles, pickerResult.uri]);
    } catch (err) {
      console.error('Error picking an image: ', err);
    }
  };
  


  

  // Function to handle setting a custom album cover
  const handleSetCustomCover = () => {
    if (selectedCustomAlbumId) {
      const updatedAlbums = albums.map((album) => {
        if (album.id === selectedCustomAlbumId) {
          return {
            ...album,
            icon: null, // Remove the inbuilt icon
            coverImage: selectedImage, // Set the selected image as the cover image
          };
        }
        return album;
      });
      setAlbums(updatedAlbums);
      setSelectedCustomAlbumId(null);
      setSelectedImage(null); // Clear the selected image
    }
  };

 // Function to open the image picker for setting custom album cover
 const openImagePicker = async (setImage) => {
  try {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access photos is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setImage(pickerResult.uri); // Set the selected image URI
    setSelectedImage(pickerResult.uri); // Update the selected image state
  } catch (err) {
    console.error('Error picking an image: ', err);
  }
};



  
const renderAlbumItem = ({ item }) => (
  <TouchableOpacity
    style={[styles.albumItem, { backgroundColor: item.color, margin: 5 }]} // Added margin
    onPress={() => handleAlbumPress(item)}
  >
    <ImageBackground
      source={item.coverImage ? { uri: item.coverImage } : {}}
      style={styles.albumCover}
      imageStyle={{ borderRadius: 10 }}
    >
      {item.icon && !item.coverImage && (
        <Ionicons
          name={item.icon}
          size={64}
          color={item.color}
          style={styles.albumIcon}
        />
      )}
      <Text style={styles.albumName}>{item.name}</Text>
    </ImageBackground>

    <TouchableOpacity
      style={styles.editButton}
      onPress={() => handleCustomizeCover(item.id)}
    >
      <FontAwesome name="edit" size={20} color="white" />
    </TouchableOpacity>
  </TouchableOpacity>
);



  

const initiateUpload = () => {
  // Implement your upload logic using the selected album and media files

  // Show progress indicator
  setUploadModalVisible(false); // Hide the upload modal
  setSuccessModalVisible(false); // Hide success modal
  setUploadProgress(0); // Reset progress

  // Simulate upload progress (remove this in your actual implementation)
  const interval = setInterval(() => {
    setUploadProgress((prevProgress) => prevProgress + 0.1);
  }, 1000);

  // Simulate completion after 5 seconds (adjust the time as needed)
  setTimeout(() => {
    clearInterval(interval);
    setUploadProgress(1);
    setSuccessModalVisible(true); // Show success modal
  }, 5000);
};

  


// Inside your DigitalAlbum component

// Function to handle destination album selection
const handleDestinationAlbumSelection = (album) => {
  if (album.media && album.media.length > 0) {
    // Album has nested albums, show sub-modal
    // Implement the logic to display a sub-modal for nested album selection
  } else {
    // Album does not have nested albums, proceed with upload
    setSelectedUploadAlbum(album);
    setUploadModalVisible(false);
    
    // Call the handleUpload function to initiate the upload process
    handleUpload();
  }
};

  
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>SH</Text>
      </View>

      {/* Create Album Section */}
      <View style={styles.createAlbumSection}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Search for album"
            onChangeText={(text) => setAlbumName(text)}
            value={albumName}
          />
        </View>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setNewAlbumModalVisible(true)}
        >
          <Text style={styles.createButtonText}>Create Album</Text>
        </TouchableOpacity>

      </View>

      {/* List of Albums */}
      <FlatList
        style={styles.albumList}
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAlbumItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />

      {/* Buttons Section */}
      <View style={styles.buttonsSection}>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => setUploadModalVisible(true)}
        >
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>

        <TouchableOpacity
          style={styles.streamButton}
          onPress={() => alert('Stream button pressed')}
        >
          <Text style={styles.buttonText}>Stream</Text>
        </TouchableOpacity>
      </View>

      {/* Customize Album Cover Modal */}
      <Modal
        visible={selectedCustomAlbumId !== null}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setSelectedCustomAlbumId(null)}
            >
              <AntDesign name="closecircle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Customize Album Icon</Text>
            <TextInput
              style={styles.input}
              placeholder="Icon Name (e.g., 'camera')"
              onChangeText={(text) =>
                setCustomAlbumCovers({
                  ...customAlbumCovers,
                  [selectedCustomAlbumId]: text,
                })
              }
              value={customAlbumCovers[selectedCustomAlbumId] || ''}
            />
            <TouchableOpacity
              style={styles.setCustomCoverButton}
              onPress={handleSetCustomCover}
            >
              <Text style={styles.setCustomCoverButtonText}>
                Set Custom Icon
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      
     {/* Create Album Modal */}
     <Modal
        visible={isNewAlbumModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.backButtonModal}
              onPress={() => setNewAlbumModalVisible(false)}
            >
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Modal Title */}
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Create New Album</Text>
            </View>

            <TextInput
              style={[styles.input, styles.albumNameInput]}
              placeholder="Album Name"
              value={newAlbumName}
              onChangeText={(text) => setNewAlbumName(text)}
            />

            {/* Choose Cover Image Button */}
            <TouchableOpacity
              style={styles.setCustomCoverButton}
              onPress={() => openImagePicker(setNewAlbumCover)}
            >
              <Text style={styles.setCustomCoverButtonText}>
                Choose Cover Image
              </Text>
            </TouchableOpacity>

            {/* Display selected image (optional) */}
            {newAlbumCover && (
              <Image
                source={{ uri: newAlbumCover }}
                style={{ width: '100%', height: 200, marginTop: 10 }}
              />
            )}

            {/* Create Album Button */}
            <TouchableOpacity
              style={styles.setCustomCoverButton}
              onPress={handleCreateAlbum}
            >
              <Text style={styles.setCustomCoverButtonText}>Create Album</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>




<Modal
  visible={isUploadModalVisible}
  transparent={true}
  animationType="slide"
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={styles.modalCloseButton}
        onPress={() => setUploadModalVisible(false)}
      >
        <AntDesign name="closecircle" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.modalTitle}>Select Destination Album</Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.albumItem}
            onPress={() => handleDestinationAlbumSelection(item)}
          >
            <Text style={styles.albumName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  </View>
</Modal>



<Modal
  visible={isConfirmModalVisible}
  transparent={true}
  animationType="slide"
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={styles.modalCloseButton}
        onPress={() => setConfirmModalVisible(false)}
      >
        <AntDesign name="closecircle" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.modalTitle}>Confirm Upload</Text>
      <Text>{`Album: ${selectedUploadAlbum?.name || 'Unknown'}`}</Text>
      {/* Add other album details here */}
      <FlatList
        data={selectedMediaFiles}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Text>{`Selected Media: ${item}`}</Text>
        )}
      />
      <TouchableOpacity
        style={styles.setCustomCoverButton}
        onPress={() => {
          initiateUpload();
          setConfirmModalVisible(false);
        }}
      >
        <Text style={styles.setCustomCoverButtonText}>Initiate Upload</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>




<Modal
  visible={isUploadModalVisible}
  transparent={true}
  animationType="slide"
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      {uploadProgress < 1 ? (
        <>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setUploadModalVisible(false)}
          >
            <AntDesign name="closecircle" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Uploading...</Text>
          <Progress.Bar
            progress={uploadProgress}
            width={200}
            height={20}
            color="blue"
          />
        </>
      ) : (
        <>
          <Text style={styles.modalTitle}>Upload Complete!</Text>
          <TouchableOpacity
            style={styles.setCustomCoverButton}
            onPress={() => {
              initiateUpload();
              setUploadModalVisible(false);
            }}
          >
            <Text style={styles.setCustomCoverButtonText}>OK</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  </View>
</Modal>



<Modal
  visible={isSuccessModalVisible}
  transparent={true}
  animationType="slide"
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={styles.modalCloseButton}
        onPress={() => setSuccessModalVisible(false)}
      >
        <AntDesign name="closecircle" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.modalTitle}>Upload Successful!</Text>
      <Text>Your files have been successfully uploaded.</Text>
    </View>
  </View>
</Modal>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', // Light dark background color
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    fontSize: 30, // Fixed typo: Removed quotes around the font size
    fontWeight: 'bold',
    color: 'red',
  },
  createAlbumSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    maxWidth: '80%',
    height: 35,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },

  createButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
  },
  createButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  albumColumn: {
    flexDirection: 'row', // Display albums in a row
    flexWrap: 'wrap', // Wrap items to the next line if they exceed the width of the container
    justifyContent: 'space-between',
  },
  albumItemWrapper: {
    width: '48%',
    marginBottom: 10,
  },
  albumItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  
  
  
 // Modified styles for the Create Album Modal
 modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  width: '90%', // Adjust the width as needed
  borderRadius: 20,
  position: 'relative',
  height:'50%',
},


  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  setCustomCoverButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  setCustomCoverButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  albumList: {
    flex: 1, // Make the album list fill available space
    marginBottom: 20,
  },
  // Buttons Section styles
  buttonsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  uploadButton: {
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    padding: 10,
    marginRight: 10,
  },
  streamButton: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 30,
    padding: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  albumCover: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  albumIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  albumName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  createAlbumSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },

  // Add these styles to your existing styles object
  backButtonModal: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1, // Place the back button above other elements
  },
albumNameInput: {
  borderColor: 'grey',
  borderWidth: 1,
  borderRadius: 10,
  marginTop: 10,
  marginBottom: 10,
  padding: 10,
},
modalTitleContainer: {
  alignItems: 'center', // Center the title vertically
   // Add a gap between the title and the back arrow
},

editButton: {
  position: 'absolute',
  top: 10,
  right: 10,
},
albumList: {
  flex: 1,
  marginBottom: 20,
  paddingHorizontal: 5, // Added horizontal padding
},
albumItem: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  borderRadius: 10,
  elevation: 3,
  overflow: 'hidden',
  margin: 5, // Added margin
},

});

export default DigitalAlbum;
