import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/700.css';

const theme = extendTheme({
  fonts: {
    heading: 'Barlow Condensed, sans-serif',
    body: 'Barlow, sans-serif',
  },
  textStyles: {
    h1: {
      fontSize: ['2xl', '3xl', '6xl'],
      textTransform: 'uppercase',
      fontFamily: 'Barlow Condensed',
      fontWeight: 'bold',
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: { base: 'lg', md: 'xl' },
      letterSpacing: 5,
      fontFamily: 'Barlow Condensed',
    },
    p: {
      fontSize: { base: 'lg', md: 'xl' },
      fontFamily: 'Barlow',
    },
    tag: {
      textTransform: 'uppercase',

      letterSpacing: 5,
      fontFamily: 'Barlow Condensed',
    },
  },
  components: {
    Button: {
      baseStyle: {
        paddingY: 6,
      },
      variants: {
        link: {
          color: 'black',
          textTransform: 'uppercase',
          fontSize: { base: 'lg', md: 'xl' },
          fontFamily: 'Barlow Condensed',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
