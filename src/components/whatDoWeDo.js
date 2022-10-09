import {
  Box,
  Grid,
  SimpleGrid,
  GridItem,
  Text,
  Button,
  Image,
  Divider,
} from '@chakra-ui/react';
import React from 'react';

export default function WhatDoWeDo() {
  return (
    <>
      <Box>
        <Box textAlign={'center'} pt={10}>
          <Text
            as={'b'}
            fontSize={{ base: '20px', md: '40px' }}
            mt={100}
            color="white"
          >
            What do we do?
          </Text>
        </Box>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={0}>
          <Box alignItems={'center'}>
            <Box
              textAlign={'center'}
              width={{ base: '85%', md: '100%' }}
              ml={{ base: '4%', md: '22%' }}
            >
              <Text
                ml={10}
                mr={10}
                mt={10}
                textAlign="left"
                color="white"
                fontSize={{ base: 14, md: '27px' }}
                width={'65%'}
              >
                With our team's moto being "Giving Direction to Greatness", we
                help the students to climb mountains on their own, as high as
                possible. We conduct two flagship events, namely, Hackovation
                and ExploreML and various technical workshops, sessions, meetups
                and fun events as well.
              </Text>
              <Box textAlign={'center'} width={'100%'} alignItems="center">
                <Button
                  size="lg"
                  mt={10}
                  bg="linear-gradient(93.17deg, #3586FF 0%, #2F92ED 97.37%) "
                  width={{ base: '200px', md: '504px' }}
                  height={{ base: '50px', md: '117px' }}
                  borderRadius={'25px'}
                  ml={{base: '0', md:'-45%'}}
                >
                  <Text
                    align={'left'}
                    color="white"
                    fontSize={{ base: '14px', md: '31px' }}
                  >
                    Register as a student
                  </Text>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box textAlign={'center'}>Vishesh</Box>
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
      </Box>
    </>
  );
}
