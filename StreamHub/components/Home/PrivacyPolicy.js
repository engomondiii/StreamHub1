import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PrivacyPolicy = () => {

   // Function to format the date as "YYYY-MM-DD"
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
        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      <Text style={styles.lastUpdated}>Last Updated: {getFormattedDate()}</Text>


      <ScrollView contentContainerStyle={styles.scrollContent}>


        <Text style={styles.text}>
          Welcome to StreamHub! This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information within our mobile application, website, and related services (collectively referred to as the "Service").
        </Text>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>

        <Text style={styles.subTitle}>1.1 Personal Information:</Text>
        <Text style={styles.text}>We may collect personal information, such as your name, email address, profile picture, and other details you provide voluntarily.</Text>

        <Text style={styles.subTitle}>1.2 Usage Information:</Text>
        <Text style={styles.text}>Information about your interactions with the Service, including device information, IP address, and usage patterns.</Text>

      <Text style={styles.subTitle}>1.3 Content Information:</Text>
      <Text style={styles.text}>Details about the content you create, upload, or interact with on the Service.</Text>

      <Text style={styles.subTitle}>1.4 Chat Component:</Text>
      <Text style={styles.text}>Our chat component employs end-to-end encryption to ensure the privacy and security of your messages. Only the intended recipients can decipher and access the content of your messages.</Text>

      <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>

      <Text style={styles.subTitle}>2.1 Providing and Improving the Service:</Text>
      <Text style={styles.text}>Delivering and enhancing our Service, troubleshooting issues, and developing new features.</Text>

      <Text style={styles.subTitle}>2.2 Personalization:</Text>
      <Text style={styles.text}>Tailoring your experience by showing content and recommendations based on your preferences.</Text>

      <Text style={styles.subTitle}>2.3 Communication:</Text>
      <Text style={styles.text}>Communicating with you about updates, news, and providing support.</Text>

      <Text style={styles.subTitle}>2.4 Analytics:</Text>
      <Text style={styles.text}>Analyzing usage patterns to improve the Service's functionality.</Text>

      <Text style={styles.sectionTitle}>3. Information Sharing and Disclosure</Text>

      <Text style={styles.subTitle}>3.1 With Your Consent:</Text>
      <Text style={styles.text}>We share information when you explicitly consent to such sharing.</Text>

      <Text style={styles.subTitle}>3.2 Service Providers:</Text>
      <Text style={styles.text}>Information may be shared with third-party service providers supporting the Service.</Text>

      <Text style={styles.subTitle}>3.3 Legal Compliance:</Text>
      <Text style={styles.text}>We may disclose information to comply with legal obligations or respond to lawful requests.</Text>

      <Text style={styles.sectionTitle}>4. Your Choices</Text>

      <Text style={styles.subTitle}>4.1 Account Information:</Text>
      <Text style={styles.text}>Users can update or delete account information through the Service.</Text>

      <Text style={styles.subTitle}>4.2 Communication Preferences:</Text>
      <Text style={styles.text}>Manage communication preferences in the settings.</Text>

      <Text style={styles.sectionTitle}>5. Security</Text>

      <Text style={styles.text}>We implement industry-standard measures to protect your information, including encryption, secure connections, and data access controls.</Text>

      <Text style={styles.sectionTitle}>6. Changes to This Privacy Policy</Text>

      <Text style={styles.text}>We may update this Privacy Policy periodically. Significant changes will be notified through the Service.</Text>

      <Text style={styles.sectionTitle}>7. Chat Component Privacy</Text>

      <Text style={styles.text}>Our chat component ensures the confidentiality of your messages through advanced encryption technologies. No unauthorized parties can access your chat data.</Text>

      <Text style={styles.sectionTitle}>8. Contact Us</Text>

      <Text style={styles.text}>If you have questions or concerns about this Privacy Policy, please contact us at [contact@email.com].</Text>

      <Text style={styles.agreementText}>By using the Service, you agree to the terms outlined in this Privacy Policy.</Text>
      <Text style={styles.extraSpace}> </Text>
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
  lastUpdated: {
    fontSize: 12,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
  agreementText: {
    fontStyle: 'italic',
    fontSize: 14,
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  scrollContent: {
    paddingBottom: 80, // Adjust this value based on your content length
  },
  extraSpace: {
    height: 50, // Adjust this value based on your content length
  },
});

export default PrivacyPolicy;