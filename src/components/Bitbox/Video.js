import {
    GridItem,
    SimpleGrid,
    Grid,
    Image,
    Text,
    Flex,
    Link,
    Box,
    HStack
    
  } from '@chakra-ui/react';
import React from 'react'
import { AspectRatio } from '@chakra-ui/react'
export default function Video() {
    return (
      <>
       <Box margin='auto' marginTop={'100px'}>
        <Text fontSize={'6xl'} textAlign='center' color={'white'} >
          {' '}
          Watch the teaser{' '}
        </Text>
        <Box mt='8vw'>
        <Box className = 'outer2 redd'>
          <Box className = 'inner2'>
          </Box>
        </Box>
        <AspectRatio maxW='70%' maxH='50%' margin='auto' >
          <iframe
          title='naruto'
          src='https://www.youtube.com/watch?v=XJ7E5l2YfB0'
          allowFullScreen
          />
        </AspectRatio>
        <Box className = 'outer yelloww' >
          <Box className = 'inner' >
          </Box>
        </Box>
        </Box>
      </Box>
      <Box>



      </Box>

      </>
    );
  }
  