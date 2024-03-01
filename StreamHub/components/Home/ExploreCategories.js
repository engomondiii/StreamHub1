import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput, StyleSheet } from 'react-native';
import {FontAwesome } from '@expo/vector-icons'; // Import the required icons

const ExploreCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Technology', icon: 'laptop', content: [] },
    { id: 2, name: 'Entertainment', icon: 'film', content: [] },
    { id: 3, name: 'Sports', icon: 'basketball', content: [] },
    { id: 4, name: 'Fashion', icon: 'shopping-bag', content: [] },
    { id: 5, name: 'Travel', icon: 'plane', content: [] },
    // Add more categories with their respective icons
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [filteredContent, setFilteredContent] = useState([]);

  // Simulated data for featured content (replace with your actual data)
  const featuredContent = [
    {
      id: 1,
      title: 'Featured Content 1',
      type: 'video',
      //thumbnail: require(), // Replace with actual image paths
    },
    // Add more featured content
  ];

  useEffect(() => {
    // Load content for the selected category when selectedCategory changes
    if (selectedCategory) {
      // Replace the following with logic to fetch content based on the selected category
      const contentForCategory = []; // Simulated content, replace with actual data
      setFilteredContent(contentForCategory);
    }
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.customHeader}>
        <Text style={styles.logo}>SH</Text>
      </View>
      <View style={styles.categoryList}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryItem,
                selectedCategory === item.id && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(item.id)}
            >
              <FontAwesome name={item.icon} size={32} color="white" />
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.contentList}>
        <FlatList
          data={selectedCategory ? filteredContent : featuredContent}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.contentItem}>
              <Image source={item.thumbnail} style={styles.contentThumbnail} />
              <Text style={styles.contentTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryItem: {
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedCategory: {
    backgroundColor: 'red',
  },
  categoryName: {
    color: 'white',
    marginTop: 5,
  },
  contentList: {
    flex: 1,
  marginBottom: 20,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contentThumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  contentTitle: {
    color: 'white',
    fontSize: 18,
  },
});

export default ExploreCategories;
