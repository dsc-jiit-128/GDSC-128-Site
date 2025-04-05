import React, { useEffect, useReducer, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { Stack, VStack } from '@chakra-ui/react';
import Mentors from './teamData/mentors.json';
import TeamLeads from './teamData/leads.json';
import CoreTeam from './teamData/core.json';

import './xyz.css';
import {
  GridItem,
  SimpleGrid,
  Grid,
  Image as ChakraImage,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import Nav from '../components/navbar';
import Head from '../components/heading';

import { useAutoAnimate } from '@formkit/auto-animate/react';
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
      pos="inherit"
      onClick={() => props.onClick()}
      h={{
        base: props.isSelected ? '60px' : '40px',
        md: props.isSelected ? '120px' : '100px',
      }}
      w={{
        base: props.isSelected ? '60px' : '40px',
        md: props.isSelected ? '120px' : '100px',
      }}
      // border="4px green solid"
      // borderRadius="50%"
      overflow="hidden"
      cursor="pointer"
      //onHover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ChakraImage
        src={props.image}
        width={{ base: '100%', md: '100%' }}
        height={{ base: '100%', md: '100%' }}
        objectFit="cover"
        // border={'4px solid yellow'}
      />
      {hover && (
        <Box
          pos="absolute"
          top={{ base: 0, md: 0 }}
          left={{ base: 0, md: 0 }}
          w={{ base: '100%', md: '100%' }}
          h={{ base: '100%', md: '100%' }}
          bg="rgba(0,0,0,0.5)"
          display="flex"
          borderRadius={{ base: '100', md: 100 }}
          // border={'4px solid yellow'}
        >
          <Text
            color="white"
            m="auto"
            p={2}
            fontSize={{ base: '1.5vw', md: '1.2vw' }}
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

  var posArrayTeamLeads = props.posArrayTeamLeads;
  const selectedPosTeamLeads = props.selectedPosTeamLeads;
  const setSelectedPosTeamLeads = props.setSelectedPosTeamLeads;
  const setPosArray = props.setPosArray;
  // selectedPosTeamLeads will always be in the center and bigger than the other positions

  const handleClicked = it => {
    const index = posArrayTeamLeads.findIndex(item => item.key === it.key);
    if (index === selectedPosTeamLeads) return;

    // Create a new array with selected member in the center
    const centerIndex = Math.floor(posArrayTeamLeads.length / 2);
    const newArray = [...posArrayTeamLeads];

    // Swap positions
    const temp = newArray[centerIndex];
    newArray[centerIndex] = newArray[index];
    newArray[index] = temp;

    setPosArray(newArray);
    setSelectedPosTeamLeads(centerIndex);
  };

  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <HStack
      spacing={{ base: '10px', md: '20px' }}
      p={0}
      ref={parent}
      minH="20px"
      // border={'4px red solid'}
      display="flex"
    >
      {posArrayTeamLeads.map(it => (
        <TeamNavMember
          image={it.image1}
          name={it.name}
          onClick={() => handleClicked(it)}
          key={it.key}
          isSelected={posArrayTeamLeads.indexOf(it) === selectedPosTeamLeads}
        />
      ))}
    </HStack>
  );
};

const Img = src => {
  return <img src={src} alt="team" />;
};

const CurrentTeamNav = props => {
  const allPosArray = props.posArrayTeamLeads;
  const [selectedPosArray, setSelectedPosArray] = useState(0);
  const [posArrayTeamLeads, setPosArray] = useState(
    // get the first 5 elements
    allPosArray.slice(selectedPosArray, 5)
  );
  useEffect(() => {
    console.log('posArrayTeamLeads', posArrayTeamLeads);
    const key = posArrayTeamLeads[selectedPosTeamLeads]?.key;
    console.log('key', key);
    props.parentSetSelectedPos(key - 1);
  }, [posArrayTeamLeads]);

  const [selectedPosTeamLeads, setSelectedPosTeamLeads] = useState(
    Math.floor((posArrayTeamLeads.length - 1) / 2)
  );

  return (
    <HStack>
      {allPosArray.length > 5 && (
        <Box
          w={{ base: '20px', md: '40px' }}
          h={{ base: '20px', md: '40px' }}
          bg={selectedPosArray > 0 ? 'black' : 'blackAlpha.300'}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          // border={'4px blue solid'}
          ml={-10}
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
        posArrayTeamLeads={posArrayTeamLeads}
        selectedPosTeamLeads={selectedPosTeamLeads}
        setSelectedPosTeamLeads={setSelectedPosTeamLeads}
        setPosArray={setPosArray}
      />

      {allPosArray.length > 5 && (
        <Box
          w={{ base: '20px', md: '40px' }}
          h={{ base: '20px', md: '40px' }}
          bg={
            selectedPosArray < allPosArray.length - 5
              ? 'black'
              : 'blackAlpha.300'
          }
          // border="4px green solid"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          ml={120}
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
  const loadImages = () => {
    //load images from image and image1 in the TeamLeads and Mentors array
    var cache = [];
    Mentors.forEach(member => {
      var img = (new Image().src = member.image);
      cache.push(img);
    });
    TeamLeads.forEach(member => {
      var img = (new Image().src = member.image);
      cache.push(img);
    });
    CoreTeam.forEach(member => {
      var img = (new Image().src = member.image);
      cache.push(img);
    });
  };

  useEffect(() => {
    loadImages();
  }, []);

  const [posArrayTeamLeads, setPosArray] = useState(TeamLeads);
  const [selectedPosTeamLeads, setSelectedPosTeamLeads] = useState(
    Math.floor((posArrayTeamLeads.length - 1) / 2)
  );
  const [selectedPosTeamLeadsX, setSelectedPosTeamLeadsX] = useState(
    Math.floor((posArrayTeamLeads.length - 1) / 2)
  );
  const [mountState, setMountState] = useState(true);
  useEffect(() => {
    setMountState(false);
  }, [posArrayTeamLeads]);

  useEffect(() => {
    //50 ms timeout to allow the animation to finish
    setTimeout(() => {
      setMountState(true);
    }, 50);
  }, [mountState]);

  const [selectedTeam, setSelectedTeam] = useState('leads');

  const [parent] = useAutoAnimate(/* optional config */);

  useEffect(() => {
    loadImages();

    // Check URL hash when component mounts
    const hash = window.location.hash;
    if (hash === '#core') {
      setPosArray(CoreTeam);
      setSelectedPosTeamLeads(Math.floor((CoreTeam.length - 1) / 2));
      setSelectedTeam('core');
    } else if (hash === '#lead') {
      setPosArray(TeamLeads);
      setSelectedPosTeamLeads(Math.floor((TeamLeads.length - 1) / 2));
      setSelectedTeam('leads');
    }
  }, []);
  return (
    <ChakraProvider>
      <>
        <Box
          bgColor={'#111111'}
          minH="100%"
          alignItems={'center'}
          w="100%"
          justifyContent={'center'}
          display={'flex'}
        >
          <Box bgColor={'#111111'} minH="100vh" m={0} w="100%">
            <Nav />
            <Head />
            <VStack
              justify={'center'}
              align={'center'}
              direction={'column'}
              display={'flex'}
              flexGrow={1}
              py={{ base: '5', md: '10' }}
              pb={{ base: '5', md: '20' }}
              //fill remaining height
            >
              <Flex justify={'center'} align={'center'}>
                <Box
                  justifySelf={'center'}
                  alignContent={'center'}
                  bgPosition={'center'}
                  alignItems={'center'}
                  width={{ base: '90%', md: 950 }}
                  height={{ base: '300', md: 400 }}
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
                    gridTemplateRows={{ md: '0.5fr 0.7fr 1fr' }}
                    gridTemplateColumns={{ md: '0.5fr  1fr' }}
                  >
                    <GridItem pl="2" area={'nav'}>
                      <ChakraImage
                        src={posArrayTeamLeads[selectedPosTeamLeads]?.image}
                        fallbackSrc={
                          posArrayTeamLeads[selectedPosTeamLeads]?.image1
                        }
                        position="relative"
                        ml={{ base: -4, md: 4 }}
                        mb={3}
                        width={{ base: '100%', md: '80%' }}
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
                        key={posArrayTeamLeads[selectedPosTeamLeads]?.key}
                        fontFamily={'Gilroy-SemiBold'}
                        fontSize={{ base: '5vw', md: '4xl' }}
                        display="inline"
                        mb={2}

                        //  bgGradient="linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)"
                      >
                        Hi, my name is{' '}
                        <span className="gradient-text">
                          {posArrayTeamLeads[selectedPosTeamLeads]?.id}
                        </span>
                      </Text>
                    </GridItem>
                    <GridItem
                      pl="2"
                      area={'footer'}
                      pb={0}
                      mb={0}
                      display="inline"
                    >
                      <Text
                        mt={{ base: 2, md: 2 }}
                        fontFamily={'Gilroy-Regular'}
                        fontSize={{ base: '2.5vw', md: 'md' }}
                        color={'white'}
                        ml={{ base: 0, md: 4 }}
                        className="fade-in"
                        textAlign={'left'}
                        key={posArrayTeamLeads[selectedPosTeamLeads]?.key}
                        // mb={{ base: '0', md: '0' }}

                        // mb = '20px'
                        display={'box'}
                        p={0}
                      >
                        {posArrayTeamLeads[selectedPosTeamLeads]?.content}
                      </Text>
                    </GridItem>
                    <GridItem area={'social'}>
                      <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacingX="20px"
                        spacingY={{ base: '0px', md: '30px' }}
                        ml={{ base: 2, md: 4 }}
                        mt={{ base: 2, md: 2 }}
                        // border = {'4px green solid '}
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
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]?.insta
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <FaInstagram className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]?.insta
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                  mr={1}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.instahandle
                                  }
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
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.linkedin
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <FaLinkedin className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.linkedin
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.Linkedinhandle
                                  }
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
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.github
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <FaGithub className="gfg-div" />
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.github
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.githubhandle
                                  }
                                </Text>
                              </Link>
                            </HStack>
                          </Box>
                        </Box>
                        <Box height="35px">
                          <Box
                            _hover={{ color: '#7289d9' }}
                            color={'white'}
                            width={{ base: '20px', md: '35px' }}
                            height={{ base: '20px', md: '40px' }}
                            display="inline"
                          >
                            <HStack>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.discord
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <FaDiscord className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.discord
                                }
                                display={'inline'}
                                target="_blank"
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.discordhandle
                                  }
                                </Text>
                              </Link>
                            </HStack>
                          </Box>
                        </Box>
                      </SimpleGrid>
                    </GridItem>
                  </Grid>
                </Box>
              </Flex>

              <Flex align={'center'} justify="center">
                <VStack>
                  <Box>
                    <Box textAlign={'center'} alignItems="center">
                      <HStack
                        mt={5}
                        // center align
                        spacing={5}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <VStack
                          onClick={async () => {
                            await setPosArray(Mentors);
                            setSelectedPosTeamLeads(
                              Math.floor((Mentors.length - 1) / 2)
                            );
                            setSelectedTeam('mentors');
                          }}
                          opacity={selectedTeam === 'mentors' ? 1 : 0.5}
                          color="white"
                        >
                          <Text
                            fontSize={{ base: '4vw', md: 30 }}
                            fontFamily={'Gilroy-Bold'}
                            _hover={{
                              bgGradient:
                                'linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)',
                              bgClip: 'text',
                              cursor: 'pointer',
                            }}
                          >
                            Mentors
                          </Text>
                          <ChakraImage
                            src="/Line 3.webp"
                            ml={'auto'}
                            mr={'auto'}
                            align="center"
                            width={{ base: '50%', md: '80%' }}
                          />
                        </VStack>

                        <VStack
                          onClick={async () => {
                            await setPosArray(TeamLeads);
                            setSelectedPosTeamLeads(
                              Math.floor((TeamLeads.length - 1) / 2)
                            );
                            setSelectedTeam('leads');
                          }}
                          opacity={selectedTeam === 'leads' ? '1' : '0.5'}
                          color="white"
                        >
                          <Text
                            fontSize={{ base: '4vw', md: 30 }}
                            fontFamily={'Gilroy-Bold'}
                            _hover={{
                              bgGradient:
                                'linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)',
                              bgClip: 'text',
                              cursor: 'pointer',
                            }}
                            //color = {selectedTeam === "core" ? "white" : "gray.600"}
                          >
                            Team Leads
                          </Text>
                          <ChakraImage
                            src="/Line 3.webp"
                            ml={'auto'}
                            mr={'auto'}
                            align="center"
                            width={{ base: '50%', md: '80%' }}
                          />
                        </VStack>

                        {/* Removed the core team section as requested. To bring it back, simply uncomment the code below */}
                        <VStack
                          onClick={() => {
                            setPosArray(CoreTeam);
                            setSelectedPosTeamLeads(
                              Math.floor((CoreTeam.length - 1) / 2)
                            );
                            setSelectedTeam('core');
                          }}
                          opacity={selectedTeam === 'core' ? '1' : '0.5'}
                          color="white"
                        >
                          <Text
                            fontSize={{ base: '4vw', md: 30 }}
                            fontFamily={'Gilroy-Bold'}
                            _hover={{
                              bgGradient:
                                'linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)',
                              bgClip: 'text',
                              cursor: 'pointer',
                            }}
                            //color = {selectedTeam === "core" ? "white" : "gray.600"}
                          >
                            Core Team
                          </Text>
                          <ChakraImage
                            src="/Line 3.webp"
                            ml={'auto'}
                            mr={'auto'}
                            align="center"
                            width={{ base: '50%', md: '80%' }}
                          />
                        </VStack>
                      </HStack>
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
                      {mountState ? (
                        <CurrentTeamNav
                          posArrayTeamLeads={posArrayTeamLeads}
                          parentSetSelectedPos={setSelectedPosTeamLeads}
                          selectedPosTeamLeads={selectedPosTeamLeads}
                        />
                      ) : (
                        // This will force a re-render of the component
                        <Box>
                          <CurrentTeamNav
                            posArrayTeamLeads={Mentors}
                            parentSetSelectedPos={setSelectedPosTeamLeadsX}
                            selectedPosTeamLeads={selectedPosTeamLeadsX}
                          />
                        </Box>
                      )}
                    </Box>
                  </Flex>
                </VStack>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </>
    </ChakraProvider>
  );
}

export default Teampage;
