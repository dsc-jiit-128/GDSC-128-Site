import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Box } from '@chakra-ui/react';
import Nav from '../components/navbar';
import Head from '../components/heading';
import Eventsbar from '../components/bar_events';
function Events() {
    return (
      <ChakraProvider>
        <>
        <Box bgColor={'#111111'} height={'100%'} m={0}>
            <Nav />
            <Head />
            <Eventsbar/>
         
  
   
  
           
          </Box>
  
  
  
        </>
      </ChakraProvider>
    );
  }
  
  export default Events;
  