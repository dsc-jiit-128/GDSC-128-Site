import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box,Link } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import Nav from '../components/navbar';
import Head from '../components/heading';

import ForgotPasswordForm from '../components/ForgotPass';
function ForgotPass() {
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
          <ForgotPasswordForm/>
          </Box>
          </>
  );
}
export default ForgotPass;
