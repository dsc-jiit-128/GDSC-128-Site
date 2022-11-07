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
import { useMediaQuery } from '@chakra-ui/react';

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
        justifyContent="center"
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={0}
          width={'85%'}
          textAlign="center"
          // alignItems={'center'}
          alignContent={'center'}
          justifyContent="center"
        >
          <Box display={'box'} alignSelf="center">
            <Box
              p={'10px'}
              m={{ base: '50px', md: '10px' }}
              mt={{ base: '10px' }}
            >
              <Box ml={'auto'} mr="auto">
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
                  height={{ base: '5vw', md: '3vw' }}
                  width={{ base: '35vw', md: '20vw' }}
                  // ml={'auto'}
                  // mr="auto"
                  ml={{ base: '10vw', md: '2vw' }}

                  // boxSize={'auto'}
                >
                  <Text
                    fontSize={{ base: '12px', md: '1.6vw' }}
                    mr="10px"
                    mt={{ base: 0, md: 1 }}
                    display="inline"
                    color={'white'}
                    alignSelf="center"
                    fontFamily={'Gilroy-SemiBold'}
                  ><Link href="mailto:dscjiit128@gmail.com">
                    CONTACT US </Link>
                  </Text>
                  <Box><Link href="mailto:dscjiit128@gmail.com">
                    <BsEnvelope
                      size={{ base: '25px', md: '1vw' }}
                      // display="inline"
                    /></Link>
                  </Box>
                </Flex>

                <Box
                  bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
                  borderRadius={'10px'}
                  display="box"
                  p={'6%'}
                  pr={'4%'}
                  pl={'6%'}
                  pb={'9%'}
                  opacity={'80%'}
                  justify="space-evenly"
                  width={{ base: '40vw', md: '20vw' }}
                  alignSelf="center"
                  ml={{ base: '8vw', md: '2vw' }}
                  // border={'4px green solid'}
                >
                  <SimpleGrid
                    columns={{ base: 3, md: 3 }}
                    gap={{ base: '10px', md: '2vw' }}
                    width={'95%'}
                    // justifyContent="space-evenly"
                  >
                    <Box
                      m={'10px'}
                      _hover={{ color: 'blue.500' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                    >
                      <a href="https://www.facebook.com/gdscjiit/">
                        <FaFacebook size={'25px'} />
                      </a>
                    </Box>
                    <Box
                      m={'10px'}
                      _hover={{ color: '#5865F2' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                    >
                      <a href="https://discord.com/invite/HqatsVyq5H">
                        <FaDiscord size={'25px'} />
                      </a>
                    </Box>
                    <Box
                      m={'10px'}
                      _hover={{ color: '#00acee' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                    >
                      <a href="https://twitter.com/Dsc128">
                        <FaTwitter size={'25px'} />
                      </a>
                    </Box>
                    <Box
                      m={'10px'}
                      _hover={{ color: 'black' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                    >
                      <a href="https://github.com/dsc-jiit-128">
                        <FaGithub size={'25px'} />
                      </a>
                    </Box>
                    <Box
                      m={'10px'}
                      _hover={{ color: '#FF0000' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                    >
                      <a href="https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg">
                        <FaYoutube size={'25px'} />
                      </a>
                    </Box>
                    <Box
                      m={'10px'}
                      _hover={{ color: '#C13584' }}
                      width={{ base: '20px', md: '35px' }}
                      height={{ base: '20px', md: '35px' }}
                    >
                      <a href="https://www.instagram.com/gdscj128/">
                        <FaInstagram size={'25px'} />
                      </a>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* </Flex> */}

          <Box>
            <Text
              fontSize={{ base: '7vw', md: '2vw' }}
              mt={{ base: -5, md: 5 }}
              fontFamily={'Gilroy-SemiBold'}
            >
              Quick Links
            </Text>
            <Link
              display={'block'}
              mt={5}
              fontSize={{ base: '4vw', md: '1.6vw' }}
              href="/events"
              fontFamily={'Gilroy-Medium'}
            >
              EVENTS
            </Link>

            <Link
              href="/teams"
              display={'block'}
              mt={2}

              fontSize={{ base: '4vw', md: '1.6vw' }}
              fontFamily={'Gilroy-Medium'}
            >
              TEAM
            </Link>
            <Link href="/login"            mt={2}
 display={'block'} fontSize={{ base: '4vw', md: '1.6vw' }} fontFamily={'Gilroy-Medium'}>
 

              LOGIN
            </Link>

            < Link             mt={2}
 display={'block'} fontSize={{ base: '4vw', md: '1.6vw' }} fontFamily={'Gilroy-Medium'}>

              OUR LOCATION
            </Link>
          </Box>

          <Box w="100%" colSpan={1} color="white">
            <Text
              mt={5}
              fontSize={{ base: '7vw', md: '2vw' }}
              width={'100%'}
              align="center"
              fontFamily={'Gilroy-Medium'}
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
          <Text mb={'0.61%'} fontSize={{ base: 12, md: 20 }} mt={3} mr="3%" fontFamily={'Gilroy-Medium'}>
            Made with 🤍 by
          </Text>
          <Flex alignItems={'center'} justifyContent="center">
            <Image
              src="/white logo.png"
              width={{ base: '5%', md: '3%' }}
              mr={'1%'}
            />
            <Text fontSize={{ base: 12, md: 22 }} fontFamily={'Gilroy-Medium'}>
              Google Developer Student Clubs
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
