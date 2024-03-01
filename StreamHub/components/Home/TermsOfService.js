import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsOfService = () => {

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>
       
       {/* Title Section */}
       <View>
        <Text style={styles.title}>Terms Of Service</Text>
      </View>

      <Text style={styles.lastUpdated}>Last Updated: {getFormattedDate()}</Text>


      <ScrollView contentContainerStyle={styles.scrollContent}>

      <Text style={styles.text}>
        Welcome to StreamHub! These Terms of Service ("Terms") govern your use of the StreamHub
        mobile application, website, and related services (collectively referred to as the
        "Service"). Please read these Terms carefully before using the Service.
      </Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text style={styles.text}>
        By accessing or using the Service, you agree to be bound by these Terms. If you do not
        agree to all of these Terms, do not use the Service.
      </Text>

      <Text style={styles.sectionTitle}>2. User Eligibility</Text>
      <Text style={styles.text}>
        You must be at least 13 years old to use the Service. By using the Service, you affirm that
        you are at least 13 years old.
      </Text>

      <Text style={styles.sectionTitle}>3. User Account</Text>
      <Text style={styles.text}>
        <Text style={styles.subSectionTitle}>3.1 Registration:</Text> To access certain features
        of the Service, you may be required to create an account. You agree to provide accurate,
        current, and complete information during the registration process.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.subSectionTitle}>3.2 Account Security:</Text> You are responsible for
        maintaining the security of your account. Notify us immediately of any unauthorized use or
        security breach.
      </Text>

      {/* ... Repeat the pattern for the remaining sections ... */}

      <Text style={styles.sectionTitle}>11. Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions or concerns about these Terms, please contact us at{' '}
        <Text style={styles.contactEmail}>[contact@email.com]</Text>.
      </Text>

      <Text style={styles.bottomText}>
        By using the Service, you agree to the terms outlined in these Terms of Service.
      </Text>
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
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  subSectionTitle: {
    fontWeight: 'bold',
  },
  contactEmail: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  bottomText: {
    
    fontStyle: 'italic',
    fontSize: 14,
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  lastUpdated: {
    fontSize: 12,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 80, // Adjust this value based on your content length
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
});

export default TermsOfService;
