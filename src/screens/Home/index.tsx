/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Flex, Text, Button } from 'native-base';
import { useAuth } from '../../hooks/useAuth';

const Home: React.FC = () => {
  const { signOut } = useAuth();

  function handleSignout() {
    signOut();
  }

  return (
    <Flex flex={1} align="center" justify="center">
      <Button onPress={handleSignout}>
        <Text color="white">Sair</Text>
      </Button>
    </Flex>
  );
};

export default Home;
