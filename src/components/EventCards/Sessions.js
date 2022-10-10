import React from 'react';
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link,SimpleGrid } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
 function Sessions() {
    return (

    
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
    
    
    

        
);
}
export default Sessions;

