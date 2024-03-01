// UpgradeToPremium.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const UpgradeToPremium = () => {
  // Simulate user subscription status. Replace this with actual user data from your backend.
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  // Function to handle the premium upgrade
  const handlePremiumUpgrade = () => {
    // Simulate the backend API call to upgrade the user to premium
    // In a real-world scenario, you would make an API call to your backend
    // and handle the upgrade process there.

    // For now, we'll simulate the success case
    setIsPremiumUser(true);

    Alert.alert('Success', 'You have successfully upgraded to Premium!');
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>

      <Text style={styles.title}>Upgrade to Premium</Text>

      {isPremiumUser ? (
        <Text style={styles.message}>You are already a Premium User.</Text>
      ) : (
        <View>
          {/* Add premium features and upgrade options here */}
          <TouchableOpacity style={styles.upgradeButton} onPress={handlePremiumUpgrade}>
            <Text style={styles.buttonText}>Upgrade Now</Text>
          </TouchableOpacity>

          <Text style={styles.description}>
            Unlock premium features such as ad-free streaming, offline downloads, and more!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222', // Light dark background color
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  },
  logoSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  upgradeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default UpgradeToPremium;
