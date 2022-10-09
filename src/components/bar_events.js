import React from 'react';
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link,SimpleGrid } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import {abc} from './Hackathons'
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
     
    <Box  >
    <Image src="/image 21.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='HACKATHONS' styles={{ color:'white',  bg: '#FF0F0F' }}>

     
HACKATHONS



        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>




</SimpleGrid>
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
    <Box  >
    <Image src="/image 22.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='SESSIONS' styles={{ color:'white',  bg: '#FBBC04' }}>

     
SESSIONS



        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>






</SimpleGrid>

   
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
    <Box  >
    <Image src="/image 21.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='HACKATHONS' styles={{ color:'white',  bg: '#FF0F0F' }}>

     
HACKATHONS



        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>
  <Box  >
    <Image src="/image 24.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='MEETUPS' styles={{ color:'white',  bg: '#0F9D58' }}>

MEETUPS


        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>
  <Box  >
    <Image src="/image 22.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='SESSIONS' styles={{ color:'white',  bg: '#FBBC04' }}>

     
SESSIONS



        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>

  <Box  >
    <Image src="/image 23.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='STUDY JAMS' styles={{ color:'white',  bg: '#4285F4' }}>

     STUDY JAMS



        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>







</SimpleGrid>

   
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
    <Box  >
    <Image src="/image 23.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='STUDY JAMS' styles={{ color:'white',  bg: '#4285F4' }}>

     STUDY JAMS



        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>





</SimpleGrid>

   
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
    <Box  >
    <Image src="/image 24.png" width={400} height={200} />
    <Box p={6}>
        <Text color='white'>
        <Highlight  color='white' query='MEETUPS' styles={{ color:'white',  bg: '#0F9D58' }}>

MEETUPS


        
</Highlight>


<Heading mb={4}>ANCD</Heading>
<Text fontSize='xl'>
    Lorem Ipsum abcd check 1
  </Text>


</Text>
        <Text>


        </Text>



    </Box>
  </Box>





 
</SimpleGrid>

   
    </TabPanel>
  </TabPanels>
</Tabs>


      </Box>

      </>

        
    );
}