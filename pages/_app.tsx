import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import MDXComponents from '../components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
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
            background: ${colorMode === 'light' ? 'white' : '#282c35'};
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
      <MDXProvider components={MDXComponents}>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
