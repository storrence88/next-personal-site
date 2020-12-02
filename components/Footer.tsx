import NextLink from 'next/link';
import { Flex, Link, IconButton, chakra, useColorMode } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NowPlaying from '../components/NowPlaying';

// import NowPlaying from './NowPlaying';

const Footer = () => {
  const { colorMode } = useColorMode();
  const MotionBox = chakra(motion.div);

  return (
    <Flex
      align='center'
      pb={4}
      direction='column'
      background={colorMode === 'light' ? 'white' : '#282c35'}
      position='absolute'
      left={0}
      bottom={0}
      right={0}
      height='190px'
    >
      <NowPlaying />
      <Flex direction='row'>
        <MotionBox whileHover={{ scale: 1.2 }} pl={2} pr={2}>
          <Link
            href='https://twitter.com/storrence_88/'
            title='Twitter'
            isExternal
          >
            <IconButton
              aria-label='Twitter'
              icon={<FaTwitter />}
              size='lg'
              color='#1DA1F2'
              variant='ghost'
            />
          </Link>
        </MotionBox>
        <MotionBox whileHover={{ scale: 1.2 }} pl={2} pr={2}>
          <Link
            href='https://github.com/storrence88/'
            title='GitHub'
            isExternal
          >
            <IconButton
              aria-label='GitHub'
              icon={<FaGithub />}
              size='lg'
              color={colorMode === 'light' ? 'black' : 'white'}
              variant='ghost'
            />
          </Link>
        </MotionBox>
        <MotionBox whileHover={{ scale: 1.2 }} pl={2} pr={2}>
          <Link
            href='https://www.instagram.com/storrence88/'
            title='MySpace'
            isExternal
          >
            <IconButton
              aria-label='Instagram'
              icon={<FaInstagram />}
              size='lg'
              color='#bc3c7c'
              variant='ghost'
            />
          </Link>
        </MotionBox>
        <MotionBox whileHover={{ scale: 1.2 }} pl={2} pr={2}>
          <Link
            href='https://www.linkedin.com/in/steven-torrence-849114159/'
            title='LinkedIn'
            isExternal
          >
            <IconButton
              aria-label='LinkedIn'
              icon={<FaLinkedinIn />}
              size='lg'
              color='#0077b5'
              variant='ghost'
            />
          </Link>
        </MotionBox>
        <MotionBox whileHover={{ scale: 1.2 }} pl={2} pr={2}>
          <Link href='mailto:storrence88@gmail.com' title='Email' isExternal>
            <IconButton
              aria-label='Email'
              icon={<FaMailBulk />}
              size='lg'
              color={colorMode === 'light' ? '#000' : 'rgb(99 211 211)'}
              variant='ghost'
            />
          </Link>
        </MotionBox>
      </Flex>
      <div>
        <NextLink href='/uses' passHref>
          <Link
            fontSize='sm'
            color={colorMode === 'light' ? 'gray.700' : '#fff'}
            minWidth='100px'
            mr={2}
            title='Uses'
          >
            /uses
          </Link>
        </NextLink>
        <Link
          fontSize='sm'
          color={colorMode === 'light' ? 'gray.700' : '#fff'}
          minWidth='100px'
          mr={2}
          href='https://photos.steventorrence.com/'
          title='Photos'
          isExternal
        >
          /photos
        </Link>
      </div>
    </Flex>
  );
};

export default Footer;
