import {
  useColorMode,
  Stack,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  Box
} from '@chakra-ui/react';
import Container from '../components/container';

export default function Home() {
  const { colorMode } = useColorMode();
  const linkColor = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)'
  };
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'grey.300'
  };
  return (
    <Container>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        margin='0 auto 4rem auto'
        maxW='900px'
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxW='1200px'
        >
          <Heading
            ml={['auto', 0]}
            mr={['auto', 0]}
            mb={6}
            as='h1'
            size='2xl'
            color={secondaryTextColor[colorMode]}
            fontFamily='Raleway'
          >
            Hi. I'm Steve 👋
          </Heading>
          <Flex
            direction={['column', 'row']}
            justifyContent='space-between'
            alignItems='center'
          >
            <Image
              src='/static/images/profile.jpg'
              boxSize='255px'
              borderRadius='full'
              objectFit='cover'
              alt='Steve Torrence'
              mb='8'
            />
            <Box ml={[0, '6']} pb={[0, '8']}>
              <Text color={secondaryTextColor[colorMode]} mb={4}>
                I'm a software developer living in the DFW metroplex. I love
                eating food, watching cheesy horror movies, and hanging out with
                my wife and our two dogs.
              </Text>
              <Text color={secondaryTextColor[colorMode]} mb={4}>
                I'm a firm believer that software development is more about
                people than code.
              </Text>
              <Text color={secondaryTextColor[colorMode]}>
                I’m always eager to connect — find me on{' '}
                <Link
                  href='https://github.com/storrence88'
                  color={linkColor[colorMode]}
                  _hover={{
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    textDecoration: 'none'
                  }}
                  isExternal
                >
                  Github
                </Link>{' '}
                or{' '}
                <Link
                  href='https://twitter.com/storrence_88'
                  color={linkColor[colorMode]}
                  _hover={{
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    textDecoration: 'none'
                  }}
                  isExternal
                >
                  Twitter
                </Link>
                !
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </Container>
  );
}
