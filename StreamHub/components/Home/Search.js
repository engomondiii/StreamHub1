import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Import necessary icons

const Search = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]); // Define categories state
  const [selectedCategory, setSelectedCategory] = useState(); // Selected category state

  // Function to handle the search query input
  const handleSearch = () => {
    fetch()
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };

  useEffect(() => {
    // Fetch categories from your backend and update the categories state
    fetch()
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search for content..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Filter Options */}
      {/* Add your filter options UI here (e.g., Categories, Date, Popularity) */}
      {/* You can use buttons, dropdowns, or other UI elements as needed */}

      {/* Trending Tags */}
      {/* Add your Trending Tags component here */}

      {/* Search Results */}
      <ScrollView style={styles.resultsContainer}>
        {searchResults.map((result) => (
          <View key={result.id} style={styles.resultCard}>
            {/* Display content cards here (with media thumbnails and titles) */}
            {/* Add Like, Comment, and Share buttons/icons */}
          </View>
        ))}
      </ScrollView>

      {/* Advanced Search Options */}
      {/* Add your advanced search options UI here (Location, Language, Content Type) */}
      {/* You can use input fields, buttons, checkboxes, or other UI elements as needed */}

      {/* Clear Search Button */}
      <TouchableOpacity style={styles.clearButton} onPress={() => setSearchQuery()}>
        <Text style={styles.buttonTextWhite}>Clear Search</Text>
      </TouchableOpacity>

      {/* Empty State */}
      {/* Display the empty state when there are no search results */}
      {/* You can include suggested searches or related content suggestions here */}

      {/* Error State */}
      {/* Display an error message when there is an issue with the search functionality */}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  resultCard: {
    // Style for each search result card
    // Include media thumbnails, titles, and buttons/icons
    marginBottom: 20,
  },
  // Define styles for other UI elements (filter options, trending tags, advanced search options, etc.)
  // Add styles for buttons, checkboxes, etc.
});

export default Search;
