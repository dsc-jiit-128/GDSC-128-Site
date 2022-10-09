import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import {
  GridItem,
  Grid,
  Image,
  Text,
  Flex,
  Link,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react';
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
        >
          <Box p={'20px'} m={'10px'} mr={'100px'}>
            <Flex display={'inline'}>
              <Image
                src="/image 2.png"
                width={'40px'}
                height={'40px'}
                display="inline"
              />
              <Box display="inline" ml={'10px'} fontSize="2vw">
                GDSC
              </Box>
            </Flex>

            <Flex
              bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
              // align="center"
              mb={10}
              // p={'1% 5%'}
              borderRadius={'2.5vw'}
              // display={'flex'}
              alignContent={'center'}
              justifyContent={'center'}
              opacity={'80%'}
              mt={'10%'}
              // boxSize={'auto'}
            >
              <Text
                fontSize={{ base: '14px', md: '1.6vw' }}
                mr="20px"
                display="inline"
                color={'white'}
              >
                Contact Us
              </Text>
              <Box display="inline" float={'inline'}>
                <BsEnvelope size={'31px'} ml={'10px'} display="inline" />
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
                <Box m={'10px'}>
                  <a href="https://www.facebook.com/gdscjiit/">
                    <FaFacebook
                      size={{ base: '3vw', md: '100px' }}
                      color="#4267B2"
                    />
                  </a>
                </Box>
                <Box m={'10px'}>
                  <a href="https://discord.com/invite/HqatsVyq5H">
                    <FaDiscord size={{ base: '20px', md: '50px' }} />
                  </a>
                </Box>
                <Box m={'10px'}>
                  <a href="https://twitter.com/Dsc128">
                    <FaTwitter size={{ base: '20px', md: '50px' }} />
                  </a>
                </Box>
                <Box m={'10px'}>
                  <a href="https://github.com/dsc-jiit-128">
                    <FaGithub size={{ base: '20px', md: '50px' }} />
                  </a>
                </Box>
                <Box m={'10px'}>
                  <a href="https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg">
                    <FaYoutube size={{ base: '20px', md: '50px' }} />
                  </a>
                </Box>
                <Box m={'10px'}>
                  <a href="https://www.instagram.com/gdscj128/">
                    <FaInstagram size={{ base: '20px', md: '50px' }} />
                  </a>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>

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

          <GridItem w="100%" colSpan={1} ml={10} mr={10} color="white">
            <Text mt={5} fontSize={{base:'3.5vw', md: '2vw'}} width={'60%'} align={'center'}>
              UPCOMING EVENTS
            </Text>
          </GridItem>
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
