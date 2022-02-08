import React from 'react';
import { Flex, Text, Button } from 'native-base';

const Signin: React.FC = () => {
  function handleSignin() {
    return null;
  }

  return (
    <Flex flex={1} align="center" justify="center">
      <Button onPress={() => handleSignin}>
        <Text>Fazer Login</Text>
      </Button>
    </Flex>
  );
};

export default Signin;
