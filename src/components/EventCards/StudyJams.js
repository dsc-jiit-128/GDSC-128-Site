
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
  Badge
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Highlight } from '@chakra-ui/react';
const EventCard = (props) => {
  return (
    <Box alignItems={'center'}>
      <Image
        src={props.image}
        //src="/techworldabc.jpg"
        width={{ base: '50vw', md: '28vw' }}
        height={{ base: '25vw', md: '14vw' }}
        ml="auto"
        mr="auto"
      />
      <Box p={6} textAlign={{ base: 'center', md: 'left' }}>
        <Text color="white" fontFamily={'Gilroy-Medium'}>
          <Badge colorScheme={'red'}>{
            props.badge
          }</Badge>

          <Heading mb={4} fontFamily={'Gilroy-SemiBold'}>
            {props.heading}
            {/* Roadmap */}
          </Heading>
          <Text fontSize="m" fontFamily={'Gilroy-Medium'}>
            {props.text}
            {/* Introduction to Web development, Competitive programming, DSA and
            internship opportunities. */}
          </Text>
        </Text>
        <Text></Text>
      </Box>
    </Box>
  );
}
function StudyJams() {
  return (
    <></>
  );
}
export default StudyJams;
