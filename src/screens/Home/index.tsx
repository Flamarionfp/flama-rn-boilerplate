import React from 'react';
import { Flex, Button, Text } from 'native-base';

const Home: React.FC = () => {
  function handleLogout() {
    return null;
  }

  return (
    <Flex flex={1} align="center" justify="center">
      <Button onPress={() => handleLogout}>
        <Text>Logout</Text>
      </Button>
    </Flex>
  );
};

export default Home;
