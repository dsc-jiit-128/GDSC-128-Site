import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link } from '@chakra-ui/react';

export default function Links() {
  return (
    <>
      <Box
        // alignItems={'center'}
        // justifyContent={'space-between'}
        // border={'4px green solid'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={0}
          width={'85%'}
          // border={'4px green solid'}
        >
          <GridItem w="20vw" colSpan={1} ml={10}>
            <Box display={'inline'} textAlign={'center'}>
              <Image
                src="/image 2.png"
                width={'5vw'}
                height={'5vw'}
                display="inline"
                mr={'1vw'}
                mb={'1vw'}
                border={'4px green solid'}
                p={'1vw'}
              />
              <Text
                display={'inline'}
                fontSize={'2.6vw'}
                p={'2vw'}
                border={'4px green solid'}
              >
                GDSC
              </Text>
            </Box>

            <Box
              bgColor="gray"
              align="center"
              mb={10}
              p={'1% 5%'}
              borderRadius={'2.5vw'}
              display={'flex'}
              alignContent={'center'}
              justifyContent={'center'}
              opacity={'80%'}
              mt={'10%'}
              boxSize={'auto'}
            >
              <Text fontSize={'2vw'}>Contact Us</Text>
              <Image
                ml={'6%'}
                src="/Vector.png"
                width={'2.7vw'}
                height={'2.7vw'}
              />
            </Box>

            <Flex
              bgColor={'gray'}
              borderRadius={'10px'}
              display="block"
              p={'6%'}
              pr={'0%'}
              pl={'9%'}
              pb={'9%'}
              opacity={'80%'}
            >
              <Grid
                templateColumns="repeat(3, 1fr)"
                rowGap={'1vw'}
                columnGap={'1vw'}
              >
                <GridItem>
                  <Image src="/Hover 10.png" pr={'1vw'} />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 8.png" pr={'1vw'} />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 7.png" pr={'1vw'} />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 6.png" pr={'1vw'} />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 9.png" pr={'1vw'} />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 5.png" pr={'1vw'} />
                </GridItem>
              </Grid>
            </Flex>
          </GridItem>

          <GridItem w="100%" colSpan={1} ml={10}>
            <Text mt={5} fontSize={'2.5vw'}>
              Quick Links
            </Text>
            <Link display={'block'} mt={10} fontSize={'1.5vw'}>
              EVENTS
            </Link>
            <Link display={'block'} fontSize={'1.5vw'}>
              TEAM
            </Link>
            <Link display={'block'} fontSize={'1.5vw'}>
              LOGIN
            </Link>

            <Link display={'block'} fontSize={'1.5vw'}>
              OUR LOCATION
            </Link>
          </GridItem>

          <GridItem w="100%" colSpan={1} ml={10} mr={10}>
            <Text mt={5} fontSize={'2.5vw'} width={'60%'} align={'center'}>
              UPCOMING EVENTS
            </Text>
          </GridItem>
        </Grid>
        <Image
          src="/Line 3.png"
          ml={'auto'}
          mr={'auto'}
          align="center"
          mt={'4%'}
        />

        <Image src="/Image 19.png" ml={'auto'} mr={'auto'} align="center" />
      </Box>
    </>
  );
}
