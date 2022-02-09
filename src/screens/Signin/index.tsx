import React from 'react';
import { Flex, Text, Button } from 'native-base';
import { useAuth } from '../../hooks/useAuth';

const Signin: React.FC = () => {
  const { signIn } = useAuth();

  function handleSignin() {
    signIn();
  }

  return (
    <Flex flex={1} align="center" justify="center">
      <Button onPress={() => handleSignin()}>
        <Text color="white">Fazer Login</Text>
      </Button>
    </Flex>
  );
};

export default Signin;
