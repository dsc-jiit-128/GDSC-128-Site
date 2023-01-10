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
    grid
    
  } from '@chakra-ui/react';
import React from 'react'
export default function Sponsors() {
    return (
      <>
       <Box>
        <Text     fontSize={{ base: '15px', md: '2.5vw' }}
                    opacity={[0, 1]}
                    ml={5}
                    fontWeight={'semibold'}
                    color="white"
                    pl={0}
                    pt={'2.2vw'}
                    style={{ textDecoration: 'none' }}
                    fontFamily={'Gilroy-SemiBold'}
                    align='center'>
          Sponsors
        </Text>

      </Box>
         


      </>
    );
  }
  