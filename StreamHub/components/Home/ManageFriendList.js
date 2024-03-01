import React, { useState } from 'react';
import { View, Text,ScrollView, TouchableOpacity, FlatList, StyleSheet, TextInput, Button } from 'react-native';

// Dummy data for friends list
const dummyFriendsData = [
  { id: '1', username: 'User1' },
  { id: '2', username: 'User2' },
  { id: '3', username: 'User3' },
  // Add more dummy data as needed
];

const ManageFriendList = () => {
  const [friends, setFriends] = useState(dummyFriendsData);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAcceptRequest = (requestId) => {
    // Logic to accept friend request
  };

  const handleDeclineRequest = (requestId) => {
    // Logic to decline friend request
  };

  const handleSendFriendRequest = (userId) => {
    // Logic to send friend request
  };

  const handleRemoveFriend = (friendId) => {
    // Logic to remove friend
  };

  const handleBlockUser = (userId) => {
    // Logic to block user
  };

  const handleUnblockUser = (userId) => {
    // Logic to unblock user
  };

  const renderFriendItem = ({ item }) => (
    <View style={styles.friendItem}>
      <Text>{item.username}</Text>
      <TouchableOpacity onPress={() => handleRemoveFriend(item.id)}>
        <Text style={styles.removeFriendText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const renderBlockedUserItem = ({ item }) => (
    <View style={styles.blockedUserItem}>
      <Text>{item.username}</Text>
      <TouchableOpacity onPress={() => handleUnblockUser(item.id)}>
        <Text style={styles.unblockUserText}>Unblock</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
     {/* Logo Section */}
     <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>
       
       {/* Title Section */}
       <View>
        <Text style={styles.title}>Manage Friends List</Text>
      </View>


      <ScrollView contentContainerStyle={styles.scrollContent}>

      {/* Friend Requests Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Friend Requests</Text>
        {/* Render pending friend requests */}
        <FlatList
          data={friendRequests}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.friendRequestItem}>
              <Text>{item.username} sent you a friend request</Text>
              <View style={styles.friendRequestButtons}>
                <TouchableOpacity onPress={() => handleAcceptRequest(item.id)}>
                  <Text style={styles.acceptRequestText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeclineRequest(item.id)}>
                  <Text style={styles.declineRequestText}>Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {/* Render sent friend requests */}
        <Text style={styles.sentRequestsTitle}>Sent Friend Requests</Text>
        <FlatList
          data={sentRequests}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.sentRequestItem}>
              <Text>You sent a friend request to {item.username}</Text>
            </View>
          )}
        />
      </View>

      {/* Friends List Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Friends List</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search friends..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {/* Render friends list based on search */}
        <FlatList
          data={friends.filter((friend) =>
            friend.username.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFriendItem}
        />
      </View>

      {/* Privacy Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy Settings</Text>
        {/* Add privacy settings components */}
      </View>

      {/* Blocked Users Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Blocked Users</Text>
        {/* Render blocked users list */}
        <FlatList
          data={blockedUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderBlockedUserItem}
        />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222', // Light dark background color
  },
  logoSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  removeFriendText: {
    color: 'red',
  },
  blockedUserItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  unblockUserText: {
    color: 'green',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  friendRequestItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  friendRequestButtons: {
    flexDirection: 'row',
  },
  acceptRequestText: {
    color: 'green',
    marginRight: 10,
  },
  declineRequestText: {
    color: 'red',
  },
  sentRequestsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  sentRequestItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  scrollContent: {
    paddingBottom: 80, // Adjust this value based on your content length
  },
});

export default ManageFriendList;
