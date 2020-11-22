import { Flex, useColorMode, IconButton, Box, Button } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import NextLink from 'next/link';
import styled from '@emotion/styled';

const StickyNavbar = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: '#16213e'
  };
  const bgColor = {
    light: 'white',
    dark: '#16213e'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };

  return (
    <Box
      d='flex'
      flexDirection={['column', 'row']}
      justifyContent='center'
      maxW='1200px'
      w='100%'
      mx='auto'
    >
      <StickyNavbar
        flexDirection={['row', 'column']}
        justifyContent={['space-between', 'flex-start']}
        alignItems='center'
        maxWidth={['900px', '200px']}
        width='100%'
        bg={navBgColor[colorMode]}
        as='nav'
        p={8}
        mt={[0, 4]}
      >
        <IconButton
          aria-label='Toggle dark mode'
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
        <Box
          flexDirection={['row', 'column']}
          pt={[0, 4]}
          justifyContent={['space-evenly', 'flex-end']}
        >
          <Box display={['inline', 'block']} pl={[1, 0]}>
            <NextLink href='/' passHref>
              <Button as='a' variant='ghost' p={[1, 4]}>
                Home
              </Button>
            </NextLink>
          </Box>
          <Box display={['inline', 'block']} pl={[1, 0]}>
            <NextLink href='/about' passHref>
              <Button as='a' variant='ghost' p={[1, 4]}>
                About
              </Button>
            </NextLink>
          </Box>
          <Box display={['inline', 'block']} pl={[1, 0]}>
            <NextLink href='/blog' passHref>
              <Button as='a' variant='ghost' p={[1, 4]}>
                Blog
              </Button>
            </NextLink>
          </Box>
        </Box>
      </StickyNavbar>
      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
        mt={[0, 10]}
        maxWidth='900px'
        w='100%'
        mx={[0, 'auto']}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Container;
