import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { useColorScheme } from 'react-native';
import colors from './colors';
import fonts from './fonts';
import sizes from './sizes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();

  const theme = extendTheme({
    colors,
    fonts,
    sizes,
    components: {
      Heading: {
        defaultProps: {
          fontSize: '3xl',
        },
        baseStyle: () => {
          return {
            color: colorScheme === 'light' ? 'primary.500' : 'white',
          };
        },
      },
      Button: {
        variants: {
          solid: {
            rounded: 'sm',
            bg: 'primary.500',
            _pressed: {
              bg: 'primary.500',
              opacity: 50,
            },
            _loading: {
              bg: 'primary.500',
            },
            _disabled: {
              bg: 'primary.500',
            },
            _text: {
              color: 'white',
            },
          },
        },
      },
    },
  });

  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default ThemeProvider;
