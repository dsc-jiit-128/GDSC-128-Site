import React from 'react';
import { Box, Center, HStack } from '@chakra-ui/react';
import { Image, Text, Flex, Link, Divider, SimpleGrid } from '@chakra-ui/react';
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import "../Pages/xyz.css"
import { useMediaQuery } from '@chakra-ui/react';


import { BsEnvelope } from 'react-icons/bs';

import { Route } from 'react-router-dom';
import Teampage from '../Pages/Teams';

export default function HomepageEvents() {
  return (
    <>
      <Box
        alignItems={'center'}
        // justifyContent={'space-between'}
        // border={'4px green solid'}
        display={'flex'}
        // justifyContent={'space-evenly'}
        // alignItems={'center'}
        // textAlign={'center'}
        flexDirection={'column'}
        color={'white'}
        justifyContent="center"
      >


     <Box textAlign={'center'} pt={10}>
          <Text
            as={'b'}
            fontSize={{ base: '20px', md: '4.5vw' }}
            fontFamily={'Gilroy-SemiBold'}
            mt={100}
            color="white"
          >
            Events
          </Text>
        </Box>

<Box>

   
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX='16vw' spacingY='5' mt='10' ml='5' mr='5' mb='10' >

  <Box background="rgba(0, 0, 0, 0.3)" zIndex={3}
  border={'1px'}  borderColor="#EA4335" borderRadius="20px"
   height={{base:"22vw",md:"15vw"}} w={{base:"50vw",md:"30vw"}} 
   >
    
    <Text color="#EA4335" fontFamily={'Gilroy-Medium'}
     align='center' pt={{base:'2', md:'4'}} pl='5' pr='5'      
    fontSize={{ base: '3vw', md: '1.8vw' }}>
        Hackathons
        </Text>
        <Text color="#EA4335" fontFamily={'Gilroy-Medium'}
     align='center' pb='5'    pt={{base:'1', md:'4'}} pl='0.5' pr='0.5' 
    fontSize={{ base: '2vw', md: '1.3vw' }}>
        The idea of conducting hackathons is to make students code collaboratively from scratch to end with a working prototype.
        </Text>
    </Box> 

    <Box background="rgba(0, 0, 0, 0.3)" 
  border={'1px'}  borderColor="#FBBC04" borderRadius="20px"
  height={{base:"25vw",md:"15vw"}} w={{base:"50vw",md:"30vw"}} 
  >
    <Text color="#FBBC04" fontFamily={'Gilroy-Medium'}
     align='center' pt={{base:'2', md:'4'}} pl='5' pr='5'      
    fontSize={{ base: '3vw', md: '1.8vw' }}>
       Sessions
        </Text>
        <Text color="#FBBC04" fontFamily={'Gilroy-Medium'}
     align='center'     pt={{base:'1', md:'4'}} pl='0.5' pr='0.5' pb='5'
    fontSize={{ base: '2vw', md: '1.3vw' }}>
Small sessions for the students to showcase their projects, achievements and for getting to know about the current trends.
        </Text>
    </Box> 
    <Box background="rgba(0, 0, 0, 0.3)" 
  border={'1px'}  borderColor="#4285F4" borderRadius="20px"
  height={{base:"25vw",md:"15vw"}} w={{base:"50vw",md:"30vw"}} 
  >
    <Text color="#4285F4" fontFamily={'Gilroy-Medium'}
     align='center' pt={{base:'2', md:'4'}} pl='5' pr='5'      
    fontSize={{ base: '3vw', md: '1.8vw' }}>
    Study Jams
        </Text>
        <Text color="#4285F4" fontFamily={'Gilroy-Medium'}
     align='center'     pt={{base:'1', md:'4'}} pl='0.5' pr='0.5'pb='5'
    fontSize={{ base: '2vw', md: '1.3vw' }}>
        Study Jams are community-run groups for Developers. Whether you are a beginner or an experienced developer, you get to learn new things.
        </Text>
    </Box> 
    <Box background="rgba(0, 0, 0, 0.3)" 
  border={'1px'}  borderColor="#0F9D58" borderRadius="20px"
  height={{base:"25vw",md:"15vw"}} w={{base:"50vw",md:"30vw"}} 
  >
    <Text color="#0F9D58" fontFamily={'Gilroy-Medium'}
     align='center' pt={{base:'2', md:'4'}} pl='5' pr='5'      
    fontSize={{ base: '3vw', md: '1.8vw' }}>
        Meetups
        </Text>
        <Text color="#0F9D58" fontFamily={'Gilroy-Medium'}
     align='center'   pt={{base:'1', md:'4'}} pl='0.5' pr='0.5' pb='5'
    fontSize={{ base: '2vw', md: '1.3vw' }}>
       Regular meetings are organised for the students who share the same technical interests, so they can get connected with each other.
        </Text>
    </Box> 

  
</SimpleGrid>

</Box>



<Divider
          size={'10px'}
          variant="solid"
          borderBottomWidth={'3px'}
          borderColor={'#ffffff'}
          width={'65%'}
          ml="auto"
          mr={'auto'}
          mb={25}
        
        ></Divider>

        <HStack spacing={{md:'20',base:'10'}}>
        <Box
                      m={'10px'}
                      _hover={{ color: '#C13584' }}
                     
                      width={{ base: '20px', md: '35px' }}
                      color="#8a8a8a"
                      height={{ base: '20px', md: '35px' }}
                    >
                      <a href="https://www.instagram.com/gdscj128/">
                        <FaInstagram className='gfg-div1' />
                      </a>
                    </Box>

                    <Box
                      m={'10px'}
                      _hover={{ color: '#FF0000' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                      color="#8a8a8a"
                    >
                      <a href="https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg">
                        <FaYoutube className='gfg-div1' />
                      </a>
                    </Box>

                    <Box
                      m={'10px'}
                      _hover={{ color: '#5865F2' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                      color="#8a8a8a"
                    >
                      <a href="https://discord.com/invite/HqatsVyq5H">
                        <FaDiscord className='gfg-div1' />
                      </a>
                    </Box>


                    <Box
                      m={'10px'}
                      _hover={{ color: '#00acee' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                      color="#8a8a8a"
                    >
                      <a href="https://twitter.com/Dsc128">
                        <FaTwitter className='gfg-div1'/>
                      </a>
                    </Box>
                    <Box
                      m={'10px'}
                      _hover={{ color: 'black' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                      color="#8a8a8a"
                    >
                      <a href="https://github.com/dsc-jiit-128">
                        <FaGithub className='gfg-div1' />
                      </a>
                    </Box>





                    <Box
                      m={'10px'}
                      _hover={{ color: 'blue.500' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                      color="#8a8a8a"
                    >
                      <a href="https://www.facebook.com/gdscjiit/">
                        <FaFacebook  className='gfg-div1' />
                      </a>
                    </Box>


                    </HStack>

                    
<Divider
          size={'10px'}
          variant="solid"
          borderBottomWidth={'3px'}
          borderColor={'#ffffff'}
          width={'35%'}
          ml="auto"
          mr={'auto'}
          mb={25}
          mt={30}
        
        ></Divider>



        <Box textAlign={'center'} alignItems="center" color={'white'}>
          <Text mb={'0.61%'} fontSize={{ base: 12, md: 20 }} mt={3} mr="3%" fontFamily={'Gilroy-Medium'}>
            Made with 🤍 by
          </Text>
          <Flex alignItems={'center'} justifyContent="center">
            <Image
              src="/white logo.webp"
              width={{ base: '5%', md: '3%' }}
              mr={'1%'}
            />
            <Text fontSize={{ base: 12, md: 22 }} fontFamily={'Gilroy-Medium'}>
            Google Developer Groups
            </Text>
          </Flex>
          <Text mb={'2%'} fontSize={{ base: 10, md: 18 }} fontFamily={'Gilroy-Medium'}>
            Jaypee Institute of Information Technology - Sec 128
          </Text>
        </Box>
      </Box>
    </>
  );
}
