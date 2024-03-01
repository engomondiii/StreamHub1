import React from 'react';
import AppNavigator from './navigation/AppNavigator'; // Update the import path as needed
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import AuthProvider from AuthContext.js
import { AuthProvider } from './components/Home/AuthContext'; // Update the import path as needed

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Wrap AppNavigator with AuthProvider */}
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
