import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Link,
  chakra
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.300'
  };
  // const MotionBox = motion.custom(Box);
  const MotionBox = chakra(motion.div);
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
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
                  size='lg'
                  as='h2'
                  mb={2}
                  fontWeight='bold'
                  fontFamily="Raleway,'Source Code Pro', Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'"
                >
                  <Text fontSize='md' color={secondaryTextColor[colorMode]}>
                    {format(parseISO(frontMatter.publishedAt), 'MMM dd, yyyy')}
                  </Text>
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
