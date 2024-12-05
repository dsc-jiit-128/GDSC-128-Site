import React from 'react';
import { ChakraProvider,Image } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import { Route } from 'react-router-dom';

import Nav from '../components/navbar';
import Head from '../components/heading';
import BuildTogether from '../components/buildTogether';
import WhatDoWeDo from '../components/whatDoWeDo';

import HomepageEvents from '../components/Homepage_events';





function Home() {
  return (
    <>
      <Box
        bgColor={'#111111'}
        height={'100%'}
        w={'100%'}
        textOverflow={'hidden'}
    
    
        m={'0'}
        p={'0'}
        overflowX={'hidden'}
        overflowY={'hidden'}
        overflow={'hidden'}
        overflowWrap={'hidden'}
        overscrollX={'hidden'}
        overscrollY={'hidden'}
        overscrollBehavior={'hidden'}
        overscrollBehaviorX={'hidden'}
        overscrollBehaviorY={'hidden'}
        overscroll={'hidden'}
      >    
        <Nav />
        <Head />
        <BuildTogether />
        <WhatDoWeDo />
        <HomepageEvents />
      </Box>
    </>
  );
}
export default Home;
