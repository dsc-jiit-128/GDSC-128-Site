import React from 'react';
import { Box, Flex, Button, Stack, Image, Text, Link } from '@chakra-ui/react';
import { StyleConfig } from '@chakra-ui/react';
import NavigationBar from './navBar'
import ResponsiveNavbar from './responsiveNavbar'

export default function Nav() {
  return (
    <>
      <Box px={4} pb={1} pt={0} mt={0} zIndex={1}>
        <Flex p={'1%'} justifyContent={'space-between'}>
          <Flex fontSize={40} color="white">
            <Stack direction={'row'} spacing={{ base: '15px', md: '35px' }}>
              <Image borderRadius="full" boxSize="7vw" src="/image 2.png" />
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text
                  // pt={'1.5vw'}
                  fontSize="2vw"
                  fontWeight={'semibold'}
                  color="white"
                  pl={0}
                  pt = {'2.2vw'}
                  style={{ textDecoration: 'none' }}
                  fontFamily={'Gilroy-Bold'}
                  _hover={{   bgGradient:"linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)", bgClip:"text"}}
                >
                  GDSC JIIT 128
                </Text>
              </Link>
            </Stack>
          </Flex>

          <Flex alignItems={'center'} justifyContent="space-between">
            <Stack
              direction={'row'}
              spacing={{ base: 3, md: 7 }}
              justifyContent="space-between"
            >
              <NavigationBar />
              <ResponsiveNavbar />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
