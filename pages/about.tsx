import { useColorMode, Stack, Flex, Heading, Text } from '@chakra-ui/react';
import Container from '../components/container';
import { NextSeo } from 'next-seo';

const About = () => {
  const { colorMode } = useColorMode();
  const url = 'https://steventorrence.com/about';
  const title = 'About Me – Steven Torrence';
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.300'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
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
            <Heading mb={6} as='h1' size='2xl' fontFamily='Raleway'>
              My Story 📖
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, I’m Steve Torrence. I'm a software developer with a
              background in music education. I currently work at CrateBind, a
              consulting agency in Dallas that specializes in creating custom
              software, mobile apps and websites.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Music played a significant role in my life growing up. I attended
              Sam Houston State University and pursued a degree in Music
              Education.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              After 7 incredible years teaching at the high school and middle
              school level, I felt it was time for a change. I decided it was
              time to pursue my other great passion: Technology! In 2018, I
              attended the Coding Dojo Bootcamp in Dallas. There I was
              introduced to the wonderful world of Javascript, Python, and Ruby!
            </Text>
            <Text Text color={secondaryTextColor[colorMode]} mb={4}>
              Soon after the bootcamp, I was hired as a developer at CrateBind.
              My first two years, I had the opportunity to learn and work with
              some incredibly smart people.
            </Text>
            <Text Text color={secondaryTextColor[colorMode]} mb={4}>
              I'm soon coming up on my third year as a developer and I'm finding
              there's still so much to discover. I'm hoping to use my blog as a
              means of organizing my thoughts and sharing any bits of wisdom I
              discover along the way!
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
