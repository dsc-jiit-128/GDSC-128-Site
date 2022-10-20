import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';
import Fonts from '../fonts';


export default function Head() {
  return (
    <>
      <Box align="center" pb={10}>
        <Text as="b" fontSize={{ base: '2.5vw', md: '2vw' }} color="white "  fontFamily={'Gilroy-SemiBold'}>
          Google Developer Student Club
        </Text>
        <Text fontSize={{ base: '2.5vw', md: '1.6vw' }} color="rgba(255, 255, 255, 0.7)" fontFamily={'Gilroy-Medium'}>
          {' '}
          Jaypee Institute of Information Technology - Sec 128
        </Text>
      </Box>
    </>
  );
}
