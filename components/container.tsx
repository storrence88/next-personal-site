import React from 'react';
import NextLink from 'next/link';
import { Flex, useColorMode, IconButton, Box, Button } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
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
    dark: 'rgba(23, 25, 35, 0.8)'
  };
  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };

  return (
    <>
      <StickyNavbar
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='900px'
        width='100%'
        bg={navBgColor[colorMode]}
        as='nav'
        p={8}
        mt={[0, 8]}
        mb={8}
        mx='auto'
      >
        <Box>
          <NextLink href='/' passHref>
            <Button as='a' variant='ghost' p={[1, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href='/about' passHref>
            <Button as='a' variant='ghost' p={[1, 4]}>
              About
            </Button>
          </NextLink>
          <NextLink href='/blog' passHref>
            <Button as='a' variant='ghost' p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
        </Box>
        <IconButton
          aria-label='Toggle dark mode'
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </StickyNavbar>
      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
