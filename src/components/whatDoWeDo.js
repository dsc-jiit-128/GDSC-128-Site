import { Box, Grid, GridItem, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';

export default function WhatDoWeDo() {
  return (
    <>
      <Box>
        <Box textAlign={'center'} pt={10}>
          <Text as={'b'} fontSize="2.5vw" mt={100}>
            What do we do?
          </Text>
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={0}>
          <GridItem w="100%" colSpan={1}>
            <Box textAlign={'center'} width={'65%'} ml={'25%'}>
              <Text ml={10} mr={10} mt={10} textAlign="left">
                With our team's moto being "Giving Direction to Greatness", we
                help the students to climb mountains on their own, as high as
                possible. We conduct two flagship events, namely, Hackovation
                and ExploreML and various technical workshops, sessions, meetups
                and fun events as well.
              </Text>

              <Button bgColor={'#3586FF'} size="lg" mt={10}>
                Register as a student
              </Button>
            </Box>
          </GridItem>
        </Grid>
        <Image
          src="/Line 1.png"
          ml={'auto'}
          mr={'auto'}
          width={'50%'}
          mt={10}
        />
      </Box>
    </>
  );
}
