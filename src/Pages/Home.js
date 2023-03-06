import React from 'react';
import { ChakraProvider,Image } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import { Route } from 'react-router-dom';

import Nav from '../components/navbar';
import Head from '../components/heading';
import BuildTogether from '../components/ buildTogether';
import WhatDoWeDo from '../components/whatDoWeDo';

import HomepageEvents from '../components/Homepage_events';





function Home() {
  return (
    <>
      <Box
        bgColor={'#111111'}
        height={'100%'}
        w={'100%'}
        minWidth={'100%'}
        m={'0'}
        p={'0'}
        overflowX={'hidden'}
        overflowY={'hidden'}
        position={'relative'}
        overflow={'hidden'}
      
      >
        
                <Image
            src="/blursideleft.png"
            position="absolute"
            top="200%"
            left="-30%"
            ml={'auto'}
            mr={'auto'}
            width={{ base: '80%', md: '65%'}}
            objectFit={'contain'}
            size={{ base: 'auto', md: 'contain' }}
            mt={{ base: '1%', md: 12 }}
            flexShrink={0}
           
                />
                   <Image
            src="/blurrightside.png"
            position="absolute"
            top="120%"
           right="-25%"
            ml={'auto'}
            mr={'auto'}
            width={{ base: '70%', md: '65%'}}
            objectFit={'contain'}
            size={{ base: 'auto', md: 'contain' }}
            mt={{ base: '1%', md: 12 }}
            flexShrink={0}
           
                />
            
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
