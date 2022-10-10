import React from 'react';
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link,SimpleGrid } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
 function Meetups() {
    return (

    
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








        
);
}
export default Meetups;

