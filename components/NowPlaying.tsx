import React from 'react';
import useSWR from 'swr';
import { FaSpotify } from 'react-icons/fa';
import {
  Box,
  Link,
  Stack,
  Image,
  Text,
  Icon,
  Skeleton,
  useColorMode
} from '@chakra-ui/react';

const NowPlaying = () => {
  const fetcher = (args) => fetch(args).then((res) => res.json());
  const { data } = useSWR('/api/now-playing', fetcher);
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.700'
  };

  return (
    <Box
      mb={4}
      display='flex'
      flexDirection='row'
      alignItems='flex-start'
      border='1px solid'
      borderRadius={8}
      borderColor={borderColor[colorMode]}
      p={2}
      w='325px'
    >
      <Skeleton isLoaded={data}>
        <Image
          alt='Spotify album cover'
          height='70px'
          width='70px'
          borderRadius={8}
          src={data?.albumImageUrl || '/static/images/placeholder.jpg'}
        />
      </Skeleton>
      <Stack
        spacing={0}
        justifyContent='center'
        alignItems='flex-start'
        display='flex'
        flexDirection='column'
        ml={3}
      >
        <Link
          fontWeight='medium'
          maxWidth='190px'
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          href={data?.songUrl}
          isExternal
        >
          {data && (data?.title || 'Not Playing')}
        </Link>
        <Text
          color={colorMode === 'light' ? 'gray.500' : 'grey.900'}
          mb={4}
          maxWidth='190px'
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
        >
          {data && (data?.artist || 'Spotify')}
        </Text>
      </Stack>
      <Icon as={FaSpotify} name='spotify' ml='auto' mt={1} color='#1cd760' />
    </Box>
  );
};

export default NowPlaying;
