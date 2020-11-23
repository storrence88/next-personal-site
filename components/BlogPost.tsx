import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.300'
  };
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w='100%' _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display='block' width='100%'>
          <Flex
            width='100%'
            align='flex-start'
            justifyContent='space-between'
            flexDirection={['column', 'row']}
          >
            <Heading size='md' as='h3' mb={2} fontWeight='medium'>
              {title}
            </Heading>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
