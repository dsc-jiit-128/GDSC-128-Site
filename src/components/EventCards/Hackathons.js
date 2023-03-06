import React from 'react';
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';
import {
  GridItem,
  Grid,
  Image,
  Text,
  Flex,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Highlight } from '@chakra-ui/react';
function Hackathons() {
  return (
   <Box alignItems={'center'}>
      <Image
        src="/image 21.webp"
        width={{ base: '50vw', md: '28vw' }}
        height={{ base: '25vw', md: '14vw' }}
        ml = 'auto'
        mr = 'auto'
      />
      <Box p={6} textAlign={{ base: 'center', md: 'left' }}>
        <Text color="white">
          <Highlight
            color="white"
            query="HACKATHONS"
            styles={{ color: 'white', bg: '#FF0F0F' }}
            
          >
            HACKATHONS
          </Highlight>

          <Heading mb={4}>ANCD</Heading>
          <Text fontSize="xl">Lorem Ipsum abcd check 1</Text>
        </Text>
        <Text></Text>
      </Box>
    </Box>
  )
}
export default Hackathons;
