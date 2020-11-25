import { useColorMode, Stack, Flex, Heading, Text } from '@chakra-ui/react';
import Container from '../components/container';

export default function Home() {
  const { colorMode } = useColorMode();
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
            mb={6}
            as='h1'
            size='2xl'
            color={secondaryTextColor[colorMode]}
            fontFamily='Raleway'
          >
            Hi, I'm Steve 👋
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I'm a developer living just outside of the DFW metroplex. Welcome to
            my personal site!
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
