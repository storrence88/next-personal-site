import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import { Global, css } from '@emotion/react';
import theme from '../styles/theme';

const GlobalStyles = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {/* Use emotion to set global styles */}
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #ea2c62;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#16213e'};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </ChakraProvider>
  );
}

export default MyApp;
