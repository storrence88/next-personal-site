import { ChakraProvider, useColorMode, Flex } from '@chakra-ui/react';
import MDXComponents from '../components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import theme from '../styles/theme';
import Footer from '../components/Footer';

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
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyles>
          <DefaultSeo {...SEO} />
          {/* <Flex
            direction='column'
            justifyContent='space-between'
            h='100vh'
            background={colorMode === 'dark' ? '#282c35' : null}
          > */}
          <Component {...pageProps} />
          {/* <Footer /> */}
          {/* </Flex> */}
        </GlobalStyles>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
