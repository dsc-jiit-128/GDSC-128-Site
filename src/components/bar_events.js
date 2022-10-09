import React from 'react';
import { Box, Center, Heading, HStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link,SimpleGrid } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Eventsbar() {
    return (

      <>

      < Box
        alignContent={'center'}
        alignItems={'center'}
            width={950}   ml={145} mr={95} paddingLeft={10}  paddingTop={1} paddingBottom={20} borderRadius={15} >


<Tabs isFitted variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: '#FF0F0F' }}>HACKATHONS</Tab>
    <Tab  _selected={{ color: 'white', bg: '#FBBC04' }}>SESSIONS</Tab>
    <Tab  _selected={{ color: 'black', bg: 'white' }}>ALL</Tab>
    <Tab _selected={{ color: 'white', bg: '#4285F4' }}>STUDYJAMS</Tab>
    <Tab _selected={{ color: 'white', bg: '#0F9D58' }}>MEETUPS</Tab>
    
  </TabList>
  <TabPanels>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
  <Box bg='tomato' height='200px'></Box>
  <Box bg='tomato' height='200px'></Box>
  <Box bg='tomato' height='200px'></Box>
  <Box bg='tomato' height='200px'></Box>
  <Box bg='tomato' height='200px'></Box>
</SimpleGrid>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>


      </Box>

      </>

        
    );
}