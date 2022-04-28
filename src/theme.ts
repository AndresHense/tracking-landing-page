import { extendTheme } from '@chakra-ui/react';

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

export default theme;
