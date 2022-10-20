import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { Stack, VStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link } from '@chakra-ui/react';
import Nav from '../components/navbar';
import Head from '../components/heading';
import BuildTogether from '../components/ buildTogether';
import WhatDoWeDo from '../components/whatDoWeDo';
import Links from '../components/links';
import Teams from '../components/teambox';
import Teamnav from '../components/footerofteams';
import Bottomteam from '../components/bottomnav_teamspage';
import { useAutoAnimate } from '@formkit/auto-animate/react'
//import css
import '../css/Animation.css'
export default function Eventsbar() {
    return (
      <>
<ChakraProvider>
      <>
        <Box bgColor={'#111111'} height={'100%'} m={0}>
          <Nav />
          <Head />
          <Flex
          
          justify={'center'} align={'center'}>
            <Box
              justifySelf={'center'}
              alignContent={'center'}
              bgPosition={'center'}
              alignItems={'center'}
              width={950}
              height={400}
              p={10}
              borderRadius={15}
              bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
              
            >
              <Text
                fontSize={'2xl'}
                fontWeight={'bold'}
                color={'white'}
                ml={4}
                className="fade-in"
                textAlign={'center'}
                key={posArray[selectedPos].key}
              >
                {posArray[selectedPos].name}
              </Text>
           <HStack>  <Image
                src={posArray[selectedPos].image}
                position="relative"
                ml={4}
                mb={3}
                width={'25%'}
                size={'auto'}
                mt={7}
              />
              <Box pl={20} ml={10} pt={-5} mt={-2}  position='relative' >
            <Text
               
                color={'white'}
                ml={4}
                className="fade-in"
                textAlign={'center'}
                key={posArray[selectedPos].key}
              >
                {posArray[selectedPos].name}
              </Text>
              </Box>
             


             </HStack>
              

            </Box>
          </Flex>

          <Flex align={'center'} justify="center">
            <VStack>
              <Box>
                <Box textAlign={'center'} alignItems="center" color={'white'}>
                  <Text mb={'0.61%'} fontSize={30} mt={5}
                  _hover={{   bgGradient:"linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)", bgClip:"text"}}
                                    >
                    Core Team
                  </Text>

                  <Image
                    src="/Line 3.png"
                    ml={'auto'}
                    mr={'auto'}
                    align="center"
                  />
                </Box>
              </Box>

              <Box
                mt={4}
                alignContent="center"
                position={'relative'}
                w="100%"
                
                ml={50}
              >
               
                <TeamNav
                  posArray={posArray}
                  selectedPos={selectedPos}
                  setSelectedPos={setSelectedPos}
                  setPosArray={setPosArray}
                />

              </Box>
            </VStack>
          </Flex>
        </Box>
      </>
    </ChakraProvider>
    </>
    );
    }