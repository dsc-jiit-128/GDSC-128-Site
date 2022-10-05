import React from 'react';
import { Box, Image, Text, Grid, GridItem, Button,fontFamily} from '@chakra-ui/react';
export default function BuildTogether() {
  return (
    <>
      <Box  bgImage="url('/image 3.png')" bgPosition="center" >
        <Grid templateColumns="repeat(2, 1fr)" gap={0}>
          <GridItem w="100%">
            <Box textAlign={'center'}>
              <Box>
                <Image
                  src="/image 2.png"
                  position="relative"
                  top="0"
                  left="0"
                  ml={'auto'}
                  mr={'auto'}
                  width={'48%'}
                  size={'auto'}
                  mt={12}
                  
                />
                <Image
                  // border= "2px solid green"
                  src="/image4-Ref.png"
                  position="absolute"
                  width="528px"
                  height="518px"
                  left="80px"
                  top="257px"
                  blur="100px"
                  border-bottom-right-radius="10%"
                  z-Index="2"
                  transform="translateX(90px)"
                />
                <Image
                  //   border= "2px solid green"
                  src="/image 5 gdsc.png"
                  position="absolute"
                  width="528px"
                  height="518px"
                  left="177px"
                  top="290px"
                  blur="100px"
                />
              </Box>

              <Button size={'lg'} p={9} borderRadius={15} 
  // bgGradient="linear(to-r, #838181 , #FFFFFF )"
  bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)" 
 // bgOpacity="25%"

              ><Text color='white'>
                Register for BITBOX 2.0</Text>
              </Button> 
            </Box>
          </GridItem>

          <GridItem w="100%">
            <Box>
              <Text as={'b'} fontSize="5xl" noOfLines={1} mb={-50} color='white'>
                let's
              </Text>
              <Text
                bgGradient="linear(to-r, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)"
                w="100%"
                bgClip="text"
                fontSize="9xl"
                fontWeight="extrabold"
                align={'center'}
                display={'inline'}
              >
                Build
              </Text>
              <Text as={'b'} fontSize="5xl" noOfLines={1} mt={-10} color='white'>
                together
              </Text>
            </Box>
            <Text mt={10} pb={10} pr={10} color="white" fontFamily={'Gilroy-bold'}>
              GDSC(Google Developers Student Club) - JIIT128 is a Google
              Developers program aimed for college students to help them build
              their mobile, web, machine learning, cloud skills, etc. We are
              basically a community with connections all over the world. Open to
              any student, ranging from novice developers who are just starting,
              to advanced developers who want to further enhance their skills,
              we provide a platform for students to learn and collaborate in
              solving problems around them with the help of technology.
            </Text>
            
          </GridItem>
          
        </Grid>
        <Image src="/Line 1.png" ml={'auto'} mr={'auto'} width={'50%'} mt={10}/>
      </Box>
    </>
  );
}
