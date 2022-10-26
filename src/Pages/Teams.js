import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { Stack, VStack } from '@chakra-ui/react';
import {
  GridItem,
  SimpleGrid,
  Grid,
  Image,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import Nav from '../components/navbar';
import Head from '../components/heading';
import BuildTogether from '../components/ buildTogether';
import WhatDoWeDo from '../components/whatDoWeDo';
import Links from '../components/links';
import Teams from '../components/teambox';
import Teamnav from '../components/footerofteams';
import Bottomteam from '../components/bottomnav_teamspage';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// Import Swiper styles
import 'swiper/css';
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
//import css
import '../App.css';
import '../css/Animation.css';

const TeamNavMember = props => {
  //hover state
  const [hover, setHover] = useState(false);
  return (
    <Box
      pos="relative"
      onClick={() => props.onClick()}
      w={props.isSelected ? '120px' : '100px'}
      h={props.isSelected ? '120px' : '100px'}
      borderRadius="50%"
      overflow="hidden"
      //onHover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={props.image} w="100%" h="100%" objectFit="cover" />
      {hover && (
        <Box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.5)"
          display="flex"
        >
          <Text
            color="white"
            m="auto"
            p={2}
            fontSize="1.2rem"
            textAlign="center"
          >
            {props.name}
          </Text>
        </Box>
      )}
    </Box>
  );
};

const TeamNav = props => {
  // if elements are more than 5, then show arrows

  // available pos must be in odd numbers

  var posArray = props.posArray;
  const selectedPos = props.selectedPos;
  const setSelectedPos = props.setSelectedPos;
  const setPosArray = props.setPosArray;
  // selectedPos will always be in the center and bigger than the other positions

  const handleClicked = it => {
    //find the index of the clicked item
    const index = posArray.findIndex(item => item.name === it.name);
    // if the selectedPos is clicked, do nothing
    if (index === selectedPos) return;
    // if the selectedPos is not clicked, set the selectedPos to the clicked index

    const temp = [...posArray];
    //get element at index and put it in the center
    const selectedElement = temp.splice(index, 1);
    temp.splice(temp.length / 2, 0, selectedElement[0]);
    setSelectedPos(Math.ceil(temp.length - 1) / 2);
    //set the new array
    setPosArray(temp);
  };

  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <HStack spacing={5} p={5} ref={parent} minH="200px">
      {posArray.map(it => (
        <TeamNavMember
          image={it.image1}
          name={it.name}
          onClick={() => handleClicked(it)}
          key={it.key}
          isSelected={posArray.indexOf(it) === selectedPos}
        />
      ))}
    </HStack>
  );
};

const CurrentTeamNav = props => {
  const allPosArray = props.posArray;
  const [selectedPosArray, setSelectedPosArray] = useState(0);
  const [posArray, setPosArray] = useState(
    // get the first 5 elements
    allPosArray.slice(selectedPosArray, 5)
  );
  useEffect(() => {
    console.log('posArray', posArray);
    const key = posArray[selectedPos].key;
    console.log('key', key);
    props.parentSetSelectedPos(key - 1);
  }, [posArray]);

  const [selectedPos, setSelectedPos] = useState(
    Math.ceil(posArray.length - 1) / 2
  );

  return (
    <HStack>
      {allPosArray.length > 5 && (
        <Box
          w="50px"
          h="50px"
          bg={selectedPosArray > 0 ? 'black' : 'blackAlpha.300'}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => {
            // set the new array
            //selectedPosArray is the index of the first element in the array
            // selectedPosArray >= 0 and selectedPosArray < allPosArray.length-5
            if (selectedPosArray - 5 >= 0) {
              setSelectedPosArray(selectedPosArray - 5);
              setPosArray(
                allPosArray.slice(selectedPosArray - 5, selectedPosArray)
              );
            } else {
              setSelectedPosArray(0);
              setPosArray(allPosArray.slice(0, 5));
            }
          }}
        >
          <AiOutlineLeft color="white" />
        </Box>
      )}
      <TeamNav
        posArray={posArray}
        selectedPos={selectedPos}
        setSelectedPos={setSelectedPos}
        setPosArray={setPosArray}
      />
      // right arrow
      {allPosArray.length > 5 && (
        <Box
          w="50px"
          h="50px"
          bg={
            selectedPosArray < allPosArray.length - 5
              ? 'black'
              : 'blackAlpha.300'
          }
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => {
            // set the new array
            //selectedPosArray is the index of the first element in the array
            // selectedPosArray >= 0 and selectedPosArray < allPosArray.length-5
            if (selectedPosArray + 10 < allPosArray.length) {
              setSelectedPosArray(selectedPosArray + 5);
              setPosArray(
                allPosArray.slice(selectedPosArray + 5, selectedPosArray + 10)
              );
            } else {
              setSelectedPosArray(allPosArray.length - 5);
              setPosArray(
                allPosArray.slice(allPosArray.length - 5, allPosArray.length)
              );
            }
          }}
        >
          <AiOutlineRight color="white" />
        </Box>
      )}
    </HStack>
  );
};

function Teampage() {
  const [posArray, setPosArray] = useState([
    {
      image: '/sanat.png',
      image1: '/sanat_white.png',
      insta: 'https://instagram.com/sanatbhatia?igshid=YmMyMTA2M2Y=',
      linkedin: 'https://www.linkedin.com/in/sanat-bhatia-031072233/ ',
      instahandle: '@sanatbhatia',
      Linkedinhandle: 'Sanat Bhatia',
      id: 'Sanat Bhatia',
      name: 'UI/UX Designer',
      content:
        'A UI/UX designer of GDSC JIIT-128, Sanat is responsible for designing websites,creating videos and creating posters for various events organized by GDSC JIIT-128.',
      key: '1',
    },
    {
      image: '/chaaya.png',
      image1: '/chaaya_white.png',
      id: 'Chaaya Agarwal',
      insta: 'https://www.instagram.com/chaaya._06/',
      instahandle: '@chaaya._06',
      Linkedinhandle: 'Chaaya Agarwal',
      linkedin: 'https://www.linkedin.com/in/chaaya-agarwal-992812246/',
      content:
        'One of the content writers of GDSC JIIT-128, she is brightly creative and imaginative and knows how to present the community to others with her talent of content writing.',
      name: 'Management',
      key: '2',
    },
    {
      image: '/parth_garg.png',
      insta: 'https://instagram.com/_parthahuja12_?igshid=YmMyMTA2M2Y=',
      instahandle: '@_parthahuja12_',
      linkedin: 'https://www.linkedin.com/in/parth-ahuja-a0229622b/',
      Linkedinhandle: 'Parth Ahuja',
      github: 'https://github.com/ravenclaw03',
      githubhandle: 'ravenclaw03',
      image1: '/parth_garg_white.png',
      id: 'Parth Garg',
      content:
        'Social media handler of GDSC JIIT- 128, Parth is responsible for creating awareness through our Social Media Platform to provide information about the community and contact with volunteers who show interest in the society.',
      name: 'Social Media',
      key: '3',
    },
    {
      image: '/pariyashi.png',
      image1: '/pariyashi_white.png',
      insta: 'https://instagram.com/_justhappy.uknow?igshid=YmMyMTA2M2Y',
      instahandle: '@_justhappy.uknow',
      linkedin: 'https://www.linkedin.com/in/pariyashi-sahu-b91614243/',
      Linkedinhandle: 'Pariyashi Sahu',
      github: 'https://github.com/justhappyuknow',
      githubhandle: 'justhappyuknow',
      id: 'Pariyashi Sahu',
      content:
        ' The content writer of GDSC JIIT- 128, creatively presenting the community ideas and events, the bridge to communication that is content is her responsibility.',
      name: 'Content Writer',
      key: '4',
    },

    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      id: 'Aanya Garg',
      insta: 'https://instagram.com/aanyag275?igshid=YmMyMTA2M2Y=',
      instahandle: '@aanyag275',
      linkedin: 'https://www.linkedin.com/in/aanya-garg-695543246/',
      Linkedinhandle: 'Aanya Garg',
      content:
        ' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '5',
    },
    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      id: 'Aanya Garg',
      insta: 'https://instagram.com/aanyag275?igshid=YmMyMTA2M2Y=',
      instahandle: '@aanyag275',
      linkedin: 'https://www.linkedin.com/in/aanya-garg-695543246/',
      Linkedinhandle: 'Aanya Garg',
      content:
        ' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '6',
    },
    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      id: 'Aanya Garg',
      insta: 'https://instagram.com/aanyag275?igshid=YmMyMTA2M2Y=',
      instahandle: '@aanyag275',
      linkedin: 'https://www.linkedin.com/in/aanya-garg-695543246/',
      Linkedinhandle: 'Aanya Garg',
      content:
        ' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '7',
    },
    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      id: 'Aanya Garg',
      insta: 'https://instagram.com/aanyag275?igshid=YmMyMTA2M2Y=',
      instahandle: '@aanyag275',
      linkedin: 'https://www.linkedin.com/in/aanya-garg-695543246/',
      Linkedinhandle: 'Aanya Garg',
      content:
        ' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '8',
    },
    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      id: 'Aanya Garg',
      insta: 'https://instagram.com/aanyag275?igshid=YmMyMTA2M2Y=',
      instahandle: '@aanyag275',
      linkedin: 'https://www.linkedin.com/in/aanya-garg-695543246/',
      Linkedinhandle: 'Aanya Garg',
      content:
        ' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '9',
    },
    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      id: 'Aanya Garg',
      insta: 'https://instagram.com/aanyag275?igshid=YmMyMTA2M2Y=',
      instahandle: '@aanyag275',
      linkedin: 'https://www.linkedin.com/in/aanya-garg-695543246/',
      Linkedinhandle: 'Aanya Garg',
      content:
        ' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '10',
    },
    {
      image: '/aanya.png',
      image1: '/aanya_white.png',
      id: 'Aanya Garg',
      insta: 'https://instagram.com/aanyag275?igshid=YmMyMTA2M2Y=',
      instahandle: '@aanyag275',
      linkedin: 'https://www.linkedin.com/in/aanya-garg-695543246/',
      Linkedinhandle: 'Aanya Garg',
      content:
        ' One of the Social media handlers of GDSC JIIT-128, she is responsible for making announcements about the events and sessions hosted by the community.',
      name: 'Tech Writer',
      key: '11',
    },
  ]);
  const [selectedPos, setSelectedPos] = useState(
    Math.ceil(posArray.length - 1) / 2
  );

  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <ChakraProvider>
      <>
        <Box bgColor={'#111111'} height={'100%'} m={0}>
          <Nav />
          <Head />
          <Flex justify={'center'} align={'center'}>
            <Box
              justifySelf={'center'}
              alignContent={'center'}
              bgPosition={'center'}
              alignItems={'center'}
              width={{ base: '90%', md: 950 }}
              height={{ base: '40vh', md: 400 }}
              p={{ base: 4, md: 10 }}
              mt={{ base: '-5', md: '5' }}
              borderRadius={15}
              bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
            >
              <Grid
                templateAreas={`
                  "nav main"
                  "nav footer"
                  "nav social"
                `}
                gridTemplateRows={'0.5fr 0.7fr 1fr'}
                gridTemplateColumns={'0.5fr  1fr'}
              >
                <GridItem pl="2" area={'nav'}>
                  <Image
                    src={posArray[selectedPos].image}
                    position="relative"
                    ml={{ base: -4, md: 4 }}
                    mb={3}
                    width={{ base: '120%', md: '80%' }}
                    size={'auto'}
                    mt={{ base: 20, md: 12 }}
                  />
                </GridItem>
                <GridItem pl={{ base: 2, md: '2' }} area={'main'}>
                  <Text
                    mt={2}
                    color={'white'}
                    ml={{ base: 0, md: 4 }}
                    className="fade-in"
                    textAlign={'left'}
                    key={posArray[selectedPos].key}
                    fontFamily={'Gilroy-SemiBold'}
                    fontSize={{ base: '5vw', md: '4xl' }}
                    display="inline"

                    //  bgGradient="linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)"
                  >
                    Hi, my name is{' '}
                    <span className="gradient-text">
                      {posArray[selectedPos].id}
                    </span>
                  </Text>
                </GridItem>
                <GridItem pl="2" area={'footer'}>
                  <Text
                    mt={2}
                    fontFamily={'Gilroy-Regular'}
                    fontSize={{ base: '2.5vw', md: 'md' }}
                    color={'white'}
                    ml={{ base: 0, md: 4 }}
                    className="fade-in"
                    textAlign={'left'}
                    key={posArray[selectedPos].key}
                    // mb='-5'

                    // mb = '20px'
                  >
                    {posArray[selectedPos].content}
                  </Text>
                </GridItem>
                <GridItem area={'social'}>
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacingX="20px"
                    spacingY={{ base: '0px', md: '30px' }}
                    ml={{ base: 2, md: 4 }}
                    mt={{ base: -1, md: 2 }}
                  >
                    <Box height="35px">
                      <Box
                        _hover={{ color: '#833AB4' }}
                        color={'white'}
                        width={{ base: '20px', md: '35px' }}
                        height={{ base: '20px', md: '40px' }}
                        display="inline"
                      >
                        <HStack>
                          <Link
                            href={posArray[selectedPos].insta}
                            display={'inline'}
                          >
                            <FaInstagram size={'4vw'} />{' '}
                          </Link>
                          <Link
                            href={posArray[selectedPos].insta}
                            display={'inline'}
                          >
                            <Text
                              display={'inline'}
                              fontFamily={'Gilroy-Medium'}
                              fontSize={{ base: '3vw', md: '2xl' }}
                            >
                              {posArray[selectedPos].instahandle}
                            </Text>
                          </Link>
                        </HStack>
                      </Box>
                    </Box>
                    <Box height="35px">
                      <Box
                        _hover={{ color: '#0072b1' }}
                        color={'white'}
                        width={{ base: '20px', md: '35px' }}
                        height={{ base: '20px', md: '40px' }}
                        display="inline"
                      >
                        <HStack>
                          <Link
                            href={posArray[selectedPos].linkedin}
                            display={'inline'}
                          >
                            <FaLinkedin size={'4vw'} />{' '}
                          </Link>
                          <Link
                            href={posArray[selectedPos].linkedin}
                            display={'inline'}
                          >
                            <Text
                              display={'inline'}
                              fontFamily={'Gilroy-Medium'}
                              fontSize={{ base: '3vw', md: '2xl' }}
                            >
                              {posArray[selectedPos].Linkedinhandle}
                            </Text>
                          </Link>
                        </HStack>
                      </Box>
                    </Box>

                    <Box height="35px">
                      <Box
                        _hover={{ color: 'Black' }}
                        color={'white'}
                        width={{ base: '20px', md: '35px' }}
                        height={{ base: '20px', md: '40px' }}
                        display="inline"
                      >
                        <HStack>
                          <Link
                            href={posArray[selectedPos].github}
                            display={'inline'}
                          >
                            <FaGithub size={'4vw'} />{' '}
                          </Link>
                          <Link
                            href={posArray[selectedPos].github}
                            display={'inline'}
                          >
                            <Text
                              display={'inline'}
                              fontFamily={'Gilroy-Medium'}
                              fontSize={{ base: '3vw', md: '2xl' }}
                            >
                              {posArray[selectedPos].githubhandle}
                            </Text>
                          </Link>
                        </HStack>
                      </Box>
                    </Box>
                    <Box height="35px"></Box>
                  </SimpleGrid>
                </GridItem>
              </Grid>
            </Box>
          </Flex>

          <Flex align={'center'} justify="center">
            <VStack>
              <Box>
                <Box textAlign={'center'} alignItems="center" color={'white'}>
                  <Text
                    mb={'0.61%'}
                    fontSize={{ base: '4vw', md: 30 }}
                    mt={5}
                    _hover={{
                      bgGradient:
                        'linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)',
                      bgClip: 'text',
                    }}
                  >
                    Core Team
                  </Text>

                  <Image
                    src="/Line 3.png"
                    ml={'auto'}
                    mr={'auto'}
                    align="center"
                    width={{ base: '50%', md: '80%' }}
                  />
                </Box>
              </Box>
              <Flex maxW={'100vw'}>
                <Box
                  mt={4}
                  alignContent="center"
                  position={'relative'}
                  w="100%"
                  ml={50}
                >
                  <CurrentTeamNav
                    posArray={posArray}
                    parentSetSelectedPos={setSelectedPos}
                  />
                </Box>
              </Flex>
            </VStack>
          </Flex>
        </Box>
      </>
    </ChakraProvider>
  );
}

export default Teampage;
