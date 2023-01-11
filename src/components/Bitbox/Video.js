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
        <Text fontSize={'64px'} textAlign='center' textColor={'white'} >
          {' '}
          Watch the teaser{' '}
        </Text>
        <AspectRatio maxW='1097px' maxH='750px' ratio={1} margin='auto' marginTop={'100px'}>
          <iframe
          title='naruto'
          src='https://www.youtube.com/watch?v=XJ7E5l2YfB0'
          allowFullScreen
          />
        </AspectRatio>
      </Box>
      <Box>



      </Box>

      </>
    );
  }
  