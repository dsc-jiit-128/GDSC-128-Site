import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';
import {
  GridItem,
  SimpleGrid,
  Grid,
  Image,
  Text,
  Flex,
  Link,
  Box,
  HStack,
  grid,
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
export default function FAQ() {
  return (
    <>
      <Box >
        {/* <Text>Hello</Text> */}
        <Text
          fontSize={{ base: '8vw', md: '3vw' }}
          // opacity={[0, 1]}
          ml={{ base: 0, md: 5 }}
          fontWeight={'semibold'}
          color="white"
          pl={0}
          pt={'2.2vw'}
          //  style={{ textDecoration: 'none' }}
          fontFamily={'Gilroy-SemiBold'}
          align="center"
        >
          FAQ{' '}
        </Text>
      </Box>
      <Box margin={{base:'0vw', md:"130px"}} mb={'10vw'}>
        <Accordion allowToggle>
          <AccordionItem
             ml={{base:'5vw',md:20}}
             mr={{base:'5vw',md:20}}
             mt={{base:'5vw', md:5}}
             pt={{base:0, md:2}}
            bgColor={'#191919'}
            border={'transparent'}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      textColor={'white'}
                      fontFamily={'Gilroy-Medium'}
                      alignSelf={'center'}
                      fontSize={{ base: '15px', md: '1.5vw' }}
                    >
                      What is a hackathon?{' '}
                    </Box>
                    {isExpanded ? (
                      <CloseIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'red'}
                      />
                    ) : (
                      <AddIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'red'}
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    color={'#838181'}
                    fontFamily={'Gilroy-Medium'}
                    fontSize={{ base: '15px', md: '1.5vw' }}
                  >
                    A hackathon is social coding event where programmers,
                    designers and developers collaborate to solve a problem and
                    compete for cash prizes. Hackathons are a super-condensed
                    learning experience and the time constraint helps you to
                    break your shell to build something from the ground up with
                    teamwork and harmony.{' '}
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem
            ml={{base:'5vw',md:20}}
            mr={{base:'5vw',md:20}}
            mt={{base:'5vw', md:5}}
            pt={{base:0, md:2}}
            bgColor={'#191919'}
            border={'transparent'}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      textColor={'white'}
                      fontFamily={'Gilroy-Medium'}
                      alignSelf={'center'}
                      height={'80%'}
                      fontSize={{ base: '15px', md: '1.5vw' }}
                    >
                      Why would someone participate in a hackathon?{' '}
                    </Box>
                    {isExpanded ? (
                      <CloseIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'#FBBC04'}
                      />
                    ) : (
                      <AddIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'#FBBC04'}
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    color={'#838181'}
                    fontFamily={'Gilroy-Medium'}
                    fontSize={{ base: '15px', md: '1.5vw' }}
                  >
                    People participate in hackathons for lots of reasons: the
                    challenge, the creative outlet, the community collaboration,
                    the networking, and swags. The plethora of problem
                    statements act as a juggernaut for participants and keeps
                    them on the edge of their seats.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
             ml={{base:'5vw',md:20}}
             mr={{base:'5vw',md:20}}
             mt={{base:'5vw', md:5}}
             pt={{base:0, md:2}}
            bgColor={'#191919'}
            border={'transparent'}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      textColor={'white'}
                      fontFamily={'Gilroy-Medium'}
                      alignSelf={'center'}
                      fontSize={{ base: '15px', md: '1.5vw' }}
                    >
                      Who can participate? Are there any prerequisites?{' '}
                    </Box>
                    {isExpanded ? (
                      <CloseIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'#0F9D58'}
                      />
                    ) : (
                      <AddIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'#0F9D58'}
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    color={'#838181'}
                    fontFamily={'Gilroy-Medium'}
                    fontSize={{ base: '15px', md: '1.5vw' }}
                  >
                    We welcome and encourage anyone with ideas, programming
                    skills, and enthusiasm to participate in this event! However
                    you need to be enrolled in an undergraduate program.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
             ml={{base:'5vw',md:20}}
             mr={{base:'5vw',md:20}}
             mt={{base:'5vw', md:5}}
             pt={{base:0, md:2}}
            bgColor={'#191919'}
            border={'transparent'}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      textColor={'white'}
                      fontFamily={'Gilroy-Medium'}
                      alignSelf={'center'}
                      fontSize={{ base: '15px', md: '1.5vw' }}
                    >
                      Do I need a team?{' '}
                    </Box>
                    {isExpanded ? (
                      <CloseIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'#4285F4'}
                      />
                    ) : (
                      <AddIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'#4285F4'}
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    color={'#838181'}
                    fontFamily={'Gilroy-Medium'}
                    fontSize={{ base: '15px', md: '1.5vw' }}
                  >
                    Yes, you do need a team to participate in this event. A
                    maximum of 4 team members and a minimum of 2 members is
                    allowed.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
             ml={{base:'5vw',md:20}}
             mr={{base:'5vw',md:20}}
             mt={{base:'5vw', md:5}}
             pt={{base:0, md:2}}
            bgColor={'#191919'}
            border={'transparent'}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      textColor={'white'}
                      fontFamily={'Gilroy-Medium'}
                      alignSelf={'center'}
                      fontSize={{ base: '15px', md: '1.5vw' }}
                    >
                      Will I get a participation certificate?
                    </Box>
                    {isExpanded ? (
                      <CloseIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'red'}
                      />
                    ) : (
                      <AddIcon
                        fontSize="18px"
                        color={'white'}
                        bgColor={'red'}
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    color={'#838181'}
                    fontFamily={'Gilroy-Medium'}
                    fontSize={{ base: '15px', md: '1.5vw' }}
                  >
                    Yes, all participants will get a participation certificate.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}
