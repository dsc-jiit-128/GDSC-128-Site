import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import Nav from '../components/navbar';
import Head from '../components/heading';
import Signupbox from '../components/SignupBox';
function Signup() {
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
          <Signupbox/>

          </Box>
          </>
  );
}
export default Signup;
