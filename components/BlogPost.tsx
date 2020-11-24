import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.300'
  };
  const MotionBox = motion.custom(Box);
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      x: 60,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  };

  return (
    <motion.div variants={fadeInUp}>
      <MotionBox whileHover={{ scale: 1.04 }}>
        <NextLink href={`blog/${slug}`} passHref>
          <Link w='100%' _hover={{ textDecoration: 'none' }}>
            <Box mb={8} display='block' width='100%'>
              <Flex
                width='100%'
                align='flex-start'
                justifyContent='space-between'
                flexDirection={['column', 'row']}
              >
                <Heading
                  size='md'
                  as='h2'
                  mb={2}
                  fontWeight='bold'
                  fontFamily="'Source Code Pro', Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'"
                >
                  {title}
                </Heading>
              </Flex>
              <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
            </Box>
          </Link>
        </NextLink>
      </MotionBox>
    </motion.div>
  );
};

export default BlogPost;
