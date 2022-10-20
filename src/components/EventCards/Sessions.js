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
function Sessions() {
  return (
    <>
    <Box alignItems={'center'}>
      <Image
        src="/techworldabc.jpg"
        width={{ base: '50vw', md: '28vw' }}
        height={{ base: '25vw', md: '14vw' }}
        ml="auto"
        mr = 'auto'

      />
      <Box p={6} textAlign={{base:'center', md: 'left'}}>
        <Text color="white" fontFamily={'Gilroy-Medium'}>
          <Highlight
            color="white"
            query="SESSION-1"
            styles={{ color: 'white', bg: '#FBBC04' }}
            
          >
            SESSION-1
          </Highlight>

          <Heading mb={4} fontFamily={'Gilroy-SemiBold'} >Roadmap</Heading>
          <Text fontSize="m" fontFamily={'Gilroy-Medium'} >Introduction to Web development, Competitive programming, DSA and internship opportunities.</Text>
        </Text>
        <Text></Text>
      </Box>
    </Box>
    <Box alignItems={'center'}>
    <Image
      src="/githubabc.jpg"
      width={{ base: '50vw', md: '28vw' }}
      height={{ base: '25vw', md: '14vw' }}
      ml="auto"
      mr = 'auto'

    />
    <Box p={6} textAlign={{base:'center', md: 'left'}}>
      <Text color="white" fontFamily={'Gilroy-Medium'}>
        <Highlight
          color="white"
          query="SESSION-2"
          styles={{ color: 'white', bg: '#FBBC04' }}
          
        >
          SESSION-2
        </Highlight>

        <Heading mb={4} fontFamily={'Gilroy-SemiBold'} >Git & Github</Heading>
        <Text fontSize="m" fontFamily={'Gilroy-Medium'} >Hands-on session of git and GitHub and introduction to HacktoberFest.</Text>
      </Text>
      <Text></Text>
    </Box>
  </Box>
  <Box alignItems={'center'}>
      <Image
        src="/composeabc.jpg"
        width={{ base: '50vw', md: '28vw' }}
        height={{ base: '25vw', md: '14vw' }}
        ml="auto"
        mr = 'auto'

      />
      <Box p={6} textAlign={{base:'center', md: 'left'}}>
        <Text color="white" fontFamily={'Gilroy-Medium'}>
          <Highlight
            color="white"
            query="SESSION-3"
            styles={{ color: 'white', bg: '#FBBC04' }}
            
          >
            SESSION-3
          </Highlight>

          <Heading mb={4} fontFamily={'Gilroy-SemiBold'} >Compose-Camp</Heading>
          <Text fontSize="m" fontFamily={'Gilroy-Medium'} >Hands-on session on Android development using Jetpack Compose</Text>
        </Text>
        <Text></Text>
      </Box>
    </Box>
  </>
    
  );
}
export default Sessions;
