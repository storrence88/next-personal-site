import React from 'react';
import { parseISO, format } from 'date-fns';
import Container from '../components/container';
import BlogSeo from '../components/BlogSeo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar
} from '@chakra-ui/react';

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const textColor = {
    light: 'gray.700',
    dark: 'gray.300'
  };

  return (
    <Container>
      <BlogSeo
        url={`https://steventorrence.com/blog/${slug}`}
        {...frontMatter}
      />
      <Stack
        as='article'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='1200px'
        w='100%'
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='1200px'
          w='100%'
        >
          <Heading mb={2} as='h1' size='xl' fontFamily='Raleway'>
            {frontMatter.title}
          </Heading>
          <Flex
            justify='space-between'
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w='100%'
            mb={4}
          >
            <Flex align='center'>
              <Avatar
                size='md'
                name='Steven Torrence'
                src='/static/images/profile-thumbnail.jpg'
                mr={2}
              />
              <Text fontSize='md' color={textColor[colorMode]}>
                {'Steven Torrence / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            <Text fontSize='md' color='gray.500' minWidth='100px' mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}
