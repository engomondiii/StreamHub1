import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setUserToken(token);
      } catch (e) {
        console.error('Error fetching token:', e);
      }

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  const authContextValue = {
    userToken,
    setUserToken,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
