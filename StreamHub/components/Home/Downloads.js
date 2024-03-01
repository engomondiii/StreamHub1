import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ProgressBarAndroid, Alert } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import DownloadsApi from './DownloadsApi'; // Import the DownloadsApi

const Downloads = () => {
  const [downloadedItems, setDownloadedItems] = useState([]);
  const [ongoingDownloads, setOngoingDownloads] = useState([]);
  const [storageSpace, setStorageSpace] = useState({
    used: 0,
    available: 100,
  });

  useEffect(() => {
    fetchDownloads(); // Fetch downloads on component mount
  }, []);

  const fetchDownloads = async () => {
    try {
      const downloads = await DownloadsApi.getAllDownloads(); // Fetch all downloads from the backend
      setDownloadedItems(downloads);
    } catch (error) {
      console.error('Error fetching downloads:', error);
    }
  };

  const handleDeleteDownload = async (downloadId) => {
    try {
      await DownloadsApi.deleteDownload(downloadId); // Delete download from the backend
      const updatedDownloadedItems = downloadedItems.filter((item) => item.id !== downloadId);
      setDownloadedItems(updatedDownloadedItems);
      setStorageSpace((prevSpace) => ({
        ...prevSpace,
        used: prevSpace.used - 1, // Adjust storage space
        available: prevSpace.available + 1,
      }));
    } catch (error) {
      console.error('Error deleting download:', error);
    }
  };

  // Other functions remain the same

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SH</Text>
      <Text style={styles.downloadTitle}>Downloads</Text>
      <FlatList
        data={downloadedItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Text style={styles.ongoingDownloadsTitle}>Ongoing Downloads</Text>
      <FlatList
        data={ongoingDownloads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOngoingDownloadItem}
      />
      <Text style={styles.storageSpace}>
        Storage Used: {storageSpace.used} MB / {storageSpace.available} MB
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f', // Light dark background
    padding: 20,
  },
  downloadTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  downloadedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#333', // Dark background
    padding: 10,
    borderRadius: 10, // Round corners
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    color: 'white',
    fontSize: 18,
  },
  itemDate: {
    color: 'gray',
  },
  deleteButton: {
    padding: 10,
  },
  ongoingDownloadsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  ongoingDownloadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#333', // Dark background
    padding: 10,
    borderRadius: 10, // Round corners
  },
  cancelButton: {
    padding: 10,
  },
  retryButton: {
    padding: 10,
  },
  storageSpace: {
    color: 'white',
    marginTop: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10
  }
});

export default Downloads;
