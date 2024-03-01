import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const WatchParties = ({ navigation }) => {
  const [watchPartiesData, setWatchPartiesData] = useState([]);

  // Fetch watch party data from your backend (replace with your API endpoint)
  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((data) => {
        // Update the state with fetched watch party data
        setWatchPartiesData(data);
      })
      .catch((error) => {
        console.error('Error fetching watch party data:', error);
      });
  }, []);

  const renderItem = (watchParty) => (
    <TouchableOpacity
      key={watchParty.id}
      style={styles.watchPartyItem}
      onPress={() => {
        // Navigate to WatchPartyDetails screen with the selected watch party
        navigation.navigate('WatchPartyDetails', { watchParty });
      }}
    >
      <Text style={styles.watchPartyTitle}>{watchParty.eventName}</Text>
      <Text style={styles.watchPartyDetails}>
        Host: {watchParty.host} | Start Time: {watchParty.startTime} | Participants: {watchParty.participants}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>SH</Text>
      </View>
      <Text style={styles.screenTitle}>Watch Parties</Text>
      <ScrollView style={styles.watchPartyList}>
        {watchPartiesData.map((watchParty) => renderItem(watchParty))}
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={() => {
          // Navigate to CreateWatchParty screen
          navigation.navigate('CreateWatchParty');
        }}
      >
        <Text style={styles.buttonText}>Create Watch Party</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.blueButton]}
        onPress={() => {
          // Navigate to JoinWatchParty screen
          navigation.navigate('JoinWatchParty');
        }}
      >
        <Text style={styles.buttonText}>Join Watch Party</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f', // Dark background
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  screenTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  watchPartyList: {
    flex: 1,
  },
  watchPartyItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  watchPartyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  watchPartyDetails: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: 'red',
  },
  blueButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WatchParties;
