import React from 'react';
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link,SimpleGrid } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import Hackathons from './EventCards/Hackathons'
import Meetups from './EventCards/Meetups'
import Sessions from './EventCards/Sessions'
import StudyJams from './EventCards/StudyJams';
export default function Eventsbar() {
    return (

      <>

      < Box
        alignContent={'center'}
        alignItems={'center'}
            width={950}   ml={145} mr={95} paddingLeft={10}  paddingTop={1} paddingBottom={20} borderRadius={15} >


<Tabs isFitted variant='soft-rounded' colorScheme='green' >
  <TabList>
    <Tab _selected={{ color: 'white', bg: '#FF0F0F' }}>HACKATHONS</Tab>
    <Tab  _selected={{ color: 'white', bg: '#FBBC04' }}>SESSIONS</Tab>
    <Tab  _selected={{ color: 'black', bg: 'white' }}>ALL</Tab>
    <Tab _selected={{ color: 'white', bg: '#4285F4' }}>STUDYJAMS</Tab>
    <Tab _selected={{ color: 'white', bg: '#0F9D58' }}>MEETUPS</Tab>
    
  </TabList>
  <TabPanels>
    <TabPanel pt={10}>
    <SimpleGrid columns={2} spacing={10}>
      <Hackathons />
     
  
</SimpleGrid>
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
      <Sessions />
   



</SimpleGrid>

   
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
      <Hackathons />
      <Meetups />
  
  <Sessions/>

 <StudyJams/>







</SimpleGrid>

   
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
   

<StudyJams />



</SimpleGrid>

   
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
   <Meetups />




 
</SimpleGrid>

   
    </TabPanel>
  </TabPanels>
</Tabs>


      </Box>

      </>

        
    );
}