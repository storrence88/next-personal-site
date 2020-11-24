import { useState } from 'react';
import Container from '../components/container';
import BlogPost from '../components/BlogPost';
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import {
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Flex,
  Heading,
  Icon
} from '@chakra-ui/react';

const Blog = () => {
  console.log(blogPosts);
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
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
            My Thoughts 📝
          </Heading>
          <InputGroup my={4} mr={4} w='100%'>
            <Input
              aria-label='Search articles'
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search articles'
            />
            <InputRightElement>
              <Icon name='search' color='gray.300' />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
          mt={8}
        >
          <Heading letterSpacing='tight' mb={4} size='xl' fontWeight={700}>
            All Posts
          </Heading>
          {!filteredBlogPosts.length && 'No posts found.'}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
      </Stack>
    </Container>
  );
};

export default Blog;
