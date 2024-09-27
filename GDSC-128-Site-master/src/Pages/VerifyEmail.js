import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Nav from '../components/navbar';
import Head from '../components/heading';
import VerifyEmailForm from '../components/verifyemail';
function verifyemail() {
    return (
      <>
        <Box
          bgColor={'#111111'}
          w={'100%'}
          minWidth={'100%'}
          m={'0'}
        >
          <Nav />
          <Head />
          <VerifyEmailForm/>

          </Box>
          </>
  );
}
export default verifyemail;
