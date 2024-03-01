import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, TextInput, Button, StyleSheet,ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';





const ContactSupport = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, errors } = useForm();
    const [formData, setFormData] = useState(null);
  
    const onSubmit = (data) => {
      // Handle the form submission, you can send the data to your server or perform other actions
      setFormData(data);
    };



  const openEmail = () => {
    Linking.openURL('mailto:support@streamhub.com');
  };


  const openSocialMedia = (platform) => {
    // Replace with the actual links to your social media profiles
    const socialMediaLinks = {
      Twitter: 'https://twitter.com/StreamHub',
      Facebook: 'https://www.facebook.com/StreamHub',
    };

    Linking.openURL(socialMediaLinks[platform]);
  };

  const openFAQs = () => {
    // Navigate to the FAQ screen
    navigation.navigate('FAQScreen');
  };

  return (
    <View style={styles.container}>

      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>
       
       {/* Title Section */}
       <View>
        <Text style={styles.title}>Contact Support</Text>
      </View>


      <ScrollView contentContainerStyle={styles.scrollContent}>

      <Text style={styles.description}>Need Help or Have Questions?</Text>
      <Text style={styles.description}>
        If you encounter any issues or have questions about StreamHub, our support team is here to assist you. Choose the option that best suits your preferences:
      </Text>

      <View style={styles.option}>
        <Text style={styles.optionTitle}>Email Support</Text>
        <TouchableOpacity onPress={openEmail}>
          <Text style={styles.optionText}>support@streamhub.com</Text>
        </TouchableOpacity>
        <Text style={styles.optionDescription}>
          Please include a detailed description of the issue you are facing, along with any relevant information that can help us assist you more efficiently.
        </Text>
      </View>

      

      



      <View style={styles.contactFormContainer}>
          <Text style={styles.optionTitle}>Contact Form</Text>
          <View>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  style={styles.input}
                  placeholder="Your message"
                  multiline
                  numberOfLines={4}
                />
              )}
              name="message"
              rules={{ required: 'This field is required' }}
            />
            {errors && errors.message && typeof errors.message === 'object' && errors.message.message && (
              <Text style={styles.errorText}>{errors.message.message}</Text>
            )}
            {errors && typeof errors.message !== 'object' && <Text style={styles.errorText}>{errors.message}</Text>}
          </View>
          {/* Update the button style */}
          <Button title="Submit" onPress={handleSubmit(onSubmit)} style={styles.submitButton} />
          {formData && (
            <View>
              <Text style={styles.successText}>Form submitted successfully!</Text>
              <Text>Your message: {formData.message}</Text>
            </View>
          )}
        </View>













      <View style={styles.option}>
        <Text style={styles.optionTitle}>Mobile Support</Text>
        <Text style={styles.optionText}>Phone/WhatsApp: [Your Mobile Number/WhatsApp Business Number]</Text>
        <Text style={styles.optionDescription}>
          Please note that mobile support may have specific operating hours.
        </Text>
      </View>

      <View style={styles.option}>
          <Text style={styles.optionTitle}>Additional Contact Options</Text>
          <TouchableOpacity onPress={() => openSocialMedia('Twitter')}>
            <Text style={[styles.optionText, styles.linkText]}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openSocialMedia('Facebook')}>
            <Text style={[styles.optionText, styles.linkText]}>Facebook</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.option}>
        <Text style={styles.optionTitle}>Support Response Time</Text>
        <Text style={styles.optionDescription}>
          Our support team strives to respond to your inquiries promptly. Please allow up to 24-48 hours for a response, although we aim to address your concerns as quickly as possible.
        </Text>
      </View>

      <View style={styles.option}>
        <Text style={styles.optionTitle}>Frequently Asked Questions (FAQs)</Text>
        <TouchableOpacity onPress={openFAQs}>
          <Text style={styles.optionText}>FAQs</Text>
        </TouchableOpacity>
        <Text style={styles.optionDescription}>
          Before reaching out to support, consider checking our Frequently Asked Questions (FAQs) section. You might find answers to common queries there.
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#222', // Light dark background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  option: {
    marginTop: 20,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  optionText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
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
  scrollContent: {
    paddingBottom: 80, // Adjust this value based on your content length
  },

  input: {
    flex: 1,
    maxWidth: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10, // Add margin to the bottom
  },
  contactFormContainer: {
    
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
   // Update the button style
   submitButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 10, // Add margin to the top
  },

  // Update the text style for the button
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  linkText: {
    color: 'lightblue', // Change to your preferred color
  },
  
});

export default ContactSupport;
