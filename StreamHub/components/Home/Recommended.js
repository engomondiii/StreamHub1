import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Recommended = () => {
  const [contentList, setContentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Simulated content data (you should fetch this from a server)
  const initialContent = [
    {
      id: 1,
      title: 'Sample Content 1',
      username: 'user1',
      timestamp: '2 hours ago',
      description: 'This is a sample content description.',
      //thumbnail: '',
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      title: 'Sample Content 2',
      username: 'user2',
      timestamp: '3 hours ago',
      description: 'Another sample content description.',
      //thumbnail: '',
      likes: 8,
      comments: 3,
    },
    // Add more content items as needed
  ];

  useEffect(() => {
    // Simulate loading more content when the user scrolls
    if (loading) return;

    setLoading(true);

    // Replace this with your logic to fetch more content based on the 'page' variable
    // You may use pagination or infinite scrolling
    // For demonstration, we'll simulate loading more content after a delay
    setTimeout(() => {
      const newContent = [
        // Add more content items as needed
      ];
      setContentList([...contentList, ...newContent]);
      setLoading(false);
      setPage(page + 1);
    }, 1000);
  }, [loading]);

  const handleLike = (contentId) => {
    // Implement logic to handle content liking
    // You can update the state or make an API request to record the like
  };

  const handleComment = (contentId) => {
    // Implement logic to show comments for the selected content
    // For demonstration purposes, we'll log a message
    console.log('Fetching comments for content', contentId);
  };

  const handleShare = (contentId) => {
    // Implement logic to share the selected content
    // You can use libraries like Share or implement a custom share functionality
  };

  const handleSave = (contentId) => {
    // Implement logic to save content to the user's collection
    // You can update the state or make an API request to save the content
  };

  const renderItem = ({ item }) => (
    <View style={styles.contentItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.contentDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.userRow}>
          <Image source={{}} style={styles.profilePicture} />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleLike(item.id)}>
          <FontAwesome name="heart" size={24} color={item.likes > 0 ? 'red' : 'black'} />
          <Text style={styles.iconText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleComment(item.id)}>
          <FontAwesome name="comment" size={24} color="black" />
          <Text style={styles.iconText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleShare(item.id)}>
          <FontAwesome name="share" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleSave(item.id)}>
          <FontAwesome name="bookmark" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SH</Text>
      <FlatList
        data={contentList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.1}
        onEndReached={() => setLoading(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b', // Light dark background color
    padding: 10,
  },
  logo: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  contentDetails: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30, // Rounded corners
    backgroundColor: 'red', // Red buttons
    paddingHorizontal: 10,
  },
  iconText: {
    marginLeft: 5,
    color: 'white',
  },
});

export default Recommended;
