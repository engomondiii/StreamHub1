import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Modal, Image, StyleSheet, Switch, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const Friends = () => {
  const [friends, setFriends] = useState([]); // Store the user's friends
  const [searchText, setSearchText] = useState(''); // Store search input
  const [isAddFriendModalVisible, setAddFriendModalVisible] = useState(false);
  const [newFriendUsername, setNewFriendUsername] = useState('');
  const [friendRequests, setFriendRequests] = useState([]);
  const [isFriendRequestsModalVisible, setFriendRequestsModalVisible] = useState(false);
  const [isOnlineStatus, setOnlineStatus] = useState(true);
  const [allowFriendRequests, setAllowFriendRequests] = useState(true);
  const [showFriendList, setShowFriendList] = useState(true);


  // Fetch the user's friends and friend requests from your backend
  useEffect(() => {
    // Implement API calls to fetch friends and friend requests
    // Update the 'friends' and 'friendRequests' state accordingly
    // Example:
    // fetchFriends()
    //   .then((data) => setFriends(data))
    //   .catch((error) => console.error(error));

    // fetchFriendRequests()
    //   .then((data) => setFriendRequests(data))
    //   .catch((error) => console.error(error));
  }, []);

  const sendFriendRequest = () => {
    // Implement logic to send a friend request to 'newFriendUsername'
    // Example:
    // sendFriendRequestToBackend(newFriendUsername)
    //   .then(() => {
    //     setAddFriendModalVisible(false);
    //     Alert.alert('Friend Request Sent', `Friend request sent to ${newFriendUsername}`);
    //   })
    //   .catch((error) => Alert.alert('Error', error.message));
  };

  const acceptFriendRequest = (requesterUsername) => {
    // Implement logic to accept a friend request from 'requesterUsername'
    // Example:
    // acceptFriendRequestInBackend(requesterUsername)
    //   .then(() => {
    //     // Update the 'friendRequests' state to remove the accepted request
    //     setFriendRequests((prevRequests) =>
    //       prevRequests.filter((request) => request.requesterUsername !== requesterUsername)
    //     );
    //     Alert.alert('Friend Request Accepted', `You are now friends with ${requesterUsername}`);
    //   })
    //   .catch((error) => Alert.alert('Error', error.message));
  };

  const rejectFriendRequest = (requesterUsername) => {
    // Implement logic to reject a friend request from 'requesterUsername'
    // Example:
    // rejectFriendRequestInBackend(requesterUsername)
    //   .then(() => {
    //     // Update the 'friendRequests' state to remove the rejected request
    //     setFriendRequests((prevRequests) =>
    //       prevRequests.filter((request) => request.requesterUsername !== requesterUsername)
    //     );
    //     Alert.alert('Friend Request Rejected', `You rejected the request from ${requesterUsername}`);
    //   })
    //   .catch((error) => Alert.alert('Error', error.message));
  };

  const removeFriend = (friendUsername) => {
    // Implement logic to remove a friend with 'friendUsername'
    // Example:
    // removeFriendInBackend(friendUsername)
    //   .then(() => {
    //     // Update the 'friends' state to remove the friend
    //     setFriends((prevFriends) =>
    //       prevFriends.filter((friend) => friend.username !== friendUsername)
    //     );
    //     Alert.alert('Friend Removed', `${friendUsername} has been removed from your friends list`);
    //   })
    //   .catch((error) => Alert.alert('Error', error.message));
  };

  const toggleOnlineStatus = () => {
    // Implement logic to toggle the user's online status
    // Example:
    // toggleOnlineStatusInBackend(!isOnlineStatus)
    //   .then(() => setOnlineStatus(!isOnlineStatus))
    //   .catch((error) => Alert.alert('Error', error.message));
  };

  const updateFriendRequestPrivacy = (value) => {
    // Make an API call to update the "Allow Friend Requests" setting in the backend
    // Example:
    // updateFriendRequestPrivacyInBackend(userId, value)
    //   .then(() => {
    //     // Update the state if the API call is successful
    //     setAllowFriendRequests(value);
    //   })
    //   .catch((error) => {
    //     // Handle API call error
    //     console.error('Error updating privacy settings', error);
    //   });
  };
  
  
  const updateFriendListPrivacy = (value) => {
    // Make an API call to update the "Show Friend List" setting in the backend
    // Example:
    // updateFriendListPrivacyInBackend(userId, value)
    //   .then(() => {
    //     // Update the state if the API call is successful
    //     setShowFriendList(value);
    //   })
    //   .catch((error) => {
    //     // Handle API call error
    //     console.error('Error updating privacy settings', error);
    //   });
  };
  

  // Add navigation reference
  const navigation = useNavigation();


  const startChatWithFriend = (friendUsername) => {
    // Implement logic to start a chat or conversation with the friend.
    // Example:
    // navigateToChatScreen(friendUsername); // Use your navigation function
    navigation.navigate('Chat', { friendUsername });

  };



    // Initialize state for friend recommendations
    const [friendRecommendations, setFriendRecommendations] = useState([]);

    // Fetch friend recommendations from your backend and set them in state
    useEffect(() => {
      // Implement an API call to get friend recommendations
      // Example:
      // fetchFriendRecommendations()
      //   .then((data) => setFriendRecommendations(data))
      //   .catch((error) => console.error(error));
    }, []);
  
    // Render a list of friend recommendations
    const renderFriendRecommendationItem = ({ item }) => (
      <View style={styles.recommendedFriendItem}>
        <Image source={{ uri: item.profilePicture }} style={styles.recommendedFriendAvatar} />
        <View style={styles.recommendedFriendInfo}>
          <Text style={styles.recommendedFriendUsername}>{item.username}</Text>
          <Text style={styles.recommendedFriendInterests}>{item.interests}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addFriend(item.username)}
        >
          <Text style={styles.addButtonLabel}>Add Friend</Text>
        </TouchableOpacity>
      </View>
    );
    
  
  

  

  // Render a list of friends
  const renderFriendItem = ({ item }) => (
    <View style={styles.friendItem}>
      <Image source={{ uri: item.profilePicture }} style={styles.friendAvatar} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendUsername}>{item.username}</Text>
        <Text style={styles.friendStatus}>{item.status}</Text>
      </View>
      {item.isOnline && <FontAwesome name="circle" size={12} color="green" />}
      <TouchableOpacity onPress={() => startChatWithFriend(item.username)}>
        <FontAwesome name="comments" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeFriend(item.username)}>
        <MaterialIcons name="cancel" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  // Render a list of friend requests
  const renderFriendRequestItem = ({ item }) => (
    <View style={styles.friendRequestItem}>
      <Text>{item.requesterUsername} sent you a friend request</Text>
      <TouchableOpacity onPress={() => acceptFriendRequest(item.requesterUsername)}>
        <FontAwesome name="check" size={24} color="green" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => rejectFriendRequest(item.requesterUsername)}>
        <FontAwesome name="close" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SH</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for friends"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.blueButton} onPress={() => setAddFriendModalVisible(true)}>
          <FontAwesome name="user-plus" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Switch
        value={isOnlineStatus}
        onValueChange={toggleOnlineStatus}
        trackColor={{ false: 'red', true: 'green' }}
      />

      <FlatList
        data={friends}
        renderItem={renderFriendItem}
        keyExtractor={(item) => item.username}
      />

      <TouchableOpacity onPress={() => setFriendRequestsModalVisible(true)}>
        <Text>Friend Requests</Text>
      </TouchableOpacity>

      <Modal visible={isAddFriendModalVisible}>
        <View style={styles.modal}>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter friend's username"
            value={newFriendUsername}
            onChangeText={setNewFriendUsername}
          />
                    <TouchableOpacity style={styles.redButton} onPress={sendFriendRequest}>
            <Text style={styles.buttonText}>Send Friend Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => setAddFriendModalVisible(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={isFriendRequestsModalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={friendRequests}
            renderItem={renderFriendRequestItem}
            keyExtractor={(item) => item.requesterUsername}
          />
          <TouchableOpacity style={styles.blueButton} onPress={() => setFriendRequestsModalVisible(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.privacySettings}>
      <Text>Privacy Settings</Text>
      <View style={styles.privacySetting}>
        <Text>Allow Friend Requests</Text>
        <Switch
          value={allowFriendRequests}
          onValueChange={(value) => updateFriendRequestPrivacy(value)}
        />
      </View>
      <View style={styles.privacySetting}>
        <Text>Show Friend List</Text>
        <Switch
          value={showFriendList}
          onValueChange={(value) => updateFriendListPrivacy(value)}
        />
      </View>
      <View style={styles.friendRecommendations}>
        <Text style={styles.title}>Friend Recommendations</Text>
        <FlatList
          data={friendRecommendations}
          renderItem={renderFriendRecommendationItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  </View>
);

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Light dark background color
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logoText: {
    color: 'red', // Red text logo
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 20, // Round corners for the search input
    paddingLeft: 15,
    color: 'white',
    backgroundColor: 'black',
  },
  blueButton: {
    backgroundColor: 'blue', // Blue button background
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20, // Round corners for the button
  },
  redButton: {
    backgroundColor: 'red', // Red button background
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    borderRadius: 20, // Round corners for the button
  },
  buttonText: {
    color: 'white', // White text for buttons
  },
  // Define other styles for your components here
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendInfo: {
    flex: 1,
    marginLeft: 10,
  },
  friendUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  friendStatus: {
    fontSize: 14,
  },
  friendRequestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInput: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20, // Round corners for the modal input
    paddingLeft: 15,
    color: 'white',
    backgroundColor: 'black',
  },

  privacySettings: {
    backgroundColor: '#fff', // Background color for the privacy settings section
    padding: 16,
    borderRadius: 8, // Rounded corners
    marginBottom: 16,
    // You can add other styles as needed
  },
  privacySetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },

  recommendedFriendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white', // Background color for the recommended friend item
    borderRadius: 10, // Rounded corners for the recommended friend item
    padding: 10,
  },
  recommendedFriendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // Rounded corners for the friend's avatar
  },
  recommendedFriendInfo: {
    flex: 1,
    marginLeft: 10,
  },
  recommendedFriendUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedFriendInterests: {
    fontSize: 14,
    color: 'gray',
  },
  addButton: {
    backgroundColor: 'blue', // Background color for the "Add Friend" button
    padding: 5,
    borderRadius: 5, // Rounded corners for the button
  },
  addButtonLabel: {
    color: 'white', // Text color for the "Add Friend" button
  },


});

export default Friends;

