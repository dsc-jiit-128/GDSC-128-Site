import React from 'react';
import { ChakraProvider,Image } from '@chakra-ui/react';
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
        overflow={'hidden'}
      >
        
                <Image
            src="/blurblob1.png"
            position="absolute"
            top="200%"
            left="-30%"
            
            ml={'auto'}
            mr={'auto'}
            width={'55%'}
            objectFit={'contain'}
            size={'auto'}
            mt={{ base: '1%', md: 12 }}
            flexShrink={0}
           
                />
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
