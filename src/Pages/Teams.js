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
import '../App.css';
import '../css/Animation.css'


const TeamNavMember = (props) => {
  //hover state
  const [hover, setHover] = useState(false);
  return (
    <Box
      pos="relative"
      onClick={() => props.onClick()}
      w={props.isSelected ? '120px' : '100px'}
      h={props.isSelected ? '120px' : '100px'}
      borderRadius="50%"
      overflow="hidden"
      //onHover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={props.image} w="100%" h="100%" objectFit="cover" />
      {hover && (
        <Box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.5)"
          display="flex"
        >
          <Text 
            color="white"
            m="auto"
            p={2}
            fontSize="1.2rem"
            textAlign="center"
            >
            {props.name}
          </Text>
        </Box>
      )}
    </Box>
  );
}


const TeamNav = (props) => {
  // available pos must be in odd numbers
  const posArray = props.posArray;
  const selectedPos = props.selectedPos;
  const setSelectedPos = props.setSelectedPos;
  const setPosArray = props.setPosArray;
  // selectedPos will always be in the center and bigger than the other positions

  


  const handleClicked = (it) => {
    //find the index of the clicked item
    const index = posArray.findIndex((item) => item.name === it.name);
    // if the selectedPos is clicked, do nothing
    if (index === selectedPos) return;
    // if the selectedPos is not clicked, set the selectedPos to the clicked index
    
    const temp = [...posArray];
    //get element at index and put it in the center
    const selectedElement = temp.splice(index, 1);
    temp.splice(temp.length/2, 0, selectedElement[0]);
    setSelectedPos(Math.ceil(temp.length-1)/2);
    //set the new array
    setPosArray(temp);
  }
  
  const [parent] = useAutoAnimate(/* optional config */)

  return (
    <HStack 
    spacing={5}
    p={5}
    ref={parent}
    minH="200px"
    >
      {
      
      posArray.map(it => (
          <TeamNavMember
            image={it.image1}
            name={it.name}
            onClick={() => handleClicked(it)}
            key={it.key}
            isSelected={posArray.indexOf(it) === selectedPos}
          />
       
        
      ))}
    </HStack>
  );
}

function Teampage() {
  
  const [posArray, setPosArray] = useState([
    {
      image: '/sanat.png',
      image1: '/sanat_white.png',
      name: 'UI/UX Designer',
      content: 'A UI/UX designer of GDSC JIIT-128, Sanat is responsible for designing websites,creating videos and creating posters for various events organized by GDSC JIIT-128.',
      key: '1',
    },
    {
      image: '/chaaya.png',
      image1: '/chaaya_white.png',
      content: 'One of the content writers of GDSC JIIT-128, she is brightly creative and imaginative and knows how to present the community to others with her talent of content writing.',
      name: 'Management',
      key: '2',
    },
    {
      image: '/parth_garg.png',
      image1: '/parth_garg_white.png',
      content:'Social media handler of GDSC JIIT- 128, Parth is responsible for creating awareness through our Social Media Platform to provide information about the community and contact with volunteers who show interest in the society.',
      name: 'Social Media',
      key: '3',
    },
    {
      image: '/pariyashi.png',
      image1: '/pariyashi_white.png',
      content: ' The content writer of GDSC JIIT- 128, creatively presenting the community ideas and events, the bridge to communication that is content is her responsibility.',
      name: 'Content Writer',
      key: '4',
    },
    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      content:' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '5',
    }
  ])
  const [selectedPos, setSelectedPos] = useState(Math.ceil(posArray.length-1)/2);
  const [parent] = useAutoAnimate(/* optional config */)
  return (
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
  );
}

export default Teampage;
