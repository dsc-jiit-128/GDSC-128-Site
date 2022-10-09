import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import Nav from '../components/navbar';
import Head from '../components/heading';
import BuildTogether from '../components/ buildTogether';
import WhatDoWeDo from '../components/whatDoWeDo';
import Links from '../components/links';
//import Teams from '../components/teambox';
//import Teamnav from '../components/footerofteams';
//import Bottomteam from '.,/components/bottomnav_teamspage';

function Teampage() {
  return (
    <ChakraProvider>
      <>
        <Box bgColor={'#111111'} height={'100%'} m={0}>
          <Nav />
          <Head />



         
        </Box>


      </>
    </ChakraProvider>
  );
}

export default Teampage;
