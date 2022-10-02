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
          <GridItem w="68%" colSpan={1} ml={10}>
            <Box display={'inline'}>
              <Image
                src="/image 2.png"
                width={'71px'}
                height={'71px'}
                display="inline"
                mr={2}
                mb={-6}
              />
              <Text display={'inline'} fontSize={'36px'}>
                {' '}
                GDSC{' '}
              </Text>
            </Box>

            <Box
              size={'lg'}
              bgColor="gray"
              align="center"
              mb={10}
              p={'1% 5%'}
              borderRadius={'40px'}
              display={'flex'}
              alignContent={'center'}
              justifyContent={'center'}
              opacity={'80%'}
            >
              <Text fontSize={'169%'}>Contact Us</Text>
              <Image ml={'6%'} src="/Vector.png" />
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
              <Grid templateColumns="repeat(3, 1fr)" rowGap={'10%'}>
                <GridItem>
                  <Image src="/Hover 10.png" />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 8.png" />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 7.png" />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 6.png" />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 9.png" />
                </GridItem>
                <GridItem>
                  <Image src="/Hover 5.png" />
                </GridItem>
              </Grid>
            </Flex>
          </GridItem>

          <GridItem w="100%" colSpan={1} ml={10}>
            <Heading mt={5}>Quick Links</Heading>
            <Link display={'block'} mt={10}>
              EVENTS
            </Link>
            <Link display={'block'}>TEAM</Link>
            <Link display={'block'}>LOGIN</Link>

            <Link display={'block'}>OUR LOCATION</Link>
          </GridItem>

          <GridItem w="100%" colSpan={1} ml={10} mr={10}>
            <Heading mt={5}>UPCOMING EVENTS</Heading>
          </GridItem>
        </Grid>
        <Image src="/Line 3.png" ml={'auto'} mr={'auto'} align="center" />

        <Image src="/Image 19.png" ml={'auto'} mr={'auto'} align="center" />
      </Box>
    </>
  );
}
