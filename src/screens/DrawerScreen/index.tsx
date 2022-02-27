import React from 'react';
import { Flex, Text } from 'native-base';
import { Screen } from '@components/Screen/Screen';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const DrawerScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Flex flex={1} align="center" justify="center">
        <Text fontSize="md">Arraste o dedo da esquerda para direita</Text>
        <Text fontSize="md">para abrir o menu lateral</Text>
        <Flex mt="20">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text color="primary.500" fontSize="md">
              Voltar
            </Text>
          </TouchableOpacity>
        </Flex>
      </Flex>
    </Screen>
  );
};

export default DrawerScreen;
