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
              Music played a significant role in my life growing up. After
              graduating from high school, I attended Sam Houston State
              University and pursued a degree in Music Education.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              After 7 incredible years teaching at the high school and middle
              school level, I felt it was time for a change. I decided it was
              time to pursue my other great passion: Technology! In 2018, I
              attended the Coding Dojo Bootcamp in Dallas. It was there I was
              introduced to the wonderful world of Javascript, Python, and Ruby!
            </Text>
            <Text Text color={secondaryTextColor[colorMode]} mb={4}>
              Soon after the bootcamp, I was hired as a developer at CrateBind.
              I spent my first two years working closely with other developers
              absorbing as much information as possible!
            </Text>
            <Text Text color={secondaryTextColor[colorMode]} mb={4}>
              Fast forward to 2020 and I'm coming up on my third year as a
              developer. I'm finding there's still so much to discover and I'm
              hoping to use my blog as a means of organizing my thoughts and
              sharing any bits of wisdom I discover along the way!
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
