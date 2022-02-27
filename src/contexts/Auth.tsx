import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';

interface AuthContextData {
  isLoading: boolean;
  signed: boolean;
  token: string;
  user: object | null;
  signIn: () => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<object | null>({});

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@Auth:user');
      const storagedToken = await AsyncStorage.getItem('@Auth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    try {
      setIsLoading(true);
      const response = await auth.signIn();
      setUser(response.user);
      api.defaults.headers.Authorization = `Bearer ${response.token}`;
      await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@Auth:token', response.token);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ isLoading, signed: !!user, token: '', user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
