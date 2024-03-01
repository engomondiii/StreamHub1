import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';

const ManageUploadContent = () => {
  const [privacySetting, setPrivacySetting] = useState('Public');
  const [notificationPreferences, setNotificationPreferences] = useState('Real-Time');
  const [defaultAlbum, setDefaultAlbum] = useState('General');
  const [uploadRestrictions, setUploadRestrictions] = useState('Everyone');
  const [autoTaggingEnabled, setAutoTaggingEnabled] = useState(true);

  const handlePrivacySettingChange = (newSetting) => {
    setPrivacySetting(newSetting);
  };

  const handleNotificationPreferencesChange = (newPreferences) => {
    setNotificationPreferences(newPreferences);
  };

  const handleDefaultAlbumChange = (newAlbum) => {
    setDefaultAlbum(newAlbum);
  };

  const handleUploadRestrictionsChange = (newRestrictions) => {
    setUploadRestrictions(newRestrictions);
  };

  const handleAutoTaggingToggle = () => {
    setAutoTaggingEnabled((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>
       
       {/* Title Section */}
       <View>
        <Text style={styles.title}>Manage Upload Content</Text>
      </View>


      <ScrollView contentContainerStyle={styles.scrollContent}>

      {/* Content Privacy Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Content Privacy</Text>
        <TouchableOpacity onPress={() => handlePrivacySettingChange('Public')}>
          <Text style={privacySetting === 'Public' ? styles.selectedOption : styles.option}>
            Public
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePrivacySettingChange('Friends Only')}>
          <Text style={privacySetting === 'Friends Only' ? styles.selectedOption : styles.option}>
            Friends Only
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePrivacySettingChange('Private')}>
          <Text style={privacySetting === 'Private' ? styles.selectedOption : styles.option}>
            Private
          </Text>
        </TouchableOpacity>
      </View>

      {/* Upload Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upload Notifications</Text>
        <TouchableOpacity onPress={() => handleNotificationPreferencesChange('Real-Time')}>
          <Text
            style={
              notificationPreferences === 'Real-Time' ? styles.selectedOption : styles.option
            }>
            Real-Time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNotificationPreferencesChange('Custom')}>
          <Text
            style={
              notificationPreferences === 'Custom' ? styles.selectedOption : styles.option
            }>
            Custom
          </Text>
        </TouchableOpacity>
      </View>

      {/* Default Album */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Default Album</Text>
        <TouchableOpacity onPress={() => handleDefaultAlbumChange('General')}>
          <Text style={defaultAlbum === 'General' ? styles.selectedOption : styles.option}>
            General
          </Text>
        </TouchableOpacity>
        {/* Add more album options as needed */}
      </View>

      {/* Upload Restrictions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upload Restrictions</Text>
        <TouchableOpacity onPress={() => handleUploadRestrictionsChange('Everyone')}>
          <Text
            style={
              uploadRestrictions === 'Everyone' ? styles.selectedOption : styles.option
            }>
            Everyone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleUploadRestrictionsChange('Friends Only')}>
          <Text
            style={
              uploadRestrictions === 'Friends Only' ? styles.selectedOption : styles.option
            }>
            Friends Only
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleUploadRestrictionsChange('Only Me')}>
          <Text
            style={
              uploadRestrictions === 'Only Me' ? styles.selectedOption : styles.option
            }>
            Only Me
          </Text>
        </TouchableOpacity>
      </View>

      {/* Auto-Tagging */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Auto-Tagging</Text>
        <TouchableOpacity onPress={handleAutoTaggingToggle}>
          <Text style={autoTaggingEnabled ? styles.selectedOption : styles.option}>
            {autoTaggingEnabled ? 'Enabled' : 'Disabled'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Additional Tips */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Tips</Text>
        <Text style={styles.tipText}>
          - Regularly review and update privacy settings to align with evolving preferences.
        </Text>
        <Text style={styles.tipText}>
          - Utilize default albums for efficient organization and management of uploaded content.
        </Text>
        <Text style={styles.tipText}>
          - Experiment with auto-tagging features to enhance content discoverability.
        </Text>
        <Text style={styles.tipText}>
          - Stay informed about interactions with uploaded content by configuring notification
          preferences.
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222', // Light dark background color
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  option: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  selectedOption: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tipText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
  scrollContent: {
    paddingBottom: 80, // Adjust this value based on your content length
  },
});

export default ManageUploadContent;
