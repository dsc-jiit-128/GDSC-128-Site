import React from 'react';
import { Box } from '@chakra-ui/react';
import { Image, Text, Flex, Link, Divider, SimpleGrid } from '@chakra-ui/react';
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

import { BsEnvelope } from 'react-icons/bs';

import { Route } from 'react-router-dom';
import Teampage from '../Pages/Teams';

export default function Links() {
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
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={0}
          width={'85%'}
          textAlign="center"
          // alignItems={'center'}
        >
          <Flex>
            <Box p={'20px'} m={'10px'}>
              <Flex
                lineHeight={'40px'}
                alignContent={'center'}
                justifyContent="center"
              >
                <Image
                  src="/image 2.png"
                  width={'40px'}
                  height={'40px'}
                  display="inline"
                  // ml={'5vw'}
                  // mr={'auto'}
                  // p={2}
                  // border={'4px green solid'}
                />
                <Box
                  // display="inline"
                  fontSize={{ base: '3vw', md: '2vw' }}
                  // ml="10px"
                  textAlign={'center'}
                  alignItems="center"
                  alignContent={'center'}
                  ml={{ base: '3vw', md: '1vw' }}
                >
                  GDSC
                </Box>
              </Flex>

              <Flex
                bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
                // align="center"
                mb={'2vw'}
                // p={'1% 5%'}
                borderRadius={'2.5vw'}
                // display={'flex'}
                alignContent={'center'}
                justifyContent={'center'}
                opacity={'80%'}
                mt={'10%'}
                height={{ base: '4vw', md: '2.8vw' }}
                width={{ base: '22vw', md: '15.7vw' }}
                ml={'auto'}
                mr="auto"

                // boxSize={'auto'}
              >
                <Text
                  fontSize={{ base: '2vw', md: '1.6vw' }}
                  mr="20px"
                  display="inline"
                  color={'white'}
                >
                  CONTACT US
                </Text>
                <Box display="inline" pt="0.3vw">
                  <BsEnvelope size={'2vw'} display="inline" />
                </Box>
              </Flex>

              <Box
                bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
                borderRadius={'10px'}
                display="block"
                p={'6%'}
                pr={'0%'}
                pl={'9%'}
                pb={'9%'}
                opacity={'80%'}
                justify="space-evenly"
              >
                <SimpleGrid
                  columns={{ base: 3, md: 3 }}
                  gap={{ base: '10px', md: '2vw' }}
                  width={'85%'}
                  // justifyContent="space-evenly"
                >
                  <Box m={'10px'} _hover={{  color: 'blue.500' }}>
                    <a href="https://www.facebook.com/gdscjiit/">
                      <FaFacebook
                        size={{ base: '3vw', md: '100px' }}
                        
                      />
                    </a>
                  </Box>
                  <Box m={'10px'} _hover={{  color: '#5865F2' }}>
                    <a href="https://discord.com/invite/HqatsVyq5H">
                      <FaDiscord size={{ base: '20px', md: '50px' }} />
                    </a>
                  </Box>
                  <Box m={'10px'} _hover={{color: '#00acee'}}>
                    <a href="https://twitter.com/Dsc128">
                      <FaTwitter size={{ base: '20px', md: '50px' }} />
                    </a>
                  </Box>
                  <Box m={'10px'} _hover={{color: 'black'}}>
                    <a href="https://github.com/dsc-jiit-128">
                      <FaGithub size={{ base: '20px', md: '50px' }} />
                    </a>
                  </Box>
                  <Box m={'10px'} _hover={{color: '#FF0000'}}>
                    <a href="https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg">
                      <FaYoutube size={{ base: '20px', md: '50px' }} />
                    </a>
                  </Box>
                  <Box m={'10px'} _hover={{color: '#C13584'}}>
                    <a href="https://www.instagram.com/gdscj128/">
                      <FaInstagram size={{ base: '20px', md: '50px' }} />
                    </a>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          </Flex>

          <Box>
            <Text mt={5} fontSize={{ base: '20px', md: '2vw' }}>
              Quick Links
            </Text>
            <Link
              display={'block'}
              mt={10}
              fontSize={{ base: '18px', md: '1.6vw' }}
            >
              EVENTS
            </Link>

            <Link
              to="/teams"
              display={'block'}
              fontSize={{ base: '18px', md: '1.6vw' }}
            >
              TEAM
            </Link>
            <Link display={'block'} fontSize={{ base: '18px', md: '1.6vw' }}>
              LOGIN
            </Link>

            <Link display={'block'} fontSize={{ base: '18px', md: '1.6vw' }}>
              OUR LOCATION
            </Link>
          </Box>

          <Box w="100%" colSpan={1} color="white">
            <Text
              mt={5}
              fontSize={{ base: '3.5vw', md: '2vw' }}
              width={'100%'}
              align="center"
            >
              UPCOMING EVENTS
            </Text>
          </Box>
        </SimpleGrid>
        <Divider
          size={'10px'}
          variant="solid"
          borderBottomWidth={'3px'}
          borderColor={'#ffffff'}
          width={'50%'}
          ml="auto"
          mr={'auto'}
          mt={'10'}
        ></Divider>

        <Box textAlign={'center'} alignItems="center" color={'white'}>
          <Text mb={'0.61%'} fontSize={{ base: 12, md: 20 }} mt={3} mr="3%">
            Made with 🤍 by
          </Text>
          <Flex alignItems={'center'} justifyContent="center">
            <Image
              src="/white logo.png"
              width={{ base: '5%', md: '3%' }}
              mr={'1%'}
            />
            <Text fontSize={{ base: 12, md: 22 }}>
              Google Developer Student Clubs
            </Text>
          </Flex>
          <Text mb={'2%'} fontSize={{ base: 10, md: 18 }}>
            Jaypee Institute of Information Technology - Sec 128
          </Text>
        </Box>
      </Box>
    </>
  );
}
