import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput, Picker, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const HotLivestream = () => {
  const [livestreams, setLivestreams] = useState([]); // Replace with your livestream data
  const [selectedLivestream, setSelectedLivestream] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // Initial filter option
  const [sortOrder, setSortOrder] = useState('mostViewed'); // Initial sort order

  // Simulated livestream data (you should fetch this from a server)
  const initialLivestreams = [
    { id: 1, title: 'Livestream 1', creator: 'User1', viewers: 100, duration: '2h 30m' },
    { id: 2, title: 'Livestream 2', creator: 'User2', viewers: 50, duration: '1h 45m' },
    // Add more livestreams as needed
  ];

  // Function to filter livestreams based on the selected category
  const filterLivestreams = () => {
    // Replace this with your filtering logic based on the 'filter' state
    if (filter === 'all') {
      setLivestreams(initialLivestreams); // Show all livestreams
    } else {
      // Filter the livestreams based on the selected category
      const filteredLivestreams = initialLivestreams.filter((livestream) => {
        // Replace 'category' with the actual category property of livestreams
        return livestream.category === filter;
      });
      setLivestreams(filteredLivestreams);
    }
  };

  // Function to sort the livestreams based on the selected sort order
  const sortLivestreams = () => {
    // Replace this with your sorting logic based on the 'sortOrder' state
    if (sortOrder === 'mostViewed') {
      // Sort by most viewed
      setLivestreams([...livestreams].sort((a, b) => b.viewers - a.viewers));
    } else if (sortOrder === 'trending') {
      // Sort by trending criteria
      // Implement your trending sorting logic here
    } else if (sortOrder === 'newest') {
      // Sort by newest livestreams
      setLivestreams([...livestreams].sort((a, b) => b.id - a.id));
    }
  };

  // Function to handle refreshing the livestream list
  const handleRefresh = () => {
    // Implement your logic to fetch the latest livestream data and update the state
    // You can call the API or fetch data from your data source here
    console.log('Refreshing livestreams...');
  };

  return (
    <View style={styles.container}>

       {/* Red Text Logo at the Top Left */}
       <Text style={styles.logoText}>SH</Text>
      {/* Hot Livestreams Title */}
      <Text style={styles.title}>Hot Livestreams</Text>

      {/* Filter and Search Bar */}
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
          style={styles.filterPicker}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Category 1" value="category1" />
          <Picker.Item label="Category 2" value="category2" />
          {/* Add more categories as needed */}
        </Picker>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Livestreams"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Sort Order Dropdown */}
      <View style={styles.sortOrderContainer}>
        <Picker
          selectedValue={sortOrder}
          onValueChange={(itemValue) => setSortOrder(itemValue)}
          style={styles.sortOrderPicker}
        >
          <Picker.Item label="Most Viewed" value="mostViewed" />
          <Picker.Item label="Trending" value="trending" />
          <Picker.Item label="Newest" value="newest" />
        </Picker>
      </View>

      {/* Livestream List */}
      <ScrollView style={styles.livestreamList} showsVerticalScrollIndicator={false}>
        {livestreams.map((livestream) => (
          <TouchableOpacity
            key={livestream.id}
            style={styles.livestreamItem}
            onPress={() => setSelectedLivestream(livestream)}
          >
            <Image source={{ uri: 'livestream_thumbnail_url' }} style={styles.thumbnail} />
            <View style={styles.livestreamDetails}>
              <Text style={styles.livestreamTitle}>{livestream.title}</Text>
              <Text style={styles.livestreamCreator}>{livestream.creator}</Text>
              <Text style={styles.viewerCount}>{`${livestream.viewers} viewers`}</Text>
              <Text style={styles.duration}>{livestream.duration}</Text>
              <TouchableOpacity style={styles.watchNowButton}>
                <Text style={styles.watchNowButtonText}>Watch Now</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Additional Livestream Information and Interaction (if a livestream is selected) */}
      {selectedLivestream && (
        <View style={styles.selectedLivestreamContainer}>
          <Image source={{ uri: 'selected_livestream_thumbnail_url' }} style={styles.selectedLivestreamThumbnail} />
          <View style={styles.selectedLivestreamDetails}>
            <Text style={styles.selectedLivestreamTitle}>{selectedLivestream.title}</Text>
            <Text style={styles.selectedLivestreamCreator}>{selectedLivestream.creator}</Text>
            <Text style={styles.selectedLivestreamViewerCount}>{`${selectedLivestream.viewers} viewers`}</Text>
            <Text style={styles.selectedLivestreamDuration}>{selectedLivestream.duration}</Text>
            <TouchableOpacity style={styles.likeButton}>
              <FontAwesome name="heart" size={24} color="red" />
              <Text style={styles.likeButtonText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentButton}>
              <Entypo name="chat" size={24} color="green" />
              <Text style={styles.commentButtonText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <FontAwesome name="share" size={24} color="blue" />
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
          </View>   
                    {/* Livestream Interaction */}
          <View style={styles.livestreamInteraction}>
            <TouchableOpacity style={styles.fullscreenButton}>
              <FontAwesome name="arrows-alt" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.volumeControl}>
              <Entypo name="volume" size={24} color="white" />
              <TextInput
                style={styles.volumeSlider}
                placeholder="Volume"
                // Implement your volume control logic here
              />
            </View>
            <TouchableOpacity style={styles.pausePlayButton}>
              <FontAwesome name="pause" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Livestream Chat Section */}
          <View style={styles.chatSection}>
            {/* Display chat messages and allow users to send messages */}
            {/* You can implement chat functionality here */}
          </View>

          {/* Livestream End Time */}
          <Text style={styles.endTime}>{/* Implement logic to calculate and display end time */}</Text>

          {/* Report Livestream Button */}
          <TouchableOpacity style={styles.reportButton}>
            <FontAwesome name="exclamation-triangle" size={24} color="red" />
            <Text style={styles.reportButtonText}>Report Livestream</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity style={styles.fabButton}>
        <FontAwesome name="video-camera" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  filterPicker: {
    flex: 1,
    color: 'white',
  },
  searchInput: {
    flex: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  sortOrderContainer: {
    marginTop: 10,
  },
  sortOrderPicker: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    color: 'white',
  },
  livestreamList: {
    flex: 1,
    marginTop: 10,
  },
  livestreamItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  thumbnail: {
    width: 100,
    height: 75,
    borderRadius: 10,
  },
  livestreamDetails: {
    flex: 1,
    marginLeft: 10,
  },
  livestreamTitle: {
    color: 'white',
  },
  livestreamCreator: {
    color: 'white',
  },
  viewerCount: {
    color: 'white',
  },
  duration: {
    color: 'white',
  },
  watchNowButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
  },
  watchNowButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  selectedLivestreamContainer: {
    marginTop: 20,
  },
  selectedLivestreamThumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  selectedLivestreamDetails: {
    marginTop: 10,
  },
  selectedLivestreamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  selectedLivestreamCreator: {
    color: 'white',
  },
  selectedLivestreamViewerCount: {
    color: 'white',
  },
  selectedLivestreamDuration: {
    color: 'white',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  shareButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  livestreamInteraction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  fullscreenButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    padding: 10,
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeSlider: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  pausePlayButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    padding: 10,
  },
  chatSection: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  chatInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  chatMessages: {
    // Implement styles for chat messages
  },
  endTime: {
    color: 'white',
    marginTop: 10,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  reportButtonText: {
    color: 'red',
    marginLeft: 5,
  },
  fabButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red', // Red logo text
    marginBottom: 10,
  },
});

export default HotLivestream;