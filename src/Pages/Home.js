import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import { Route } from 'react-router-dom';

import Nav from '../components/navbar';
import Head from '../components/heading';
import BuildTogether from '../components/ buildTogether';
import WhatDoWeDo from '../components/whatDoWeDo';
import Links from '../components/links';





function Home() {
  return (
    <>
      <Box
        bgColor={'#111111'}
        height={'100%'}
        w={'100%'}
        minWidth={'100%'}
        m={'0'}
        overflowX={'hidden'}
      >
        <Nav />
        <Head />
        <BuildTogether />
        <WhatDoWeDo />
        <Links />
      </Box>
    </>
  );
}
export default Home;
