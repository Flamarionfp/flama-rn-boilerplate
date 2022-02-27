import React from 'react';
import { Flex, Text, Button } from 'native-base';
import { Screen } from '@components/Screen/Screen';
import { useNavigation } from '@react-navigation/native';

const DrawerExample: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Flex flex={1} align="center" justify="center">
        <Text fontSize="md">Exemplo do menu lateral</Text>
        <Flex mt="10">
          <Button onPress={() => navigation.navigate('Drawer' as never)}>Ir para o drawer</Button>
        </Flex>
      </Flex>
    </Screen>
  );
};

export default DrawerExample;
