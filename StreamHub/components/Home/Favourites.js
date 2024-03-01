import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Share,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as NotificationsAPI from 'expo-notifications';

const Favourites = ({ route }) => {
  const [favouritesData, setFavouritesData] = useState([]);
  const [manualInput, setManualInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [sortingCriteria, setSortingCriteria] = useState('date'); // Default sorting criteria
  const [filterCriteria, setFilterCriteria] = useState('');
  const [viewingHistory, setViewingHistory] = useState([]);

  useEffect(() => {
    const { favouritesData: routeFavouritesData } = route.params;
    setFavouritesData(routeFavouritesData);
    setViewingHistory(routeFavouritesData.filter((item) => item.watched));
  }, [route.params]);

  useEffect(() => {
    const { favouritesData: routeFavouritesData } = route.params;
    setFavouritesData(routeFavouritesData);
  }, [route.params]);

  const renderFavouriteItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFullscreenClick(item)}>
      <View style={styles.favouriteItem}>
        <Text style={styles.favouriteText}>{item.user.username}'s Post</Text>
        <TouchableOpacity onPress={() => handleShareClick(item.id)}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderRecentlyWatchedItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFullscreenClick(item)}>
      <View style={styles.favouriteItem}>
        <Text style={styles.favouriteText}>{item.user.username}'s Recently Watched</Text>
      </View>
    </TouchableOpacity>
  );

  const handleManualAdd = () => {
    const newItem = { id: Date.now(), user: { username: 'userX' }, loved: true };
    setFavouritesData((prevData) => [newItem, ...prevData]);

    notifyUserInteraction('Added to Favorites', `You added a post to your favorites`);
  };

  const handleRemove = (itemId) => {
    setFavouritesData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  const handleOrganize = () => {
    console.log(`Organizing favorites based on category: ${categoryInput}`);
  };

  const handleSortChange = (value) => {
    setSortingCriteria(value);
  };

  const handleFilterChange = (text) => {
    setFilterCriteria(text);
  };

  const applySortingAndFiltering = () => {
    let sortedAndFilteredData = [...favouritesData];

    if (sortingCriteria === 'date') {
      sortedAndFilteredData.sort((a, b) => b.id - a.id);
    } else if (sortingCriteria === 'likes') {
      sortedAndFilteredData.sort((a, b) => b.likes - a.likes);
    }

    if (filterCriteria) {
      sortedAndFilteredData = sortedAndFilteredData.filter(
        (item) => item.user.username.toLowerCase().includes(filterCriteria.toLowerCase())
      );
    }

    return sortedAndFilteredData;
  };

  const notifyUserInteraction = (type, message) => {
    NotificationsAPI.scheduleNotificationAsync({
      content: {
        title: type === 'Added to Favorites' ? 'New Favorite' : 'Content Watched',
        body: message,
      },
      trigger: null,
    });
  };

  const handleShareClick = (itemId) => {
    const selectedItem = favouritesData.find((item) => item.id === itemId);

    if (selectedItem) {
      Share.share({
        message: `Check out this favorite post by ${selectedItem.user.username}: ${yourAppLink}`,
      });
    }
  };

  const handleFullscreenClick = (item) => {
    // Implement logic to display item in fullscreen (e.g., navigate to a fullscreen modal)
    console.log(`Clicked on fullscreen for item with ID: ${item.id}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Favourites</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter content to add to favorites"
        onChangeText={(text) => setManualInput(text)}
      />
      <TouchableOpacity onPress={handleManualAdd} style={styles.redButton}>
        <Text style={{ color: 'white' }}>Add to Favorites</Text>
      </TouchableOpacity>

      <FlatList
        data={applySortingAndFiltering()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFavouriteItem}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter category or tag for organization"
        onChangeText={(text) => setCategoryInput(text)}
      />
      <TouchableOpacity onPress={handleOrganize} style={styles.redButton}>
        <Text style={{ color: 'white' }}>Organize Favorites</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.label}>Sort by:</Text>
        <Picker
          style={styles.picker}
          selectedValue={sortingCriteria}
          onValueChange={handleSortChange}
        >
          <Picker.Item label="Date" value="date" />
          <Picker.Item label="Likes" value="likes" />
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Filter by username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          onChangeText={handleFilterChange}
        />
      </View>

      {favouritesData.length === 0 ? (
        <Text style={styles.noFavouritesText}>No favourites yet!</Text>
      ) : (
        <FlatList
          data={applySortingAndFiltering()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFavouriteItem}
        />
      )}

      {viewingHistory.length === 0 ? (
        <Text style={styles.noFavouritesText}>No recently watched items!</Text>
      ) : (
        <FlatList
          data={viewingHistory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderRecentlyWatchedItem}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  noFavouritesText: {
    color: 'white',
    textAlign: 'center',
  },
  favouriteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  favouriteText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 40,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  redButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Favourites;
