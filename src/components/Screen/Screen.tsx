import React from 'react';
import { useColorScheme } from 'react-native';
import { Flex, ScrollView } from 'native-base';
import { ScreenProps } from './Screen.types';

export const Screen: React.FC<ScreenProps> = ({ isScrollable = false, children }) => {
  const colorScheme = useColorScheme();
  const screenStyle = {
    bg: colorScheme === 'light' ? 'white' : 'black',
    px: '5%',
  };

  if (isScrollable) {
    return <ScrollView {...screenStyle}>{children}</ScrollView>;
  }
  return (
    <Flex flex={1} {...screenStyle}>
      {children}
    </Flex>
  );
};
