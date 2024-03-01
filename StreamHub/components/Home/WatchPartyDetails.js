import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WatchPartyDetails = ({ route }) => {
  // Extract relevant data about the selected watch party from the route
  const { watchParty } = route.params;

  return (
    <View style={styles.container}>
      {/* Red text logo at the top left */}
      <Text style={styles.logo}>SH</Text>

      {/* Display host details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Host: {watchParty.host}</Text>
        {/* Add more host information here */}
        <Text style={styles.hostInfo}>
          {/* Add host information here */}
          {/* For example: Host Bio, Profile Picture, etc. */}
        </Text>
      </View>

      {/* Display event description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Event Description:</Text>
        <Text style={styles.description}>{watchParty.description}</Text>
      </View>

      {/* Display list of participants */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Participants:</Text>
        {/* Render the list of participants */}
        {watchParty.participants.map((participant, index) => (
          <Text key={index} style={styles.participantName}>
            {participant.name}
          </Text>
        ))}
      </View>

      {/* Round red button */}
      <TouchableOpacity style={[styles.button, styles.redButton]}>
        <Text style={styles.buttonText}>Red Button</Text>
      </TouchableOpacity>

      {/* Round blue button */}
      <TouchableOpacity style={[styles.button, styles.blueButton]}>
        <Text style={styles.buttonText}>Blue Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light dark background
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Changed text color to black
  },
  hostInfo: {
    fontSize: 14,
    color: 'black', // Changed text color to black
    // Add any styles for host information here
  },
  description: {
    fontSize: 14,
    color: 'black', // Changed text color to black
  },
  participantName: {
    fontSize: 14,
    color: 'black', // Changed text color to black
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

export default WatchPartyDetails;
