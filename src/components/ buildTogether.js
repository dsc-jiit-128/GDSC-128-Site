import React from 'react';
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Button,
  fontFamily,
  Divider,
  Link
  
} from '@chakra-ui/react';
import Fonts from '../fonts';
export default function BuildTogether() {
  return (
    <>
  <Fonts></Fonts>  
  
      <Box
        bgImage="url('/image 3.webp')"
        bgPosition="center"
        backgroundSize={'cover'}
        width={'100%'}
        height={'100%'}
        backgroundRepeat={'no-repeat'}
        position={'relative'}
        // display={{ md: 'flex' }}
      >
   
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={0}>
          <Box>
            <Box textAlign={'center'}>
            <Box
              position={'relative'}
              overflow={'visible'}
              >
              <Image
                  src="/blur1.webp"
                  position="absolute"
                  top={{ base: '15%', md: '3%' }}
                  left="50%"
                  transform="translate(-50%, -30%)"
                  ml={'auto'}
                  mr={'auto'}
                  width={'75%'}
                  objectFit={'contain'}
                  size={'auto'}
                  mt={{ base: '1%', md: 12 }}
                  flexShrink={0}
                />
                <Image
                  src="/blur2.webp"
                  position="absolute"
                  top={{ base: '15%', md: '3%' }}
                  left="50%"
                  transform="translate(-50%, -30%)"
                  ml={'auto'}
                  mr={'auto'}
                  width={'75%'}
                  objectFit={'contain'}
                  size={'auto'}
                  mt={{ base: '1%', md: 12 }}
                  flexShrink={0}
                />
                <Image
                  src="/image 2.webp"
                  position="relative"
                  top="0"
                  left="0"
                  ml={'auto'}
                  mr={'auto'}
                  width={'48%'}
                  size={'auto'}
                  mt={{ base: '1%', md: 12 }}
                  flexShrink={0}
                />
                {/* <Image
                  // border= "2px solid green"
                  src="/image4-Ref.webp"
                  position="absolute"
                  width="528px"
                  height="518px"
                  left="80px"
                  top="257px"
                  blur="100px"
                  border-bottom-right-radius="10%"
                  z-Index="2"
                  transform="translateX(90px)"
                  flexShrink={0}
                /> */}
                {/* <Image
                  //   border= "2px solid green"
                  src="/image 5 gdsc.webp"
                  position="absolute"
                  width="528px"
                  height="518px"
                  left="177px"
                  top="290px"
                  blur="100px"
                  flexShrink={0}
                /> */}
              </Box>

              <Button
                // p={9}
                borderRadius={15}
                // bgGradient="linear(to-r, #838181 , #FFFFFF )"
                bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
                // bgOpacity="25%"
                mb={{ base: '5%', md: '1%' }}
                width={{ base: '200px', md: '24.2vw' }}
                height={{ base: '50px', md: '5.85vw' }}
              >
                <Text color="white" fontFamily={'Gilroy-Bold'} fontSize={{ base: '14px', md: '1.7vw' }} >
                  <Link href="/bitbox">
                  BITBOX 4.0
                  </Link>
                </Text>
              </Button>
            </Box>
          </Box>
          <Box
            // mt={{ base: 4, md: 0 }}
            // ml={{ md: 6 }}
            textAlign={{ sm: 'center', md: 'left' }}
          >
            {/* <Box > */}
            <Text
              as={'b'}
              fontSize={{ base: '7vw', md: '3.45vw' }}
              noOfLines={1}
              mb={{ base: '-3.5vw', md: '-3.5vw' }}
              color="white"
              pl={{ base: '6%' }}
              pr={{ base: '6%' }}
            >
              let's
            </Text>
            <Text
              bgGradient="linear(to-r, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)"
              w="100%"
              bgClip="text"
              fontSize={{ base: '20vw', md: '12.4vw' }}
              fontWeight="extrabold"
              align={'center'}
              display={'inline'}
              pl={{ base: '6%' }}
              pr={{ base: '6%' }}
              mt="5%"
            >
            Build
            </Text>
            <Text
              as={'b'}
              fontSize={{ base: '7vw', md: '3.45vw' }}
              noOfLines={1}
              mt={{ base: '-3.5vw', md: '-3.5vw' }}
              color="white"
              pr={{ base: '6%' }}
              pl={{ base: '6%' }}
              mb={0}
            >
              together
            </Text>
            {/* </Box> */}
            <Text
              mt={{ base: '15px', md: '30px' }}
              // pb={10}
              // pr={10}
              color="white"
              fontFamily={'Gilroy-Medium'}
              pl={{ base: '6%' }}
              pr={{ base: '6%' }}
              // width={{ base: '85%', md: '65%' }}
              fontSize={{ base: '3vw', md: '1.35vw' }}
            >
              GDSC(Google Developer Student Clubs) - JIIT128 is a Google
              Developers program aimed for college students to help them build
              their mobile, web, machine learning, cloud skills, etc. We are
              basically a community with connections all over the world. Open to
              any student, ranging from novice developers who are just starting,
              to advanced developers who want to further enhance their skills,
              we provide a platform for students to learn and collaborate in
              solving problems around them with the help of technology.
            </Text>
          </Box>
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
