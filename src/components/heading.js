import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';

export default function Head() {
  return (
    <>
      <Box  align="center" pb={10}>
        <Text as="b"  fontSize={'2.5vw'}>Google Developer Students Club</Text>
        <Text  fontSize={'1.6vw'}> Jaypee Institute of Information Technology - Sec 128</Text>
      </Box>
    </>
  );
}
