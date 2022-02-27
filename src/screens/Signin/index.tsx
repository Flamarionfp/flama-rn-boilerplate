import React, { useState, useCallback } from 'react';
import { Flex, Box, Heading, Button } from 'native-base';
import { Screen } from '@components/Screen/Screen';
import { useAuth } from '../../hooks/useAuth';

export const Signin: React.FC = () => {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = useCallback(() => {
    setIsLoading(true);
    signIn().then(() => {
      setIsLoading(false);
    });
  }, [isLoading]);

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
