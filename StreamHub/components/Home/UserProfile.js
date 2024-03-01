import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import UserProfileApi from './UserProfileApi'; // Import the UserProfileApi

const UserProfile = () => {
  const [user, setUser] = useState({
    username: '',
    name: '',
    bio: '',
    followers: 0,
    following: 0,
    posts: 0,
    profileImage: '',
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user profile and posts data when component mounts
    fetchUserProfile();
    fetchUserPosts();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userProfile = await UserProfileApi.getUserProfile();
      setUser(userProfile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchUserPosts = async () => {
    try {
      // You may need to implement this function in UserProfileApi if posts are available
      // Otherwise, handle posts data according to your backend API
      // const userPosts = await UserProfileApi.getUserPosts();
      // setPosts(userPosts);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  const editProfile = () => {
    // Implement logic to allow users to edit their profile.
    // This can open a modal or navigate to an edit profile screen.
  };

  const handleLogout = () => {
    // Implement logic to log the user out and navigate to the login screen.
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* User Information */}
        <View style={styles.profileHeader}>
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <Text style={styles.followers}>Followers: {user.followers} | Following: {user.following}</Text>
        </View>

        {/* Edit Profile */}
        <TouchableOpacity onPress={editProfile} style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Posts and Content */}
        <View style={styles.postsContainer}>
          {posts.map((post) => (
            <View key={post.id} style={styles.postItem}>
              <Image source={{ uri: post.image }} style={styles.postImage} />
              <View style={styles.postActions}>
                <TouchableOpacity>
                  <FontAwesome name="heart" size={24} color="red" />
                  <Text>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialIcons name="mode-comment" size={24} color="black" />
                  <Text>{post.comments}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Settings */}
        <View style={styles.settings}>
          {/* Implement various settings options, including changing password, privacy settings, etc. */}
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.text}>Change Password</Text>
            <Entypo name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.text}>Privacy Settings</Text>
            <Entypo name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
          {/* Add more settings items as needed */}
        </View>

        {/* Logout */}
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  name: {
    fontSize: 16,
    color: 'white',
  },
  bio: {
    fontSize: 14,
    marginTop: 10,
    color: 'white',
  },
  followers: {
    fontSize: 14,
    marginTop: 5,
    color: 'white',
  },
  editProfileButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  editProfileButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20, // Add margin top for separation
  },
  postItem: {
    width: '48%',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  settings: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginTop: 20, // Add margin top for separation
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
});

export default UserProfile;
