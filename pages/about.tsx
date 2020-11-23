import { useColorMode, Stack, Flex, Heading, Text } from '@chakra-ui/react';
import Container from '../components/Container';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.300'
  };

  return (
    <>
      <Container>
        <Stack
          as='main'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          maxW='1200px'
        >
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxW='1200px'
          >
            <Heading letterSpacing='tight' mb={6} as='h1' size='2xl'>
              My Story 📖
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, I’m Steve Torrence. I'm a developer, musician, and educator
              and I currently work at Cratebind in Dallas as a backend
              developer.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I grew up in Houston, Texas and was a HUGE band nerd in high
              school. Of course, I played the best instrument, the bass
              trombone. I followed my passion for music into college where I
              attended Sam Houston State University and pursued Music Education.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Immediately after graduating, I packed up and moved to Dallas for
              my first teaching gig! After spending 7 years teaching at the
              highschool and middle school level, I decided it was time to
              pursue my other great passion: Technology!
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Immediately after leaving the education field, I attended the
              Coding Dojo Bootcamp. There I was introduced to wonderful world of
              Javascript, Python, and Ruby!
            </Text>
            <Text Text color={secondaryTextColor[colorMode]} mb={4}>
              After completion of the bootcamp, I was brought on as a backend
              developer at a consulting agency, Cratebind. During my first two
              years working there I had the opportunity to work with and learn
              from amazingly smart people while picking up many new strategies
              and technologies along the way.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
