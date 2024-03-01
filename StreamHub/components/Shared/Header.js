import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from './api';

//const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Password should have at least 6 characters
    if (password.length < 6) {
      setError('Password should have at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const response = await loginUser({ email, password });

      if (response.ok) {
        await AsyncStorage.setItem('userToken', response.token);
        navigation.navigate('Home'); // Replace with your actual home screen name
      } else {
        setError(response.error || 'Login failed.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }

    setIsLoading(false);
  };


  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>SH</Text>

      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email -</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(text) => {
            setEmail(text);
            setError(''); // Clear error when email changes
          }}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password -</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            setError(''); // Clear error when password changes
          }}
          value={password}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
//};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222', // Light dark background color
    padding: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    color: 'white',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'darkred',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

//export default Login;