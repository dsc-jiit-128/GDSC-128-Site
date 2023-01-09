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
import { Badge } from '@chakra-ui/react'

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
          <Badge colorScheme={'yellow'}>{
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

function Sessions() {
  return (
    <>
      <EventCard
        image="/techworldabc.jpg"
        badge="SESSION-1"
        heading="Roadmap"
        text="Introduction to Web development, Competitive programming, DSA and internship opportunities."
      />

      <EventCard
        image="githubabc.jpg"
        badge="SESSION-2"
        heading="Git & Github"
        text="Hands-on session of git and GitHub and introduction to HacktoberFest."
      />
      <EventCard
        image="/composeabc.jpg"
        badge="SESSION-3"
        heading="Compose-Camp"
        text="Hands-on session on Android development using Jetpack Compose"
      />
    </>
  );
}
export default Sessions;
