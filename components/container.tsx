import { Flex, useColorMode, IconButton, Box, Button } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StickyNavbar = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const MotionIcon = motion.custom(IconButton);
  const MotionBox = motion.custom(Box);

  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: '#282c35'
  };
  const bgColor = {
    light: 'white',
    dark: '#282c35'
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
        <MotionIcon
          aria-label='Toggle dark mode'
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          whileHover={{ scale: 1.2 }}
        />
        <Box
          flexDirection={['row', 'column']}
          pt={[0, 4]}
          justifyContent={['space-evenly', 'flex-end']}
        >
          <MotionBox
            display={['inline', 'block']}
            pl={[1, 0]}
            whileHover={{ scale: 1.1 }}
          >
            <NextLink href='/' passHref>
              <Button as='a' variant='ghost' p={[1, 2]} mb={[0, 2]}>
                Home
              </Button>
            </NextLink>
          </MotionBox>
          <MotionBox
            display={['inline', 'block']}
            pl={[1, 0]}
            whileHover={{ scale: 1.1 }}
          >
            <NextLink href='/about' passHref>
              <Button as='a' variant='ghost' p={[1, 2]} mb={[0, 2]}>
                About
              </Button>
            </NextLink>
          </MotionBox>
          <MotionBox
            display={['inline', 'block']}
            pl={[1, 0]}
            whileHover={{ scale: 1.1 }}
          >
            <NextLink href='/blog' passHref>
              <Button as='a' variant='ghost' p={[1, 2]} mb={[0, 2]}>
                Blog
              </Button>
            </NextLink>
          </MotionBox>
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
        <motion.div
          initial='pageInitial'
          animate='pageAnimate'
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }}
        >
          {children}
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Container;
