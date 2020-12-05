import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar
} from '@chakra-ui/react';

import Container from '../components/container';

export default function UsesLayout({ children }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <NextSeo
        title='Uses – Steven Torrence'
        description={`Stuff I use for coding and general use.`}
        canonical='https://steventorrence.com/uses'
        openGraph={{
          url: 'https://steventorrence.com/uses',
          title: 'Uses – Steven Torrence',
          description: `Here's a list of the tech I'm currently using for coding.`
        }}
      />
      <Stack
        as='section'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 8rem auto'
        maxWidth='700px'
        w='100%'
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
          w='100%'
        >
          <Heading
            letterSpacing='tight'
            mb={2}
            as='h1'
            size='2xl'
            fontFamily='Raleway'
          >
            Gear
          </Heading>
          <Flex mt={2} w='100%'>
            <Text fontSize='sm' color={textColor[colorMode]}>
              Stuff I use pretty much on a daily basis.
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}
