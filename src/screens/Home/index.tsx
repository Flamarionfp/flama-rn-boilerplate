import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { HomeProps } from './Home.types';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Hello Home</Text>
      </TouchableOpacity>
    </Container>
  );
};
export default Home;
