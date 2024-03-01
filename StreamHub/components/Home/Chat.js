import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Modal, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const Chat = ({ navigation }) => {
  const [chats, setChats] = useState([
    { id: 1, name: 'John Doe', lastMessage: 'Hey there!', time: '10:30 AM', timestamp: new Date('2022-02-22T10:30:00'), unreadMessages: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Hi!', time: '11:45 AM', timestamp: new Date('2022-02-22T11:45:00'), unreadMessages: 0 },
    // Add more chat data as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('mostRecent');
  const [filterCriteria, setFilterCriteria] = useState('all');
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null); // New state variable for error handling

  const navigateToChat = (chatId) => {
    navigation.navigate('ChatScreen', { chatId });
  };

  const formatTime = (date) => {
    return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
  };

  const totalUnreadMessages = chats.reduce((total, chat) => total + chat.unreadMessages, 0);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterCriteria === 'all' || chat.unreadMessages > 0)
  );

  const sortedChats = filteredChats.sort((a, b) => {
    if (sortCriteria === 'mostRecent') {
      return b.timestamp - a.timestamp;
    } else if (sortCriteria === 'alphabetical') {
      return a.name.localeCompare(b.name);
    }
  });

  const openActionsMenu = (chat) => {
    setSelectedChat(chat);
    setShowActionsMenu(true);
  };

  const closeActionsMenu = () => {
    setShowActionsMenu(false);
  };

  const handleDelete = (chat) => {
    // Implement delete functionality here
    console.log('Deleting chat:', chat.name);
    closeActionsMenu();
  };

  const handleArchive = (chat) => {
    // Implement archive functionality here
    console.log('Archiving chat:', chat.name);
    closeActionsMenu();
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate fetching new data
    setTimeout(() => {
      setRefreshing(false);
      setError(null); // Clear error state after successful refresh
    }, 2000); // Simulating a delay of 2 seconds
  };

  // Simulate error handling for demonstration purposes
  const simulateError = () => {
    setError('Network Error: Unable to fetch data. Please try again later.');
  };

  useEffect(() => {
    // Navigate to Chats by default
    navigation.navigate('Chats');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Groups')}>
          <View style={styles.iconTextContainer}>
            <Ionicons name="people" size={24} color="black" />
            <Text style={styles.headerText}>Groups</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <View style={styles.iconTextContainer}>
            <Ionicons name="chatbox" size={24} color="black" />
            <Text style={styles.headerText}>Chats ({totalUnreadMessages})</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Updates')}>
          <View style={styles.iconTextContainer}>
            <Ionicons name="notifications" size={24} color="black" />
            <Text style={styles.headerText}>Updates</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calls')}>
          <View style={styles.iconTextContainer}>
            <Ionicons name="call" size={24} color="black" />
            <Text style={styles.headerText}>Calls</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <Picker
          style={styles.picker}
          selectedValue={sortCriteria}
          onValueChange={(itemValue, itemIndex) => setSortCriteria(itemValue)}>
          <Picker.Item label="Most Recent" value="mostRecent" />
          <Picker.Item label="Alphabetical" value="alphabetical" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={filterCriteria}
          onValueChange={(itemValue, itemIndex) => setFilterCriteria(itemValue)}>
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Unread" value="unread" />
        </Picker>
      </View>

      {error ? ( // Conditionally render error message
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={simulateError}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : chats.length === 0 ? ( // Conditionally render empty state
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No conversations found.</Text>
        </View>
      ) : (
        <FlatList
          data={sortedChats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToChat(item.id)}>
              <View style={styles.chatItem}>
                <View style={styles.avatarContainer}>
                  <Ionicons name="person-circle-outline" size={50} color="gray" />
                </View>
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                  <Text style={styles.time}>{formatTime(item.timestamp)}</Text>
                  {item.unreadMessages > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadText}>{item.unreadMessages}</Text>
                    </View>
                  )}
                  <TouchableOpacity onPress={() => openActionsMenu(item)}>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}

      <Modal
        visible={showActionsMenu}
        animationType="slide"
        transparent={true}
        onRequestClose={closeActionsMenu}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => handleDelete(selectedChat)}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleArchive(selectedChat)}>
              <Text>Archive</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 16,
    marginLeft: 5,
  },
  iconTextContainer: {
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 5,
  },
  picker: {
    width: 150,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: -5, // Adjust this value as needed to align the avatars
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 2,
  },
  time: {
    fontSize: 14,
    color: '#999',
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  retryText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
  },
});

export default Chat;
