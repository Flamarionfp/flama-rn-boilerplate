import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HomeProps } from './Home.types';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Ir para Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
