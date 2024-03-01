import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

const VirtualHangouts = () => {
  const [hangouts, setHangouts] = useState([]);
  const [creatingHangout, setCreatingHangout] = useState(false);
  const [joiningHangout, setJoiningHangout] = useState(false);
  const [selectedHangout, setSelectedHangout] = useState(null);
  const [hangoutName, setHangoutName] = useState('');
  const [hostName, setHostName] = useState('');
  const [location, setLocation] = useState('');
  const [participants, setParticipants] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch a list of available hangout spaces when the component mounts
    // You'll need an API or data source for this
    // Simulated hangouts for demonstration
    const simulatedHangouts = [
      { id: 1, hangoutName: 'Hangout 1', hostName: 'User 1', location: 'Virtual World 1', participants: [] },
      { id: 2, hangoutName: 'Hangout 2', hostName: 'User 2', location: 'Virtual World 2', participants: [] },
      // Add more hangout entries here
    ];
    setHangouts(simulatedHangouts);
  }, []);

  const createHangout = () => {
    // Implement logic to create a new hangout space
    // Update the hangouts state with the new hangout
    // Close the creation modal
  };

  const joinHangout = () => {
    // Implement logic to join the selected hangout
    // Add the user to the participants list
    // Show the hangout space with avatars and chat
  };

  const leaveHangout = () => {
    // Implement logic to leave the current hangout
    // Remove the user from the participants list
    // Close the hangout space
  };

  const sendChatMessage = () => {
    // Implement logic to send chat messages within the hangout
    // Update the chatMessages state
  };
   
    

  const startHangout = () => {
    // Implement logic to start the hangout
    // This can include any actions specific to starting a hangout
  };
  
  const customizeHangout = () => {
    // Implement logic for customizing the hangout
    // For example, changing settings or appearance
  };
  
  const inviteFriends = () => {
    // Implement logic to invite friends to the hangout
    // You can use modals or other UI components for this
  };
  
  const renderHangoutItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedHangout(item)} style={styles.hangoutItem}>
      <Text style={styles.hangoutItemText}>{item.hangoutName}</Text>
      <Text style={styles.hangoutItemText}>Host: {item.hostName}</Text>
      <Text style={styles.hangoutItemText}>Location: {item.location}</Text>
      <Text style={styles.hangoutItemText}>Participants: {item.participants.length}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Virtual Hangouts</Text>

      <TouchableOpacity
        onPress={() => setCreatingHangout(true)}
        style={styles.createHangoutButton}
      >
        <Text style={styles.buttonText}>Create Hangout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setJoiningHangout(true)}
        style={styles.joinHangoutButton}
      >
        <Text style={styles.buttonText}>Join Hangout</Text>
      </TouchableOpacity>

      <FlatList
        data={hangouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderHangoutItem}
      />

      {/* Modal for creating a new hangout */}
      <Modal visible={creatingHangout} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Create Hangout</Text>
          <TextInput
            placeholder="Hangout Name"
            value={hangoutName}
            onChangeText={(text) => setHangoutName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Your Name"
            value={hostName}
            onChangeText={(text) => setHostName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Location"
            value={location}
            onChangeText={(text) => setLocation(text)}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={createHangout}
            style={styles.createHangoutButton}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCreatingHangout(false)}
            style={styles.cancelButton}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal for joining a hangout */}
      <Modal visible={joiningHangout} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Join Hangout</Text>
          <ScrollView style={styles.hangoutList}>
            {hangouts.map((hangout) => (
              <TouchableOpacity
                key={hangout.id}
                onPress={() => joinHangout(hangout)}
                style={styles.joinHangoutItem}
              >
                <Text style={styles.joinHangoutItemText}>
                  {hangout.hangoutName}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            onPress={() => setJoiningHangout(false)}
            style={styles.cancelButton}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Hangout space */}
      {selectedHangout && (
        <View style={styles.hangoutContainer}>
          <Text style={styles.hangoutHeader}>{selectedHangout.hangoutName}</Text>
          <TouchableOpacity onPress={leaveHangout} style={styles.leaveHangoutButton}>
            <Text style={styles.buttonText}>Leave Hangout</Text>
          </TouchableOpacity>
          {selectedHangout.hostName === hostName && (
            <TouchableOpacity onPress={startHangout} style={styles.startHangoutButton}>
              <Text style={styles.buttonText}>Start Hangout</Text>
            </TouchableOpacity>
          )}
          {selectedHangout.hostName === hostName && (
            <TouchableOpacity
              onPress={customizeHangout}
              style={styles.customizeHangoutButton}
            >
              <Text style={styles.buttonText}>Customize Hangout</Text>
            </TouchableOpacity>
          )}
          {selectedHangout.hostName === hostName && (
            <TouchableOpacity onPress={inviteFriends} style={styles.inviteFriendsButton}>
              <Text style={styles.buttonText}>Invite Friends</Text>
            </TouchableOpacity>
          )}
          {/* Avatars and chat messages */}
          {participants.map((participant, index) => (
            <View key={index} style={styles.avatarContainer}>
              <Image source={participant.avatar} style={styles.avatar} />
            </View>
            ))}

          <FlatList
          data={chatMessages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.chatMessage}>{item.text}</Text>
          )}
        />
        <TextInput
          placeholder="Type a message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={sendChatMessage}
          style={styles.sendMessageButton}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f2f2f2', // Light background color
  padding: 20,
},
heading: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'red', // Red text color
  marginTop: 10,
  marginBottom: 20,
},
createHangoutButton: {
  backgroundColor: 'red', // Red button
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  marginBottom: 10,
},
joinHangoutButton: {
  backgroundColor: 'blue', // Blue button
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  marginBottom: 10,
},
buttonText: {
  color: 'white', // White text color
  fontWeight: 'bold',
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  padding: 20,
},
modalHeading: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
},
input: {
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
},
hangoutList: {
  maxHeight: 200,
  marginBottom: 20,
},
hangoutItem: {
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
},
hangoutItemText: {
  fontWeight: 'bold',
},
joinHangoutItem: {
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
},
joinHangoutItemText: {
  fontWeight: 'bold',
},
hangoutContainer: {
  flex: 1,
},
hangoutHeader: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
},
leaveHangoutButton: {
  backgroundColor: 'red',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  marginBottom: 10,
},
startHangoutButton: {
  backgroundColor: 'blue',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  marginBottom: 10,
},
customizeHangoutButton: {
  backgroundColor: 'red',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  marginBottom: 10,
},
inviteFriendsButton: {
  backgroundColor: 'blue',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  marginBottom: 20,
},
avatarContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
},
avatar: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
chatMessage: {
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
},
sendMessageButton: {
  backgroundColor: 'blue',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  marginBottom: 20,
},
});

export default VirtualHangouts;

