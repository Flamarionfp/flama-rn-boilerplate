import React from 'react';
import { Flex, Box, Heading, Button } from 'native-base';
import { Screen } from '@components/Screen/Screen';
import { useAuth } from '../../hooks/useAuth';

export const Signin: React.FC = () => {
  const { isLoading, signIn } = useAuth();

  function handleSignin() {
    signIn();
  }

  return (
    <Screen>
      <Flex mt="20">
        <Heading>Login</Heading>
        <Box mt="20">
          <Button isLoading={isLoading} onPress={handleSignin}>
            Entrar
          </Button>
        </Box>
      </Flex>
    </Screen>
  );
};

export default Signin;
