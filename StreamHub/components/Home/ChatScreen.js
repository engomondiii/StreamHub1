import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ChatScreen = ({ route, navigation }) => {
  const { chatId } = route.params;
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey there!', sender: 'John', status: 'delivered' },
    { id: 2, text: 'Hi!', sender: 'Jane', status: 'read' },
    // Add more messages as needed
  ]);
  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    // Simulate sending message
    const newMessage = { id: messages.length + 1, text: messageText, sender: 'You', status: 'sending' };
    setMessages([...messages, newMessage]);
    setMessageText('');

    // Simulate receiving response after 2 seconds
    setTimeout(() => {
      const updatedMessages = messages.map(message =>
        message.id === newMessage.id ? { ...message, status: 'delivered' } : message
      );
      setMessages(updatedMessages);
    }, 2000);
  };

  // Additional options for chat menu
  const openChatMenu = () => {
    // Navigate to chat menu screen or implement other actions
    navigation.navigate('ChatMenu', { chatId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === 'You' ? styles.sentMessage : styles.receivedMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageStatus}>{item.status}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={messageText}
          onChangeText={setMessageText}
          multiline
        />
        <Button title="Send" onPress={sendMessage} />
      </View>

      <TouchableOpacity style={styles.menuButton} onPress={openChatMenu}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: '80%',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  messageStatus: {
    fontSize: 12,
    marginTop: 5,
    color: 'gray',
  },
  menuButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
