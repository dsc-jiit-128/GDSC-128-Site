
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import {
  Image,
  Text
} from '@chakra-ui/react';
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
        image="/gitgithub.webp"
        badge="SESSION-1"
        heading="Git & Github"
        text="During this session, students were exposed to the effective utilization of GitHub for coding and collaborative purposes.
        "
      />
       <EventCard
        image="/aimlsession.webp"
        badge="SESSION-2"
        heading="AI ML Session"
        text="Dissected AI, ML, and Deep Learning to exploring various ML types and models. 
        "
      />
    </>
  );
}
export default Sessions;