import React from 'react';
import { Box, Center, Heading, HStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link } from '@chakra-ui/react';
export default function Bottomteam() {
    return (
      <>
        <Box mt={4} ml={20} mr={20} alignContent="center">
          <HStack spacing={19}>
            <Image
              src="/14.webp"
              position="relative"
              ml={200}
              mb={3}
              width={'8%'}
              size={'auto'}
              mt={1}
            />
            <Image
              src="/15.webp"
              position="relative"
              ml={200}
              mb={3}
              width={'8%'}
              size={'auto'}
              mt={1}
            />
            <Image
              src="/13.webp"
              position="relative"
              ml={200}
              mb={3}
              width={'12%'}
              size={'auto'}
              mt={1}
            />
            <Image
              src="/16.webp"
              position="relative"
              ml={200}
              mb={3}
              width={'8%'}
              size={'auto'}
              mt={1}
            />
            <Image
              src="/17.webp"
              position="relative"
              ml={200}
              mb={3}
              width={'8%'}
              size={'auto'}
              mt={1}
            />
          </HStack>
        </Box>
      </>
    );
    }