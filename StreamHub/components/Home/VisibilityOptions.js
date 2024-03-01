import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';




const VisibilityOptions = () => {
  const [defaultVisibility, setDefaultVisibility] = useState('Public');
  const [contentVisibility, setContentVisibility] = useState({});
  const [selectedContent, setSelectedContent] = useState(null);

  const visibilityOptions = ['Public', 'Friends Only', 'Private'];
  const contentTypes = ['Photos', 'Videos', 'Posts'];

  const handleDefaultVisibilityChange = (value) => {
    setDefaultVisibility(value);
  };

  const handleContentVisibilityChange = (value) => {
    setContentVisibility({ ...contentVisibility, [selectedContent]: value });
  };

  const handleContentSelect = (content) => {
    setSelectedContent(content);
  };

  const applyVisibilityChanges = () => {
    // Simulated logic: Apply visibility changes to the content in the actual app
    console.log('Visibility changes applied:', { defaultVisibility, contentVisibility });
  };

  return (
    <View style={styles.container}>
     {/* Logo Section */}
     <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>
       
       {/* Title Section */}
       <View>
        <Text style={styles.title}>Visibility Options</Text>
      </View>
      
      {/* Default Visibility Setting */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>
          <Icon name="visibility" size={20} color="white" /> 1. Default Visibility Setting
        </Text>

        <Text>1.1 Setting Your Default</Text>
        <Picker
          selectedValue={defaultVisibility}
          onValueChange={(value) => handleDefaultVisibilityChange(value)}
          style={styles.picker}
        >
          {visibilityOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
        <Text>1.2 Consistency</Text>
        <TouchableOpacity onPress={applyVisibilityChanges}>
          <Text style={styles.button}>Apply Default Visibility</Text>
        </TouchableOpacity>
      </View>

      {/* Individual Content Visibility */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>
          <Icon name="visibility-off" size={20} color="white" /> 2. Individual Content Visibility
        </Text>

        <Text>2.1 Granular Control</Text>
        <Picker
          selectedValue={selectedContent}
          onValueChange={(value) => handleContentSelect(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Content Type" value={null} />
          {contentTypes.map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>
        {selectedContent && (
          <>
            <Text>2.2 Versatility</Text>
            <Picker
              selectedValue={contentVisibility[selectedContent]}
              onValueChange={(value) => handleContentVisibilityChange(value)}
              style={styles.picker}
            >
              {visibilityOptions.map((option) => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
            <TouchableOpacity onPress={applyVisibilityChanges}>
              <Text style={styles.button}>Apply Content Visibility</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Customizable Privacy Preferences */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>
          <Icon name="lock" size={20} color="white" /> 3. Customizable Privacy Preferences
        </Text>
        <Text>3.1 Content Types</Text>
        {/* ... (Similar to Individual Content Visibility) ... */}
        <Text>3.2 Fine-Tuning</Text>
        {/* ... (Similar to Individual Content Visibility) ... */}
        <TouchableOpacity onPress={applyVisibilityChanges}>
          <Text style={styles.button}>Apply Privacy Preferences</Text>
        </TouchableOpacity>
      </View>

      {/* Visibility Changes */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>
          <Icon name="settings" size={20} color="white" /> 4. Visibility Changes
        </Text>
        <Text>4.1 Flexibility</Text>
        <TouchableOpacity onPress={applyVisibilityChanges}>
          <Text style={styles.button}>Apply Visibility Changes</Text>
        </TouchableOpacity>
        <Text>4.2 Real-time Control</Text>
        {/* ... (Similar to Individual Content Visibility) ... */}
        <TouchableOpacity onPress={applyVisibilityChanges}>
          <Text style={styles.button}>Apply Real-time Control</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c2c2c',
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
    marginBottom: 10,
    color: 'white',
  },
  picker: {
    height: 50,
    color: 'white',
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    color: 'white',
    backgroundColor: 'red', // Updated button color to red
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
});


export default VisibilityOptions;
