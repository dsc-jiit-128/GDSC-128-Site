
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
        image="/techworldabc.webp"
        badge="SESSION-1"
        heading="Roadmap"
        text="Introduction to Web development, Competitive programming, DSA and internship opportunities."
      />

      <EventCard
        image="githubabc.webp"
        badge="SESSION-2"
        heading="Git & Github"
        text="Hands-on session of git and GitHub and introduction to HacktoberFest."
      />
      <EventCard
        image="/composeabc.webp"
        badge="SESSION-3"
        heading="Compose-Camp"
        text="Hands-on session on Android development using Jetpack Compose"
      />
      <EventCard
        image="/orientation.webp"
        badge="SESSION-4"
        heading="Orientation session"
        text="A session where we told the freshers about the structure of GDSC and about how to begin your journey."
      />
      <EventCard
        image="/decrypt.webp"
        badge="SESSION-5"
        heading="Decrypt the Crypto"
        text="GDSC JIIT-128 hosted a session to keep the crypto world to enter the new threshold."
      />
      <EventCard
        image="/hackathon.webp"
        badge="SESSION-6"
        heading="Intro to Hackathon"
        text="Come, explore and Code. BITBOX 3.0 the annual hackathon of GDSC JIIT-128, session where we gave an intro about the working of hackathons."
      />
      <EventCard
        image="/bootcamp.webp"
        badge="SESSION-7"
        heading="Bootcamp"
        text="This was a three day bootcamp which helped students to gain experience about HTML, CSS and JavaScript through app building.
        "
      />
    </>
  );
}
export default Sessions;