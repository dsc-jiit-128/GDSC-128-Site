import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';
import Fonts from '../fonts';


export default function Head() {
  return (
    <>
      <Box align="center" pb={10}>
        <Text as="b" fontSize={{ base: '2.5vw', md: '2vw' }} color="white " >
          Google Developer Students
        </Text>
        <Text fontSize={{ base: '2.5vw', md: '1.6vw' }} color="white">
          {' '}
          Jaypee Institute of Information Technology - Sec 128
        </Text>
      </Box>
    </>
  );
}
