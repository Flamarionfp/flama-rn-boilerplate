import React from 'react';
import { Flex, Box, Heading, Button } from 'native-base';
import { Screen } from '@components/Screen/Screen';
import { useAuth } from '../../hooks/useAuth';

const Home: React.FC = () => {
  const { signOut } = useAuth();

  function handleSignout() {
    signOut();
  }

  return (
    <Screen>
      <Flex mt="20">
        <Heading>Bem vindo!</Heading>
        <Box mt="20">
          <Button onPress={handleSignout}>Sair</Button>
        </Box>
      </Flex>
    </Screen>
  );
};

export default Home;
