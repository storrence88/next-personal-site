import { useColorMode, Stack, Flex, Heading, Text } from '@chakra-ui/react';
import Container from '../components/container';

export default function Home() {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.200'
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
            letterSpacing='tight'
            mb={6}
            as='h1'
            size='2xl'
            color={secondaryTextColor[colorMode]}
          >
            Hi, I'm Steve. 👋
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I'm a developer living just outside of the DFW metroplex. Welcome to
            my personal site!
          </Text>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
          mt={8}
        >
          <Heading letterSpacing='tight' mb={4} size='l' fontWeight={700}>
            Recent Articles
          </Heading>
          <Text>Article 1</Text>
          <Text>Article 2</Text>
          <Text>Article 3</Text>
        </Flex>
      </Stack>
    </Container>
  );
}
