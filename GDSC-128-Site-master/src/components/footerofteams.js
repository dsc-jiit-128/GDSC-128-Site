import React from 'react';
import { Box, Heading, VStack, HStack } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link } from '@chakra-ui/react';

export default function Teamnav() {
  return (
    <>
      <Flex align={'center'} justify="center">
        <VStack>
          <Box>
            <Box textAlign={'center'} alignItems="center" color={'white'}>
              <Text mb={'0.61%'} fontSize={30} mt={5}>
                Core Team
              </Text>

              <Image src="/Line 3.webp" ml={'auto'} mr={'auto'} align="center" />
            </Box>
          </Box>

          <Box
            mt={4}
            alignContent="center"
            position={'relative'}
            pl={75}
            ml={50}
          >
            <HStack spacing={19} align={'center'} position="relative">
              <Image
                src="/14.webp"
                position="relative"
                ml={200}
                mb={3}
                width={'8%'}
                size={'auto'}
                mt={1}
                _hover={{
                  filter: 'brightness(0.5)',
                }}
              />
              <Image
                src="/15.webp"
                position="relative"
                ml={200}
                mb={3}
                width={'8%'}
                size={'auto'}
                mt={1}
                _hover={{
                  filter: 'brightness(0.5)',
                }}
              />
              <Image
                src="/13.webp"
                position="relative"
                ml={200}
                mb={3}
                width={'12%'}
                size={'auto'}
                mt={1}
                _hover={{
                  filter: 'brightness(0.5)',
                }}
              />
              <Image
                src="/16.webp"
                position="relative"
                ml={200}
                mb={3}
                width={'8%'}
                size={'auto'}
                mt={1}
                _hover={{
                  filter: 'brightness(0.5)',
                }}
              />
              <Image
                src="/17.webp"
                position="relative"
                ml={200}
                mb={3}
                width={'8%'}
                size={'auto'}
                mt={1}
                _hover={{
                  filter: 'brightness(0.5)',
                }}
              />
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
