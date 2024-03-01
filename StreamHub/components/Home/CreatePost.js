// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Modal,
//   FlatList,
//   TouchableHighlight,
//   Alert,
//   Video,
//   CheckBox,
//   ScrollView,
//   PermissionsAndroid,
//   Platform
// } from 'react-native';
// import { AntDesign, FontAwesome } from '@expo/vector-icons';
// // import * as ImagePicker from 'expo-image-picker';
// // import * as VideoPicker from 'expo-image-picker';
// import EmojiSelector from 'react-native-emoji-selector';
// // import ImageFilterKit from 'react-native-image-filter-kit'; // Import the image processing library
// // import VideoProcessing from 'react-native-video-processing'; // Import the video processing library
// import Geolocation from 'react-native-geolocation-service';

// const CreatePost = () => {
//   const [postContent, setPostContent] = useState('');
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [selectedVideos, setSelectedVideos] = useState([]);
//   const [location, setLocation] = useState('');
//   const [privacy, setPrivacy] = useState('public');
//   const [reactions, setReactions] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [confirmationVisible, setConfirmationVisible] = useState(false);
//   const [taggedFriends, setTaggedFriends] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [friendsList, setFriendsList] = useState([]);
//   const [tagFriendsModalVisible, setTagFriendsModalVisible] = useState(false);
//   const [feedbackVisible, setFeedbackVisible] = useState(false);
//   const [mentionSuggestions, setMentionSuggestions] = useState([]);
//   const [filteredImages, setFilteredImages] = useState([]);
//   const [filteredVideos, setFilteredVideos] = useState([]);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image for filter preview
//   const [filterIntensity, setFilterIntensity] = useState(50); // Initial intensity value (can be adjusted)
//   const [selectedFilter, setSelectedFilter] = useState('Hue'); // Initial filter type (can be adjusted)
//   const [feedbackText, setFeedbackText] = useState('');
//   const [undoStack, setUndoStack] = useState([]);
//   const [redoStack, setRedoStack] = useState([]);
//   const [pollOptions, setPollOptions] = useState(['', '']); // Initial two empty options
//   const [pollDuration, setPollDuration] = useState(''); // Poll duration in minutes
//   const [isPollEnabled, setPollEnabled] = useState(false); // Toggle to enable/disable poll
//   const [pollModalVisible, setPollModalVisible] = useState(false); // Modal visibility for poll creation
//   const [userLocation, setUserLocation] = useState(null);
//   const [manualLocation, setManualLocation] = useState(null); // New state for manual location

  



//   const videoRef = useRef(null);

//   // Function to recognize mentions
//   const handleMentionRecognition = () => {
//     const words = postContent.split(' ');
//     const lastWord = words[words.length - 1];
//     if (lastWord.startsWith('@')) {
//       const mentionQuery = lastWord.substring(1).toLowerCase();
//       // Implement your logic to fetch mention suggestions based on mentionQuery
//       // For now, let's assume you have a list of mentions and set it to mentionSuggestions
//       const filteredMentions = friendsList.filter(
//         (friend) =>
//           friend.username.toLowerCase().includes(mentionQuery) &&
//           !taggedFriends.includes(friend)
//       );
//       setMentionSuggestions(filteredMentions);
//     } else {
//       setMentionSuggestions([]);
//     }
//   };

//   // Function to handle mention selection from auto-suggestions
//   const handleMentionSelect = (mention) => {
//     const words = postContent.split(' ');
//     words[words.length - 1] = `@${mention.username}`;
//     setPostContent(words.join(' '));
//     setMentionSuggestions([]);
//   };

//   const handleAddImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       Alert.alert('Permission to access camera roll is required!');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync();

//     if (!result.cancelled) {
//       setSelectedImages([...selectedImages, result.uri]);
//     }
//   };

//   const handleAddVideo = async () => {
//     const permissionResult = await VideoPicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       Alert.alert('Permission to access camera roll is required!');
//       return;
//     }

//     const result = await VideoPicker.launchImageLibraryAsync();

//     if (!result.cancelled) {
//       setSelectedVideos([...selectedVideos, result.uri]);
//       setConfirmationVisible(true);
//     }
//   };

//   const handleAddReaction = (emoji) => {
//     setReactions([...reactions, emoji]);
//     setModalVisible(!modalVisible);
//   };

//   const handlePublish = () => {
//     // Implement logic to publish the post with all details
//     console.log('Publishing post:', {
//       postContent,
//       selectedImages,
//       selectedVideos,
//       location,
//       privacy,
//       reactions,
//     });
//     // You can navigate back to the home screen or perform other actions after publishing.
//   };

//   const closeConfirmationModal = () => {
//     setConfirmationVisible(false);
//   };


// // Function to handle friend selection
// const handleFriendSelect = (friend) => {
//   setTaggedFriends([...taggedFriends, friend]);
//   setSearchQuery(''); // Clear search query after selecting a friend
// };


// const openTagFriendsModal = () => {
//   setTagFriendsModalVisible(true);
// };

// const closeTagFriendsModal = () => {
//   setTagFriendsModalVisible(false);
//   setSearchQuery('');
// };


// const handleSearchFriends = (query) => {
//   setSearchQuery(query);

//   // Implement your friend search logic here (e.g., API call to get matching friends)
//   // For now, let's assume you have a list of friends and filter based on the query
//   const filteredFriends = friendsList.filter(
//     (friend) =>
//       friend.username.toLowerCase().includes(query.toLowerCase()) &&
//       !taggedFriends.includes(friend)
//   );

//   setFriendsList(filteredFriends);
// };

// const handleTagFriend = (friend) => {
//   setTaggedFriends([...taggedFriends, friend]);
//   setTagFriendsModalVisible(false); // Close the modal after tagging a friend
//   setSearchQuery(''); // Clear search query after selecting a friend
// };


// // Function to toggle user feedback modal visibility
// const toggleFeedbackModal = () => {
//   setFeedbackVisible(!feedbackVisible);
// };

// // Function to collect user feedback
// const handleUserFeedback = (feedback) => {
//   // Implement logic to handle user feedback (e.g., API call to send feedback)
//   console.log('User Feedback:', feedback);
//   toggleFeedbackModal();
// };


// // Function to apply filters to images
// const applyFilterToImage = async (uri) => {
//   try {
//     const filteredImage = await ImageFilterKit.filter({
//       image: uri,
//       name: selectedFilter,
//       value: filterIntensity,
//     });
//     setFilteredImages([...filteredImages, filteredImage]);
//   } catch (error) {
//     console.error('Error applying filter to image:', error);
//   }
// };

// // Function to apply filters to videos
// const applyFilterToVideo = async (uri) => {
//   try {
//     const filteredVideo = await VideoProcessing.trim(uri, {
//       startTime: 0,
//       endTime: 10,
//     });
//     setFilteredVideos([...filteredVideos, filteredVideo]);
//   } catch (error) {
//     console.error('Error applying filter to video:', error);
//   }
// };


// // Render filtered images
// const renderFilteredImages = () => {
//   return (
//     <FlatList
//       horizontal
//       data={filteredImages}
//       keyExtractor={(item, index) => index.toString()}
//       renderItem={({ item, index }) => (
//         <Image key={index} source={{ uri: item }} style={styles.image} />
//       )}
//     />
//   );
// };

// // Render filtered videos
// const renderFilteredVideos = () => {
//   return (
//     <FlatList
//       horizontal
//       data={filteredVideos}
//       keyExtractor={(item, index) => index.toString()}
//       renderItem={({ item, index }) => (
//         <Video
//           key={index}
//           source={{ uri: item }}
//           style={styles.video}
//           useNativeControls
//         />
//       )}
//     />
//   );
// };

// // Function to handle image filter selection
// const handleImageFilterSelect = async (filterName, value) => {
//   const filteredImage = await ImageFilterKit.filter({
//     image: selectedImages[selectedImageIndex],
//     name: filterName,
//     value: value,
//   });
//   const updatedImages = [...selectedImages];
//   updatedImages[selectedImageIndex] = filteredImage;
//   setSelectedImages(updatedImages);
// };

// // Function to handle video filter selection
// const handleVideoFilterSelect = async (filterName, value) => {
//   try {
//     const filteredVideo = await VideoProcessing.trim(selectedVideos[selectedImageIndex], {
//       startTime: 0,
//       endTime: 10,
//     });
//     setFilteredVideos([...filteredVideos, filteredVideo]);
//   } catch (error) {
//     console.error('Error applying filter to video:', error);
//   }
// };

// // Function to render filter options
// const renderFilterOptions = () => {
//   return (
//     <View style={styles.filterOptionsContainer}>
//       <Text style={styles.filterOptionsLabel}>Filter Options:</Text>
//       <TouchableOpacity
//         onPress={() => handleImageFilterSelect('Hue', 90)}
//         style={styles.filterOptionButton}
//       >
//         <Text style={styles.filterOptionButtonText}>Apply Hue Filter</Text>
//       </TouchableOpacity>
//       {/* Add more filter options as needed */}
//     </View>
//   );
// };


// // Function to handle video filter customization
// const handleVideoFilterCustomization = () => {
//   // Implement your logic to apply customized filter to the selected video
//   // Use the selectedFilter and filterIntensity variables to apply the filter
//   // You can use these values in the handleVideoFilterSelect function
//   handleVideoFilterSelect(selectedFilter, filterIntensity);
// };


//   // Function to handle image filter customization
//   const handleImageFilterCustomization = () => {
//     // Implement your logic to apply customized filter to the selected image
//     // Use the selectedFilter and filterIntensity variables to apply the filter
//     // You can use these values in the handleImageFilterSelect function
//     handleImageFilterSelect(selectedFilter, filterIntensity);
//   };

// // Render filter customization options
// const renderFilterCustomizationOptions = () => {
//   return (
//     <View style={styles.filterCustomizationOptionsContainer}>
//       <Text style={styles.filterCustomizationLabel}>Filter Customization:</Text>
//       <TextInput
//         style={styles.filterIntensityInput}
//         placeholder="Enter intensity (0-100)"
//         keyboardType="numeric"
//         value={filterIntensity.toString()}
//         onChangeText={(text) => setFilterIntensity(parseInt(text) || 0)}
//       />
//       <TouchableOpacity
//         onPress={handleImageFilterCustomization}
//         style={styles.filterCustomizationButton}
//       >
//         <Text style={styles.filterCustomizationButtonText}>Apply Custom Filter</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// // Render filter customization options for videos
// const renderVideoFilterCustomizationOptions = () => {
//   return (
//     <View style={styles.filterCustomizationOptionsContainer}>
//       <Text style={styles.filterCustomizationLabel}>Filter Customization:</Text>
//       <TextInput
//         style={styles.filterIntensityInput}
//         placeholder="Enter intensity (0-100)"
//         keyboardType="numeric"
//         value={filterIntensity.toString()}
//         onChangeText={(text) => setFilterIntensity(parseInt(text) || 0)}
//       />
//       <TouchableOpacity
//         onPress={handleVideoFilterCustomization}
//         style={styles.filterCustomizationButton}
//       >
//         <Text style={styles.filterCustomizationButtonText}>Apply Custom Filter</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// useEffect(() => {
//   // ... (previous useEffect logic)

//   // Clear undo and redo stacks when the component mounts
//   setUndoStack([]);
//   setRedoStack([]);
// }, []);

// const handleUndo = () => {
//   if (undoStack.length > 0) {
//     const lastAction = undoStack.pop();
//     setRedoStack([...redoStack, lastAction]);
//     // Implement logic to revert the last action
//     // For example, if the last action was adding an image, remove the last added image
//   }
// };

// const handleRedo = () => {
//   if (redoStack.length > 0) {
//     const lastAction = redoStack.pop();
//     setUndoStack([...undoStack, lastAction]);
//     // Implement logic to reapply the last undone action
//     // For example, if the last undone action was removing an image, add back the removed image
//   }
// };


// // Function to handle poll option input change with validation
// const handlePollOptionChange = (index, value) => {
//   const updatedOptions = [...pollOptions];
//   updatedOptions[index] = value;
//   setPollOptions(updatedOptions);
// };

// // Function to add a new poll option
// const addPollOption = () => {
//   setPollOptions([...pollOptions, '']);
// };

// // Function to remove the last poll option
// const removePollOption = () => {
//   if (pollOptions.length > 2) {
//     const updatedOptions = [...pollOptions];
//     updatedOptions.pop();
//     setPollOptions(updatedOptions);
//   }
// };

// // Function to handle poll creation with validation
// const createPoll = () => {
//   // Validate poll options and duration
//   const validOptions = pollOptions.every((option) => option.trim() !== '');
//   const validDuration = /^\d+$/.test(pollDuration) && parseInt(pollDuration) > 0;

//   if (validOptions && validDuration) {
//     // Implement logic to handle poll creation
//     console.log('Creating poll:', {
//       options: pollOptions,
//       duration: pollDuration,
//       isEnabled: isPollEnabled,
//     });
//     setPollModalVisible(false);
//     setPollValid(true); // Set poll validation status to true
//   } else {
//     setPollValid(false); // Set poll validation status to false
//   }
// };

// useEffect(() => {
//   // Request location permission
//   requestLocationPermission();
// }, []);

// const requestLocationPermission = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         // Permission granted, get current location
//         getCurrentLocation();
//       } else {
//         console.log('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   } else {
//     // For iOS, location permission is requested in Info.plist
//     getCurrentLocation();
//   }
// };

// const getCurrentLocation = () => {
//   Geolocation.getCurrentPosition(
//     (position) => {
//       const { latitude, longitude } = position.coords;
//       setUserLocation({ latitude, longitude });
//     },
//     (error) => {
//       console.error('Error getting location:', error);
//     },
//     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//   );
// };
// const handleManualLocationSelection = () => {
//   // Implement logic for manual location selection (e.g., open a map picker)
//   // Set the selected manual location to the state
//   setManualLocation({
//     latitude: 0, // Replace with the actual latitude
//     longitude: 0, // Replace with the actual longitude
//   });
// };


// const renderLocationSection = () => {
//   return (
//     <View>
//       <TouchableOpacity onPress={handleManualLocationSelection} style={styles.locationButton}>
//         <Text style={styles.locationButtonText}>Select Location</Text>
//       </TouchableOpacity>
//       {manualLocation && (
//         <View>
//           <Text style={styles.locationText}>
//             Manual Location: {manualLocation.latitude}, {manualLocation.longitude}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const renderLocationDisplay = () => {
//   return (
//     <View>
//       <Text style={styles.locationText}>
//         {manualLocation ? 'Manual Location: ' : 'Detected Location: '}
//         {manualLocation ? `${manualLocation.latitude}, ${manualLocation.longitude}` : location}
//       </Text>
//     </View>
//   );
// };



// const handleLocationSelection = () => {
//   // Implement the logic to handle location selection here
//   // This function might involve opening a modal to choose a location,
//   // accessing the device's GPS coordinates, or allowing the user to input a location manually.
//   // Once the location is selected or determined, you would typically update the component state accordingly.

//   // For demonstration purposes, let's assume you update the location state with a mock location:
//   setLocation('New York City'); // Replace 'New York City' with the actual location selected
// };




// // Define EmojiSelector component
// const EmojiSelector = ({ onEmojiSelected }) => {
//   // Implement your EmojiSelector component logic here
//   // This component should render a list of emojis and allow the user to select one
// };

// // Your existing code continues...





//   return (
//     <View style={styles.container}>
//        <View style={styles.inputContainer}>
//         <TextInput
//           multiline
//           placeholder="What's on your mind?"
//           style={styles.input}
//           value={postContent}
//           onChangeText={(text) => {
//             setPostContent(text);
//             handleMentionRecognition(); // Trigger mention recognition on text change
//           }}
//         />
//       </View>

//       {/* Auto-suggestions for mentions */}
//       {mentionSuggestions.length > 0 && (
//         <FlatList
//           data={mentionSuggestions}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() => handleMentionSelect(item)}
//               style={styles.mentionSuggestionItemContainer}
//             >
//               <Text style={styles.mentionSuggestionItem}>{`@${item.username}`}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}


// {selectedImages.length > 0 && (
//         <View style={styles.imagePreviewContainer}>
//           <Image
//             source={{ uri: selectedImages[selectedImageIndex] }}
//             style={styles.imagePreview}
//           />
//           {renderFilterOptions()}
//           {renderFilterCustomizationOptions()} {/* Render filter customization options */}
//         </View>
//       )}

//       {selectedVideos.length > 0 && (
//         <View style={styles.videoPreviewContainer}>
//           <Video
//             source={{ uri: selectedVideos[selectedImageIndex] }}
//             style={styles.videoPreview}
//             useNativeControls
//           />
//           {renderFilterOptions()}
//         </View>
//       )}

//       {/* Render filtered videos */}
//       {selectedVideos.length > 0 && (
//         <View style={styles.videoPreviewContainer}>
//           <Video
//             source={{ uri: selectedVideos[selectedImageIndex] }}
//             style={styles.videoPreview}
//             useNativeControls
//           />
//           {renderFilterOptions()}
//           {renderVideoFilterCustomizationOptions()} {/* Render video filter customization options */}
//         </View>
//       )}


//       {/* Undo and Redo Buttons */}
//       <View style={styles.undoRedoContainer}>
//         <TouchableOpacity onPress={handleUndo} style={styles.undoButton}>
//           <Text style={styles.undoButtonText}>Undo</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleRedo} style={styles.redoButton}>
//           <Text style={styles.redoButtonText}>Redo</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.optionsContainer}>
//         <TouchableOpacity onPress={handleAddImage} style={styles.option}>
//           <FontAwesome name="photo" size={24} color="black" />
//           <Text style={styles.optionText}>Photo</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleAddVideo} style={styles.option}>
//           <FontAwesome name="video-camera" size={24} color="black" />
//           <Text style={styles.optionText}>Video</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.option}>
//           <AntDesign name="smile-circle" size={24} color="black" />
//           <Text style={styles.optionText}>Feeling/Activity</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleLocationSelection} style={styles.option}>
//           <FontAwesome name="map-marker" size={24} color="black" />
//           <Text style={styles.optionText}>Location</Text>
//         </TouchableOpacity>
//       </View>

//       {location && (
//         <View style={styles.locationDisplayContainer}>
//           {manualLocation ? renderLocationSection() : renderLocationDisplay()}
//         </View>
//       )}

//       <View style={styles.additionalOptions}>
//         {/* Location Tagging */}
//   <TextInput
//     placeholder="Add location"
//     style={styles.locationInput}
//     value={location}
//     onChangeText={(text) => setLocation(text)}
//   />

//         {/* Privacy Settings */}
//         <View style={styles.privacyOptions}>
//           <TouchableOpacity
//             style={[
//               styles.privacyOption,
//               privacy === 'public' && styles.selectedOption,
//             ]}
//             onPress={() => setPrivacy('public')}
//           >
//             <Text style={styles.optionText}>Public</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.privacyOption,
//               privacy === 'friends' && styles.selectedOption,
//             ]}
//             onPress={() => setPrivacy('friends')}
//           >
//             <Text style={styles.optionText}>Friends</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.privacyOption,
//               privacy === 'private' && styles.selectedOption,
//             ]}
//             onPress={() => setPrivacy('private')}
//           >
//             <Text style={styles.optionText}>Private</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
//         <Text style={styles.publishButtonText}>Publish</Text>
//       </TouchableOpacity>

//         {/* Friend Tagging */}
//       <View style={styles.tagFriendsContainer}>
//         <Text style={styles.tagFriendsLabel}>Tag Friends:</Text>
//         <TouchableOpacity
//           onPress={openTagFriendsModal}
//           style={styles.tagFriendsButton}
//         >
//           <Text style={styles.tagFriendsButtonText}>Tag Friends</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Display Tagged Friends */}
//       {taggedFriends.length > 0 && (
//         <View style={styles.taggedFriendsContainer}>
//           <Text style={styles.taggedFriendsLabel}>Tagged Friends:</Text>
//           <FlatList
//             data={taggedFriends}
//             keyExtractor={(item) => item.id.toString()}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             renderItem={({ item }) => (
//               <Text style={styles.taggedFriend}>{item.username}</Text>
//             )}
//           />
//         </View>
//       )}

//       {/* Friend Selection Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={tagFriendsModalVisible}
//         onRequestClose={closeTagFriendsModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TextInput
//               placeholder="Search friends"
//               style={styles.searchFriendsInput}
//               value={searchQuery}
//               onChangeText={(text) => handleSearchFriends(text)}
//             />

//             <FlatList
//               data={friendsList}
//               keyExtractor={(item) => item.id.toString()}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   onPress={() => handleTagFriend(item)}
//                   style={styles.friendItemContainer}
//                 >
//                   <Text style={styles.friendItem}>{item.username}</Text>
//                 </TouchableOpacity>
//               )}
//             />

//             <TouchableOpacity
//               onPress={closeTagFriendsModal}
//               style={styles.modalCancelButton}
//             >
//               <Text style={styles.modalCancelButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>


//         {/* Emojis and Reactions */}
//         <View style={styles.reactionsContainer}>
//           <Text style={styles.reactionsLabel}>Reactions:</Text>
//           <TouchableHighlight
//             onPress={() => setModalVisible(!modalVisible)}
//             style={styles.emojisButton}
//           >
//             <Text style={styles.emojisButtonText}>Select Reactions</Text>
//           </TouchableHighlight>
//         </View>

//         <View style={styles.selectedReactionsContainer}>
//           {reactions.map((emoji, index) => (
//             <Text key={index} style={styles.selectedEmoji}>
//               {emoji}
//             </Text>
//           ))}
//         </View>

//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Select Reaction</Text>
//               <EmojiSelector
//                 onEmojiSelected={(emoji) => handleAddReaction(emoji)}
//               />
//               <TouchableOpacity
//                 onPress={() => setModalVisible(!modalVisible)}
//                 style={styles.modalButton}
//               >
//                 <Text style={styles.modalButtonText}>Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Video Upload Confirmation */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={confirmationVisible}
//           onRequestClose={closeConfirmationModal}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Video Uploaded</Text>
//               <Video
//                 ref={videoRef}
//                 source={{ uri: selectedVideos[selectedVideos.length - 1] }}
//                 style={styles.videoPreview}
//                 useNativeControls
//               />
//               <TouchableOpacity
//                 onPress={closeConfirmationModal}
//                 style={styles.modalButton}
//               >
//                 <Text style={styles.modalButtonText}>OK</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* User Feedback Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={feedbackVisible}
//         onRequestClose={toggleFeedbackModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>User Feedback</Text>
//             <TextInput
//               placeholder="Share your feedback..."
//               style={styles.input}
//               multiline
//               onChangeText={(text) => setFeedbackText(text)}
//             />
//             <TouchableOpacity
//               onPress={() => handleUserFeedback(feedbackText)}
//               style={styles.modalButton}
//             >
//               <Text style={styles.modalButtonText}>Submit Feedback</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={toggleFeedbackModal}
//               style={[styles.modalButton, { backgroundColor: 'red' }]}
//             >
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//        {/* Button to open the poll creation modal */}
//        <TouchableOpacity
//         onPress={() => setPollModalVisible(true)}
//         style={styles.button}
//       >
//         <FontAwesome name="poll" size={24} color="white" />
//         <Text style={styles.buttonText}>Add Poll</Text>
//       </TouchableOpacity>

//       {/* Poll Creation Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={pollModalVisible}
//         onRequestClose={() => setPollModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Create Poll</Text>

//             {/* Poll Options */}
//             <ScrollView>
//               {pollOptions.map((option, index) => (
//                 <TextInput
//                   key={index}
//                   placeholder={`Option ${index + 1}`}
//                   style={[styles.pollOptionInput, !isPollValid && !option.trim() && styles.invalidPollOption]}
//                   value={option}
//                   onChangeText={(text) => handlePollOptionChange(index, text)}
//                 />
//               ))}
//             </ScrollView>

//             {/* Add and Remove Poll Option Buttons */}
//             <View style={styles.pollOptionButtonsContainer}>
//               <TouchableOpacity onPress={addPollOption} style={styles.modalButton}>
//                 <Text style={styles.modalButtonText}>Add Option</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={removePollOption} style={styles.modalButton}>
//                 <Text style={styles.modalButtonText}>Remove Option</Text>
//               </TouchableOpacity>
//             </View>

//             {/* Poll Duration Input */}
//             <TextInput
//               placeholder="Poll Duration (minutes)"
//               style={[styles.pollOptionInput, !isPollValid && !/^\d+$/.test(pollDuration) && styles.invalidPollOption]}
//               keyboardType="numeric"
//               value={pollDuration}
//               onChangeText={(text) => setPollDuration(text)}
//             />

//             {/* Enable/Disable Poll Checkbox */}
//             <View style={styles.pollOptionCheckboxContainer}>
//               <CheckBox
//                 value={isPollEnabled}
//                 onValueChange={() => setPollEnabled(!isPollEnabled)}
//               />
//               <Text style={styles.pollOptionCheckboxText}>Enable Poll</Text>
//             </View>

//             {/* Poll Validation Error Message */}
//             {!isPollValid && (
//               <Text style={styles.errorMessage}>Please provide valid options and duration for the poll.</Text>
//             )}

//             {/* Confirm and Cancel Buttons */}
//             <View style={styles.pollOptionButtonsContainer}>
//               <TouchableOpacity onPress={createPoll} style={styles.modalButton}>
//                 <Text style={styles.modalButtonText}>Create Poll</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => setPollModalVisible(false)}
//                 style={[styles.modalButton, { backgroundColor: 'red' }]}
//               >
//                 <Text style={styles.modalButtonText}>Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

      
//       {/* User Feedback Button */}
//   <TouchableOpacity onPress={toggleFeedbackModal} style={styles.button}>
//     <AntDesign name="message1" size={24} color="white" />
//     <Text style={styles.buttonText}>Give Feedback</Text>
//   </TouchableOpacity>

//   {/* Display User's Current Location */}
//   {userLocation && (
//     <View style={styles.locationContainer}>
//       <Text style={styles.locationText}>
//         Your current location: {userLocation.latitude}, {userLocation.longitude}
//       </Text>
//     </View>
//   )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#222',
//     padding: 20,
//   },
//   inputContainer: {
//     backgroundColor: '#333',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//   },
//   input: {
//     fontSize: 16,
//     color: 'white',
//     minHeight: 100,
//   },
//   imageContainer: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//     borderRadius: 10,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     flex: 1,
//     backgroundColor: '#444',
//     borderRadius: 10,
//     padding: 10,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     marginTop: 5,
//   },
//   additionalOptions: {
//     marginTop: 20,
//   },
//   locationInput: {
//     backgroundColor: '#333',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     color: 'white',
//   },
//   privacyOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10,
//   },
//   privacyOption: {
//     padding: 10,
//     borderRadius: 10,
//     borderColor: 'white',
//     borderWidth: 1,
//   },
//   selectedOption: {
//     backgroundColor: 'red',
//   },
//   optionText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   reactionsContainer: {
//     marginBottom: 10,
//   },
//   reactionsLabel: {
//     color: 'white',
//     marginBottom: 5,
//   },
//   emojisButton: {
//     backgroundColor: 'red',
//     borderRadius: 10,
//     padding: 10,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   emojisButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   emojisContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   emojiContainer: {
//     flexDirection: 'row',
//   },
//   emojiPlaceholder: {
//     color: 'white',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   reactionEmoji: {
//     fontSize: 24,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#333',
//     borderRadius: 10,
//     padding: 30,
//     width: '100%', // Occupy full width
//     maxHeight: '50%', // Set maximum height to 50% of the screen
//   },
//   modalTitle: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   modalButton: {
//     backgroundColor: '#444',
//     borderRadius: 10,
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   modalButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   emoji: {
//     fontSize: 32,
//   },
//   modalEmojiContainer: {
//     flexGrow: 0, // Prevent ScrollView from growing beyond its container
//   },

//   selectedReactionsContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//     marginBottom: 10,
//     justifyContent: 'center',
//   },
//   selectedEmoji: {
//     fontSize: 32,
//     marginRight: 5,
//   },
//   emojiInput: {
//     fontSize: 24,
//     color: 'white',
//     textAlign: 'center',
//   },
//   video: {
//     width: 200,
//     height: 150,
//     marginRight: 10,
//     borderRadius: 10,
//   },
//   videoPreview: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//   },
//   additionalOptions: {
//     marginTop: 20,
//   },
//   tagFriendsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   tagFriendsInput: {
//     backgroundColor: '#333',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     color: 'white',
//   },
//   friendItem: {
//     color: 'white',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#444',
//   },
//   tagFriendsLabel: {
//     color: 'white',
//     marginRight: 10,
//   },
//   tagFriendsButton: {
//     backgroundColor: '#444',
//     borderRadius: 10,
//     padding: 10,
//   },
//   tagFriendsButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   modalCancelButton: {
//     backgroundColor: 'red',
//     borderRadius: 10,
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   modalCancelButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   searchFriendsInput: {
//     backgroundColor: '#333',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     color: 'white',
//   },
//   friendItemContainer: {
//     marginBottom: 10,
//   },
//   friendItem: {
//     color: 'white',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#444',
//   },
//   taggedFriendsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   taggedFriendsLabel: {
//     color: 'white',
//     marginRight: 10,
//   },
//   taggedFriend: {
//     color: 'white',
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#555', // Example styling for tagged friends
//     marginRight: 5,
//   },
//   mentionSuggestionItemContainer: {
//     backgroundColor: '#555',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 2,
//   },
//   mentionSuggestionItem: {
//     color: 'white',
//   },
//   filterCustomizationOptionsContainer: {
//     marginTop: 10,
//   },
//   filterCustomizationLabel: {
//     color: 'white',
//     marginBottom: 5,
//   },
//   filterIntensityInput: {
//     backgroundColor: '#333',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     color: 'white',
//   },
//   filterCustomizationButton: {
//     backgroundColor: 'blue',
//     borderRadius: 10,
//     padding: 10,
//     alignItems: 'center',
//   },
//   filterCustomizationButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },

//   imagePreviewContainer: {
//     marginTop: 10,
//     position: 'relative', // Add position relative to allow absolute positioning of filter customization options
//   },
//   imagePreview: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },

//   videoPreviewContainer: {
//     marginTop: 10,
//     position: 'relative',
//   },
//   videoPreview: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },

//   undoRedoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   undoButton: {
//     backgroundColor: '#444',
//     borderRadius: 10,
//     padding: 10,
//     alignItems: 'center',
//     flex: 1,
//     marginRight: 5,
//   },
//   undoButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   redoButton: {
//     backgroundColor: '#444',
//     borderRadius: 10,
//     padding: 10,
//     alignItems: 'center',
//     flex: 1,
//     marginLeft: 5,
//   },
//   redoButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },

//   pollOptionInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     padding: 10,
//   },
//   pollOptionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   modalButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   modalButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   pollOptionCheckboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   pollOptionCheckboxText: {
//     marginLeft: 10,
//   },

//   errorMessage: {
//     color: 'red',
//     marginTop: 10,
//   },

  
//   invalidPollOption: {
//     borderColor: 'red',
//     borderWidth: 1,
//   },

  

//   locationButton: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   locationButtonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//   },
  
// });

// export default CreatePost;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [location, setLocation] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [taggedFriends, setTaggedFriends] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [scheduled, setScheduled] = useState(false);

  const handleAddImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  const handleTagFriend = () => {
    // Implement logic to tag friends
  };

  const handleAddReaction = (emoji) => {
    setReactions([...reactions, emoji]);
  };

  const handlePublish = () => {
    // Implement logic to publish the post with all details
    console.log('Publishing post:', {
      postContent,
      selectedImages,
      location,
      privacy,
      taggedFriends,
      reactions,
      scheduled,
    });
    // You can navigate back to the home screen or perform other actions after publishing.
  };

  return (
    <ScrollView style={styles.container}>

       
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={styles.input}
          value={postContent}
          onChangeText={(text) => setPostContent(text)}
        />
      </View>

      {selectedImages.length > 0 && (
        <ScrollView horizontal style={styles.imageContainer}>
          {selectedImages.map((imageUri, index) => (
            <Image key={index} source={{ uri: imageUri }} style={styles.image} />
          ))}
        </ScrollView>
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleAddImage} style={styles.button}>
          <FontAwesome name="camera" size={24} color="black" />
          <Text>Add Image</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePublish} style={styles.button}>
          <AntDesign name="checkcircleo" size={24} color="green" />
          <Text>Publish</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.additionalOptions}>
        {/* Location Tagging */}
        <TextInput
          placeholder="Add location"
          style={styles.locationInput}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        {/* Privacy Settings */}
        <View style={styles.privacyOptions}>
          <TouchableOpacity
            style={[
              styles.privacyOption,
              privacy === 'public' && styles.selectedOption,
            ]}
            onPress={() => setPrivacy('public')}
          >
            <Text style={styles.optionText}>Public</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.privacyOption,
              privacy === 'friends' && styles.selectedOption,
            ]}
            onPress={() => setPrivacy('friends')}
          >
            <Text style={styles.optionText}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.privacyOption,
              privacy === 'private' && styles.selectedOption,
            ]}
            onPress={() => setPrivacy('private')}
          >
            <Text style={styles.optionText}>Private</Text>
          </TouchableOpacity>
        </View>

        {/* Tagging Friends */}
        <TouchableOpacity onPress={handleTagFriend} style={styles.button}>
          <FontAwesome name="user" size={24} color="black" />
          <Text>Tag Friends</Text>
        </TouchableOpacity>

        {/* Emojis and Reactions */}
        <View style={styles.reactionsContainer}>
          <Text style={styles.reactionsLabel}>Reactions:</Text>
          <View style={styles.emojisContainer}>
            {reactions.map((emoji, index) => (
              <Text key={index} style={styles.reactionEmoji}>
                {emoji}
              </Text>
            ))}
          </View>
          <View style={styles.emojisContainer}>
            <TouchableOpacity onPress={() => handleAddReaction('❤️')}>
              <Text style={styles.reactionEmoji}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddReaction('😂')}>
              <Text style={styles.reactionEmoji}>😂</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddReaction('😍')}>
              <Text style={styles.reactionEmoji}>😍</Text>
            </TouchableOpacity>
            {/* Add more emojis as needed */}
          </View>
        </View>

        {/* Preview and Edit */}
        <TouchableOpacity style={styles.button}>
          <AntDesign name="edit" size={24} color="black" />
          <Text>Edit</Text>
        </TouchableOpacity>

        {/* Post Publishing Options */}
        <View style={styles.publishingOptions}>
          <TouchableOpacity
            style={[
              styles.publishingOption,
              scheduled && styles.selectedOption,
            ]}
            onPress={() => setScheduled(!scheduled)}
          >
            <Text style={styles.optionText}>
              {scheduled ? 'Scheduled' : 'Publish Now'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.publishingOption}>
            <Text style={styles.optionText}>Save as Draft</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    color: 'black',
    minHeight: 100,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  additionalOptions: {
    marginTop: 20,
  },
  locationInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  privacyOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  privacyOption: {
    padding: 10,
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  reactionsContainer: {
    marginBottom: 10,
  },
  reactionsLabel: {
    color: 'white',
    marginBottom: 5,
  },
  emojisContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  reactionEmoji: {
    fontSize: 20,
  },
  publishingOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  publishingOption: {
    padding: 10,
    borderRadius: 10,
  },


 

  
});

export default CreatePost;