import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet,Linking  } from 'react-native';
import { useNavigation } from '@react-navigation/native';





const AboutUs = () => {
  const navigation = useNavigation();

  const openExternalLink = (url) => {
    Linking.openURL(url);
  };

  return (
    


<View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>
       <View>
       <Text style={styles.title}>StreamHub Application Information</Text>

       </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>

          <Text style={styles.description}>
            StreamHub is a revolutionary project that aims to redefine how users curate and interact with their digital memories. In an era dominated by the prolific growth of digital content creation and sharing, traditional paradigms of preserving memories through physical photo albums are evolving. The advent of smartphones and digital cameras has allowed users to accumulate an unprecedented volume of multimedia content, capturing various aspects of their lives in images and videos.
          </Text>

          <Text style={styles.description}>
            The project's name, StreamHub, signifies its central role as a dynamic hub for streaming and sharing memories. It represents a central point where diverse multimedia content flows seamlessly, offering users a novel way to engage with their memories that goes beyond traditional photo albums and frames.
          </Text>

          <Text style={styles.description}>
            At the heart of this visionary system is the integration of Raspberry Pi hardware, serving as the robust backbone that handles intricate tasks like content livestreaming. The user-friendly mobile app complements this by providing an intuitive interface, allowing users to effortlessly control and manage their multimedia albums. Through this dynamic synergy, users can curate, share, and cherish their memories with unprecedented ease. The capabilities of StreamHub extend to making large monitor screens function as digital albums, connecting through USB ports to broadcast and share cherished memories on a grand scale.
          </Text>

          <Text style={styles.description}>
            The collaboration of Raspberry Pi with the mobile app version of StreamHub unfolds the magic, transforming ordinary screens into vibrant digital canvases that bring memories to life. StreamHub's versatility is not confined to personal use alone; its applications extend to the commercial realm. It can be utilized for impactful advertising, as companies harness the power of Raspberry Pi to remotely control and display content on significant digital screens. The embedded AI features actively contribute to enhancing the viewing experience, making StreamHub an ideal solution for both personal reminiscence and commercial use.
          </Text>

          <Text style={styles.description}>
            In essence, StreamHub represents a leap forward in the realm of digital multimedia albums. It not only preserves memories but also provides a dynamic platform for sharing, streaming, and creating lasting impressions, whether for personal reminiscence or commercial promotion.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Version</Text>
          <Text style={styles.version}>Current Version: 1.0.0 StreamHub</Text>
        </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Release Notes</Text>
        <Text style={styles.highlights}>
          Version 1.0.0 Highlights:
        </Text>
        <Text style={styles.highlights}>
          - Personalized User Profiles: Introducing customizable user profiles for a unique streaming experience.
        </Text>
        <Text style={styles.highlights}>
          - Enhanced Streaming Quality Options: Tailor your streaming quality settings for a personalized viewing experience.
        </Text>
        <Text style={styles.highlights}>
          - Improved Notification System: Experience more accurate and timely notifications for new followers, comments, and activities.
        </Text>
        <Text style={styles.highlights}>
          - Digital Album Revolution: Redefining digital storytelling with a central hub for seamless multimedia content flow.
        </Text>
        <Text style={styles.highlights}>
          - AI-Powered Commercial Applications: Explore versatile commercial applications with AI features for impactful advertising.
        </Text>
        <Text style={styles.highlights}>
          - Collaborative Magic - Raspberry Pi Integration: Witness the synergy between Raspberry Pi hardware and the mobile app for effortless content live streaming.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Developer Information</Text>
        <Text style={styles.description}>
          Company or Individual
        </Text>
        <Text style={styles.developerNames}>
          Developed by StreamHub Development Team
        </Text>
        <Text style={styles.developerNames}>
          Jasper Wendo (Manager & Sponsor)
        </Text>
        <Text style={styles.developerNames}>
          Fidel Omondi (Lead Developer)
        </Text>
        <Text style={styles.developerNames}>
          Benjamin Njoroge
        </Text>
        <Text style={styles.developerNames}>
          Sarah Mueni
        </Text>
        <Text style={styles.developerNames}>
          Brandon Opere
        </Text>
        <Text style={styles.developerNames}>
          Mbuthi Mungai
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.description}>
          For inquiries, contact us at support@streamhub.com
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mission Statement</Text>
        <Text style={styles.description}>
          Our mission at StreamHub is to provide a dynamic platform that fosters creativity, connectivity, and community engagement. We strive to empower users to share their unique stories and experiences in an immersive and socially interactive environment.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acknowledgments</Text>
        <Text style={styles.description}>
          StreamHub acknowledges the contributions of:
        </Text>
        <Text style={styles.developerNames}>
          - Raspberry Pi Foundation
        </Text>
        <Text style={styles.developerNames}>
          - React Native
        </Text>
        <Text style={styles.developerNames}>
          - OpenAI (GPT-3.5)
        </Text>
        <Text style={styles.developerNames}>
          - Contributors
        </Text>
      </View>

        {/* Social Media Links */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Social Media Links</Text>
        <Text style={styles.description}>
          Connect with us on social media for the latest updates, announcements, and community interactions:
        </Text>
        <TouchableOpacity onPress={() => openExternalLink('https://twitter.com/your_twitter')}>
          <Text style={styles.linkText}>- Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openExternalLink('https://www.facebook.com/your_facebook')}>
          <Text style={styles.linkText}>- Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openExternalLink('https://www.facebook.com/your_facebook')}>
          <Text style={styles.linkText}>- LinkedIn</Text>
        </TouchableOpacity>
      </View>

      {/* Terms of Service and Privacy Policy Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms of Service and Privacy Policy Links</Text>
        <Text style={styles.description}>
          For in-depth legal information, please refer to our:
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('TermsOfService')}>
          <Text style={styles.linkText}>- Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.linkText}>- Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Credits</Text>
        <Text style={styles.description}>
          Key contributors to the StreamHub application:
        </Text>
        <Text style={styles.developerNames}>
          - Jasper Wendo (Manager and Sponsor)
        </Text>
      </View>

      {/* Support Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support Information</Text>
        <Text style={styles.description}>
          If you encounter any issues or require assistance, please reach out to our support team at support@streamhub.com or visit our support page for additional resources.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ContactSupport')}>
          <Text style={styles.linkText} >- Contact Support</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15, // Adjusted spacing between paragraphs
  },
  version: {
    fontSize: 16,
    color: 'white',
  },
  highlights: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  developerNames: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    marginLeft: 10,
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
  linkText: {
    fontSize: 16,
    color: 'blue', // Change the color of links as per your preference
    marginBottom: 5,
    marginLeft: 10,
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
});

export default AboutUs;