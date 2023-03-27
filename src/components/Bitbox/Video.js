import {
  GridItem,
  SimpleGrid,
  Grid,
  Image,
  Text,
  Flex,
  Link,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { AspectRatio } from '@chakra-ui/react';
export default function Video() {
  return (
    <>
      <Box
        margin="auto"
        marginTop={{ base: '10vw', md: '100px' }}
        mb={{ base: '5vw', md: 'auto' }}
      >
        <Text
          fontSize={{ base: '8vw', md: '6xl' }}
          textAlign="center"
          color={'white'}
        >
          {' '}
          BITBOX 3.0 Is Out{' '}
        </Text>
        <Box mt="8vw">
          <Box className="outer2 redd">
            <Box className="inner2"></Box>
          </Box>
          <AspectRatio maxW="70%" maxH="50%" margin="auto">
            <iframe
              title="naruto"
              src="https://youtube.com/embed/-FkQqYktMRY"
              allowFullScreen
            />
          </AspectRatio>
          <Box className="outer yelloww">
            <Box className="inner"></Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
}
