import { useState } from 'react';
import Container from '../components/container';
import BlogPost from '../components/BlogPost';
import { NextSeo } from 'next-seo';
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { motion } from 'framer-motion';
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
  const [searchValue, setSearchValue] = useState('');
  const url = 'https://steventorrence.com/blog';
  const title = 'Blog – Steven Torrence';
  const description = 'Thoughts of a Ruby/Javascript developer';
  const MotionFlex = motion.custom(Flex);
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };
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
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxW='1200px'
        w='100%'
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxW='1200px'
          w='100%'
        >
          <Heading mb={6} as='h1' size='2xl' fontFamily='Raleway'>
            My Thoughts 📝
          </Heading>
        </Flex>
        <MotionFlex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
          mt={8}
          initial='initial'
          animate='animate'
        >
          {/* {!filteredBlogPosts.length && 'No posts found.'} */}
          <motion.div variants={stagger}>
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </motion.div>
        </MotionFlex>
      </Stack>
    </Container>
  );
};

export default Blog;
