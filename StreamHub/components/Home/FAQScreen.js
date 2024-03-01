import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';

const FAQScreen = () => {
  const [expanded, setExpanded] = useState({}); // State to manage expanded answers
  const [allAnswersVisible, setAllAnswersVisible] = useState(false);

  const toggleAnswer = (questionIndex) => {
    setExpanded((prevState) => ({
      ...prevState,
      [questionIndex]: !prevState[questionIndex],
    }));
  };

  const toggleAllAnswers = () => {
    setAllAnswersVisible((prevValue) => !prevValue);
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Text style={styles.logo}>SH</Text>
      </View>

      {/* Title Section */}
      <View>
        <Text style={styles.title}>Frequently Asked Questions (FAQs)</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* FAQ Entry 1 */}
        <TouchableOpacity style={styles.question} onPress={() => toggleAnswer(1)}>
          <Text style={styles.questionText}>Q: How do I stream my memories using StreamHub?</Text>
          {(expanded[1] || allAnswersVisible) && (
            <Text style={styles.answerText}>
              A: To stream your memories, ensure your StreamHub device is connected and navigate to the 'Stream' section in the app. Select the memories you want to stream and enjoy the experience!
            </Text>
          )}
        </TouchableOpacity>

        {/* FAQ Entry 2 */}
        <TouchableOpacity style={styles.question} onPress={() => toggleAnswer(2)}>
          <Text style={styles.questionText}>Q: Can I customize my user profile on StreamHub?</Text>
          {(expanded[2] || allAnswersVisible) && (
            <Text style={styles.answerText}>
              A: Yes, you can! Go to the 'Profile' section in the app to customize your user profile. Add a profile picture, update your bio, and make your StreamHub experience unique.
            </Text>
          )}
        </TouchableOpacity>

        {/* FAQ Entry 3 */}
        <TouchableOpacity style={styles.question} onPress={() => toggleAnswer(3)}>
          <Text style={styles.questionText}>Q: How can I get support for technical issues?</Text>
          {(expanded[3] || allAnswersVisible) && (
            <Text style={styles.answerText}>
              A: If you encounter technical issues, you can contact our support team via email at support@streamhub.com or use the contact form in the 'Support' section of the app.
            </Text>
          )}
        </TouchableOpacity>

        {/* Add more FAQ entries as needed */}

        {/* Toggle All Answers Button */}
        <View style={styles.toggleButtonContainer}>
        <Button
           title={allAnswersVisible ? 'Hide All Answers' : 'Show All Answers'}
           onPress={toggleAllAnswers}
           color="red" // Set the text color to white
        />
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
  question: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff', // White text color
  },
  answerText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff', // White text color
  },
  scrollContent: {
    paddingBottom: 40, // Adjust this value based on your content length
  },
  // Modify the styles for the toggleButtonContainer
toggleButtonContainer: {
  marginTop: 20,
  backgroundColor: 'red', // Set the background color to red
  borderRadius: 8, // Optional: Add border-radius for a rounded button
  overflow: 'hidden', // Optional: Hide overflowing contents if any
},


  
});

export default FAQScreen;
