import React from 'react';
import { Flex, Pressable, Text } from 'native-base';

import { HomeProps } from './Home.types';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Flex flex={1} align="center" justify="center">
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text>Ir para Signup</Text>
      </Pressable>
    </Flex>
  );
};
export default Home;
