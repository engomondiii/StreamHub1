import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const Settings = () => {
   
  const navigation = useNavigation();



  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [contentVisibility, setContentVisibility] = useState('public');
  const [wiFiOnly, setWiFiOnly] = useState(true);
  const [videoQuality, setVideoQuality] = useState('medium');
  const [audioQuality, setAudioQuality] = useState('medium');
  const [appLanguage, setAppLanguage] = useState('english');
  const [region, setRegion] = useState('us');
  const [darkMode, setDarkMode] = useState(false);
  const [clearCacheConfirmation, setClearCacheConfirmation] = useState(false);
  const [downloadLocation, setDownloadLocation] = useState('internal');
  const [deactivateAccountConfirmation, setDeactivateAccountConfirmation] = useState(false);
  const [logoutConfirmation, setLogoutConfirmation] = useState(false);
  const [removeFriendConfirmation, setRemoveFriendConfirmation] = useState(false);
  const [deleteContentConfirmation, setDeleteContentConfirmation] = useState(false);
  const [changeUsernameConfirmation, setChangeUsernameConfirmation] = useState(false);
  const [changePasswordConfirmation, setChangePasswordConfirmation] = useState(false);
  const [customizationOptions, setCustomizationOptions] = useState({
    darkMode: false,
    fontSize: 'medium',
    colorTheme: 'default',
  });




  const handleSwitchToggle = (setting, value) => {
    // Implement logic to handle toggle switches
    switch (setting) {
      case 'pushNotifications':
        setPushNotifications(value);
        break;
      case 'emailNotifications':
        setEmailNotifications(value);
        break;
      case 'wiFiOnly':
        setWiFiOnly(value);
        break;
      case 'darkMode':
        setDarkMode(value);
        break;
      default:
        break;
    }
  };

  const handleVisibilityChange = (setting, value) => {
    // Implement logic to handle visibility changes
    switch (setting) {
      case 'profileVisibility':
        setProfileVisibility(value);
        break;
      case 'contentVisibility':
        setContentVisibility(value);
        break;
      default:
        break;
    }
  };

  const handleQualityChange = (setting, value) => {
    // Implement logic to handle quality changes
    switch (setting) {
      case 'videoQuality':
        setVideoQuality(value);
        break;
      case 'audioQuality':
        setAudioQuality(value);
        break;
      default:
        break;
    }
  };

  const handleLanguageChange = (value) => {
    // Implement logic to handle language changes
    setAppLanguage(value);
  };

  const handleRegionChange = (value) => {
    // Implement logic to handle region changes
    setRegion(value);
  };

  const handleClearCache = () => {
    // Implement logic to clear cache
    // Show confirmation dialog
    Alert.alert(
      'Clear Cache',
      'Are you sure you want to clear the cache?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Actual clear cache logic goes here
            setClearCacheConfirmation(true);
          },
        },
      ],
      { cancelable: false }
    );
  };
     
  // Function to handle change username
  const handleChangeUsername = () => {
    Alert.alert(
      'Change Username',
      'Allow users to change their display username.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Implement logic to change username
            setChangeUsernameConfirmation(true);
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Function to handle change password
  const handleChangePassword = () => {
    Alert.alert(
      'Change Password',
      'Provide an option to update the account password.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Implement logic to change password
            setChangePasswordConfirmation(true);
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Function to toggle dark mode
  const handleToggleDarkMode = (value) => {
    // Implement logic to toggle dark mode
    setCustomizationOptions((prevOptions) => ({
      ...prevOptions,
      darkMode: value,
    }));
  };

  // Function to handle customization options (font size and color theme)
  const handleCustomizationChange = (option, value) => {
    setCustomizationOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  const handleUpgradeToPremium = () => {
    // Navigate to the UpgradeToPremium screen
    navigation.navigate('UpgradeToPremium');
  };


  // Implement other functions and handlers for different settings

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>SH</Text>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollView}>
      <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings:</Text>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleChangeUsername}
          >
            <Text style={styles.settingText}>Change Username</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleChangePassword}
          >
            <Text style={styles.settingText}>Change Password</Text>
          </TouchableOpacity>
        </View>
            

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upgrade to Premium:</Text>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleUpgradeToPremium}
          >
            <Text style={styles.settingText}>Upgrade to Premium</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Settings:</Text>
          {/* Add your notification settings components here */}
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Push Notifications</Text>
            <Switch value={pushNotifications} onValueChange={(value) => handleSwitchToggle('pushNotifications', value)} />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Email Notifications</Text>
            <Switch value={emailNotifications} onValueChange={(value) => handleSwitchToggle('emailNotifications', value)} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Settings:</Text>
          {/* Add your privacy settings components here */}
          {/* Example for profile visibility */}
          <TouchableOpacity
            style={[styles.settingItem, { flexDirection: 'row', justifyContent: 'space-between' }]}
            onPress={() => handleVisibilityChange('profileVisibility', 'public')}
          >
            <Text style={styles.settingText}>Profile Visibility</Text>
            <Text style={styles.settingText}>{profileVisibility}</Text>
          </TouchableOpacity>
          {/* Example for content visibility */}
          <TouchableOpacity
            style={[styles.settingItem, { flexDirection: 'row', justifyContent: 'space-between' }]}
            onPress={() => handleVisibilityChange('contentVisibility', 'public')}
          >
            <Text style={styles.settingText}>Content Visibility</Text>
            <Text style={styles.settingText}>{contentVisibility}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connection Settings:</Text>
          {/* Add your connection settings components here */}
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Wi-Fi Only</Text>
            <Switch value={wiFiOnly} onValueChange={(value) => handleSwitchToggle('wiFiOnly', value)} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Streaming Quality:</Text>
          {/* Add your streaming quality settings components here */}
          {/* Example for video quality */}
          <TouchableOpacity
            style={[styles.settingItem, { flexDirection: 'row', justifyContent: 'space-between' }]}
            onPress={() => handleQualityChange('videoQuality', 'medium')}
          >
            <Text style={styles.settingText}>Video Quality</Text>
            <Text style={styles.settingText}>{videoQuality}</Text>
          </TouchableOpacity>
          {/* Example for audio quality */}
          <TouchableOpacity
            style={[styles.settingItem, { flexDirection: 'row', justifyContent: 'space-between' }]}
            onPress={() => handleQualityChange('audioQuality', 'medium')}
          >
            <Text style={styles.settingText}>Audio Quality</Text>
            <Text style={styles.settingText}>{audioQuality}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language and Region Settings:</Text>
          {/* Add your language and region settings components here */}
          {/* Example for app language */}
          <TouchableOpacity
            style={[styles.settingItem, { flexDirection: 'row', justifyContent: 'space-between' }]}
            onPress={() => handleLanguageChange('english')}
          >
            <Text style={styles.settingText}>App Language</Text>
            <Text style={styles.settingText}>{appLanguage}</Text>
          </TouchableOpacity>
          {/* Example for region */}
          <TouchableOpacity
            style={[styles.settingItem, { flexDirection: 'row', justifyContent: 'space-between' }]}
            onPress={() => handleRegionChange('us')}
          >
            <Text style={styles.settingText}>Region</Text>
            <Text style={styles.settingText}>{region}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Theme and Appearance:</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Dark Mode</Text>
            <Switch
              value={customizationOptions.darkMode}
              onValueChange={(value) => handleToggleDarkMode(value)}
            />
          </View>
          {/* Add customization options (font size and color theme) here */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data and Storage:</Text>
          {/* Add your data and storage settings components here */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => handleClearCache()}
          >
            <Text style={styles.settingText}>Clear Cache</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => console.log('Handle Download Location')}
          >
            <Text style={styles.settingText}>Download Location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Deactivation/Logout:</Text>
          {/* Add your account deactivation/logout settings components here */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => handleDeactivateAccount()}
          >
            <Text style={styles.settingText}>Deactivate Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => handleLogout()}
          >
            <Text style={styles.settingText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help and Support:</Text>
          {/* Add your help and support settings components here */}
          <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('FAQScreen')}
        >
          <Text style={styles.settingText}>FAQs</Text>
        </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('ContactSupport')}
          >
            <Text style={styles.settingText}>Contact Support</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal and About:</Text>
          {/* Add your legal and about settings components here */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('TermsOfService')}
          >
            <Text style={styles.settingText}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('PrivacyPolicy')}
          >
            <Text style={styles.settingText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() =>  navigation.navigate('AboutUs')}
          >
            <Text style={styles.settingText}>About Us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deleting Friends:</Text>
          {/* Add your deleting friends settings components here */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('ManageFriendList')}
          >
            <Text style={styles.settingText}>Manage Friends List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => handleRemoveFriend()}
          >
            <Text style={styles.settingText}>Remove Friend</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deleting Uploaded Content:</Text>
          {/* Add your deleting uploaded content settings components here */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('ManageUploadContent')}
          >
            <Text style={styles.settingText}>Manage Uploaded Content</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => handleDeleteContent()}
          >
            <Text style={styles.settingText}>Delete Content</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('VisibilityOptions')}
          >
            <Text style={styles.settingText}>Visibility Options</Text>
          </TouchableOpacity>
        </View>


        {/* Implement other sections and settings components */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111', // Light dark background color
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333', // Darker background color for each setting item
    borderRadius: 8,
    marginBottom: 5,
  },
  settingText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Settings;
