// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { loginUser } from './API'; // Import loginUser function from your api.js file
// import AsyncStorage from '@react-native-async-storage/async-storage';



// const Login = ({ navigation }) => {
//   const [emailOrUsername, setEmailOrUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');


// const handleLogin = async () => {
//   setIsLoading(true);

//   try {
//     const response = await loginUser(emailOrUsername, password);
//     await AsyncStorage.setItem('token', response.access); // Store token
//     // Redirect to home screen or wherever you want
//     navigation.navigate('Home'); // Replace 'Home' with your actual home screen name
//   } catch (error) {
//     console.error('Login error:', error);
//     setError('Invalid email/username or password');
//   }

//   setIsLoading(false);
// };


//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Text style={styles.logo}>SH</Text>

//       <Text style={styles.title}>Login</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email/username -</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email or username"
//           placeholderTextColor="gray" // Adjust opacity as needed
//           onChangeText={(text) => {
//             setEmailOrUsername(text);
//             setError(''); // Clear error when email/username changes
//           }}
//           value={emailOrUsername}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password -</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your password"
//           placeholderTextColor="gray" // Adjust opacity as needed
//           secureTextEntry
//           onChangeText={(text) => {
//             setPassword(text);
//             setError(''); // Clear error when password changes
//           }}
//           value={password}
//         />
//       </View>

//       {error ? <Text style={styles.errorText}>{error}</Text> : null}

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleLogin}
//         disabled={isLoading}
//       >
//         <Text style={styles.buttonText}>
//           {isLoading ? 'Logging in...' : 'Login'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#222', // Light dark background color
//     padding: 16,
//   },
//   logo: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     color: 'red',
//     position: 'absolute',
//     top: 20,
//     left: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: 'white',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   label: {
//     color: 'white',
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 8,
//     color: 'white',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 16,
//   },
//   button: {
//     backgroundColor: 'darkred',
//     padding: 12,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default Login;



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>SH</Text>

      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email/username -</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or username"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            setEmail(text);
            setError('');
          }}
          value={email}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password -</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            setError('');
          }}
          value={password}
        />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 16,
  },
  logo: {
    fontSize: 35,
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

export default Login;
