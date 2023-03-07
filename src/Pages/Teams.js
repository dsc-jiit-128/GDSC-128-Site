import React, { useEffect, useReducer, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { Stack, VStack } from '@chakra-ui/react';

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

  var posArrayCoreTeam = props.posArrayCoreTeam;
  const selectedPosCoreTeam = props.selectedPosCoreTeam;
  const setSelectedPosCoreTeam = props.setSelectedPosCoreTeam;
  const setPosArray = props.setPosArray;
  // selectedPosCoreTeam will always be in the center and bigger than the other positions

  const handleClicked = it => {
    //find the index of the clicked item
    const index = posArrayCoreTeam.findIndex(item => item.name === it.name);
    // if the selectedPosCoreTeam is clicked, do nothing
    if (index === selectedPosCoreTeam) return;
    // if the selectedPosCoreTeam is not clicked, set the selectedPosCoreTeam to the clicked index

    const temp = [...posArrayCoreTeam];
    //get element at index and put it in the center
    const selectedElement = temp.splice(index, 1);
    temp.splice(temp.length / 2, 0, selectedElement[0]);
    setSelectedPosCoreTeam(Math.floor(temp.length - 1) / 2);
    //set the new array
    setPosArray(temp);
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
      {posArrayCoreTeam.map(it => (
        <TeamNavMember
          image={it.image1}
          name={it.name}
          onClick={() => handleClicked(it)}
          key={it.key}
          isSelected={posArrayCoreTeam.indexOf(it) === selectedPosCoreTeam}
        />
      ))}
    </HStack>
  );
};

const Img = src => {
  return <img src={src} alt="team" />;
};

const CurrentTeamNav = props => {
  const allPosArray = props.posArrayCoreTeam;
  const [selectedPosArray, setSelectedPosArray] = useState(0);
  const [posArrayCoreTeam, setPosArray] = useState(
    // get the first 5 elements
    allPosArray.slice(selectedPosArray, 5)
  );
  useEffect(() => {
    console.log('posArrayCoreTeam', posArrayCoreTeam);
    const key = posArrayCoreTeam[selectedPosCoreTeam]?.key;
    console.log('key', key);
    props.parentSetSelectedPos(key - 1);
  }, [posArrayCoreTeam]);

  const [selectedPosCoreTeam, setSelectedPosCoreTeam] = useState(
    Math.floor((posArrayCoreTeam.length - 1) / 2)
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
        posArrayCoreTeam={posArrayCoreTeam}
        selectedPosCoreTeam={selectedPosCoreTeam}
        setSelectedPosCoreTeam={setSelectedPosCoreTeam}
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
  const TeamLeads = [
    {
      image: '/sagar_w.webp',
      image1: '/sagar.webp',
      id: 'Sagar Maurya',
      insta: 'https://instagram.com/_sagar27_?igshid=YmMyMTA2M2Y=',
      instahandle: '@_sagar27_',
      linkedin: 'https://www.linkedin.com/in/sagarmaurya',
      Linkedinhandle: 'Sagar Maurya',
      github: 'https://github.com/rookkiee?',
      githubhandle: 'rookkiee',
      discord: 'http://discordapp.com/users/Sagar#7961',
      discordhandle: 'Sagar#7961',

      name: ' Management Lead',

      content:
        'I am inclined towards distinct process consisting of planning, organising, actuating and controlling; utilising in each both science and art, and followed in order to accomplish pre-determined objectives.',
      key: '1',
    },
    {
      image: '/sarthak.webp',
      image1: '/sarthak_w.webp',
      id: 'Sarthak Pant',
      insta: '',
      instahandle: '',
      linkedin: 'https://www.linkedin.com/in/sarthak-pant-8844521b7/',
      Linkedinhandle: 'Sarthak Pant',
      github: 'https://github.com/sarthakpant772',
      githubhandle: 'sarthakpant772',
      discord: 'http://discordapp.com/users/Cyanide#0711',
      discordhandle: 'Cyanide#0711',

      content: '',
      name: 'Tech Lead',
      key: '2',
    },

    {
      image: '/amvi.webp',
      image1: '/amvi_w.webp',
      id: 'Amvi Sinha',
      insta: 'https://instagram.com/itsamviii?igshid=ZDdkNTZiNTM=',
      instahandle: '@itsamviii',
      linkedin: 'https://www.linkedin.com/in/amvi-sinha-59a953203/',
      Linkedinhandle: 'Amvi Sinha',
      github: 'https://github.com/as0213',
      githubhandle: 'as0213',
      discord: 'http://discordapp.com/users/Amvi#2596',
      discordhandle: 'mv#2596',

      content: 'Hi, I am your GDSC Lead',
      name: 'Community Lead',
      key: '3',
    },
    {
      image: '/sambhav.webp',
      image1: '/sambhav_w.webp',
      id: 'Sambhav Jain',
      insta: 'https://instagram.com/sambhavjn_17',
      instahandle: '@sambhavjn_17',
      github: 'https://github.com/Sambhavjain9812',
      githubhandle: 'Sambhavjain9812',
      discord: 'http://discordapp.com/users/Sambhav#7534',
      discordhandle: 'Sambhav#7534',
      linkedin: 'https://www.linkedin.com/in/sambhav-jain-40907021b/',
      Linkedinhandle: 'Sambhav Jain',

      content: ' Stressed Blessed and Caffeine Obsessed ',
      name: 'Social Media and Content ',
      key: '4',
    },
    {
      image: '/bhavya.webp',
      image1: '/bhavya_w.webp',
      id: 'Bhavya Aggarwal',
      insta: 'https://www.instagram.com/bhavya.aggarwall/',
      instahandle: '@bhavya.aggarwall',
      linkedin: 'https://www.linkedin.com/in/bhavya-aggarwal-544488209/',
      Linkedinhandle: 'Bhavya Aggarwal',
      github: 'https://github.com/Bhavya0404',
      githubhandle: 'Bhavya0404',
      discord: 'http://discordapp.com/users/GameOnSpot#8227',
      discordhandle: 'GameOnSpot#8227',

      content: 'Figuring out cheat codes for the game called Life',
      name: 'Web Lead',
      key: '5',
    },
    {
      image: '/aasmi.webp',
      image1: '/aasmi_w.webp',
      insta: 'https://instagram.com/_.medusaa.a._?igshid=ZmZhODViOGI=',
      linkedin: 'https://www.linkedin.com/in/aasmi-gill-a2268621b ',
      github: 'https://github.com/aasmigill',
      githubhandle: 'aasmigill',
      discord: 'http://discordapp.com/users/Aasmi#8369',
      discordhandle: 'Aasmi#8369',
      instahandle: '@_.medusaa.a._',
      Linkedinhandle: 'Aasmi Gill',

      id: 'Aasmi Gill',
      name: 'Management Lead',
      content: 'an open book written in a cryptic dead language ',
      key: '6',
    },
  ];

  const CoreTeam = [
    {
      image: '/sanat.webp',
      image1: '/sanat_white.webp',
      insta: 'https://instagram.com/sanatbhatia?igshid=YmMyMTA2M2Y=',
      linkedin: 'https://www.linkedin.com/in/sanat-bhatia-031072233/ ',
      github: 'https://github.com/TheCringedSoul',
      githubhandle: 'TheCringedSoul',
      discord: 'http://discordapp.com/users/TheCringedSoul#7900',
      discordhandle: 'TheCringedSoul#7900',
      instahandle: '@sanatbhatia',
      Linkedinhandle: 'Sanat Bhatia',

      id: 'Sanat Bhatia',
      name: 'UI/UX Designer;',
      content: '"I am silently judging your font choice."',
      key: '1',
    },
    {
      image: '/Tanay.webp',
      image1: '/Tanay_w.webp',
      id: 'Tanay Kedia',
      insta: 'https://instagram.com/tanay_7',
      instahandle: '@tanay_7',
      linkedin: 'https://www.linkedin.com/in/tanay-k-755340177',
      Linkedinhandle: 'Tanay Kedia',
      github: 'https://github.com/tanayk07',
      githubhandle: 'tanayk07',
      discord: 'http://discordapp.com/users/Tanay#3729',
      discordhandle: 'Tanay#3729',

      content: '"Making the World a better place" -Gavin Belson',
      name: 'Android/Web-Dev',
      key: '2',
    },

    {
      image: '/doyel.webp',
      image1: '/doyel_white.webp',
      id: 'Doyel Agrawal',
      insta: 'https://instagram.com/_.doyel._',
      instahandle: '@_.doyel._',
      github: 'https://github.com/DoyelA',
      githubhandle: 'DoyelA',
      discord: 'http://discordapp.com/users/DolaMandola#9233',
      discordhandle: 'DolaMandola#9233',
      linkedin: 'https://www.linkedin.com/in/doyel-agrawal-aaa6621b6/',
      Linkedinhandle: 'Doyel Agrawal',

      content: ' Always pet a cat when you meet one.',
      name: 'Backend Dev',
      key: '3',
    },
    {
      image: '/Vishesh.webp',
      image1: '/Vishesh_w.webp',
      id: 'Vishesh Raheja',
      insta: 'https://instagram.com/rogue__amoeba',
      instahandle: '@rogue__amoeba',
      linkedin: 'https://www.linkedin.com/in/vishesh-raheja',
      Linkedinhandle: 'Vishesh Raheja',
      github: 'https://github.com/entropyconquers',
      githubhandle: 'entropyconquers',
      discord: 'https://discordapp.com/users/deadbeat_galvanometer#2452',
      discordhandle: 'ViShEsH#2452',

      content:
        'I spend most of my time failing to automate tasks that I could have done manually in 5 minutes.',
      name: 'Mobile/Web Dev',
      key: '4',
    },

    {
      image: '/Bhav.webp',
      image1: '/Bhav_w.webp',
      id: 'Bhav Goyal',
      insta: 'https://www.instagram.com/goyalbhav/',
      instahandle: '@goyalbhav',
      linkedin: 'https://www.linkedin.com/in/goyalbhav',
      Linkedinhandle: ' Bhav Goyal',
      github: 'https://github.com/w3rew0lf',
      githubhandle: 'w3rew0lf',
      discord: 'http://discordapp.com/users/w3rew01f#4027',
      discordhandle: 'w3rew01f#4027',

      content: 'I like to explore, travel and know more people. ',
      name: 'Cyber Security',
      key: '5',
    },
    {
      image: '/Sahil.webp',
      image1: '/Sahil_w.webp',
      id: 'Sahilsher Singh',
      insta: 'https://instagram.com/sandhu._.sahil_',
      instahandle: '@sandhu._.sahil_',
      linkedin: 'https://www.linkedin.com/in/sahilsher-singh/',
      Linkedinhandle: ' Sahilsher Singh',
      github: 'hhttps://github.com/Sandhu-Sahil',
      githubhandle: 'Sandhu-Sahil',
      discord: 'http://discordapp.com/users/Sahil Sandhu#5673',
      discordhandle: 'Sahil Sandhu#5673',

      content:
        'I am not a traitor to my class. I am just an extreme example of what a working man can achieve.',
      name: 'Web Dev ',
      key: '6',
    },
    {
      image: '/Shivansh.webp',
      image1: '/Shivansh_w.webp',
      id: 'Shivansh Pandey',
      insta: 'https://www.instagram.com/_shivansh04/',
      instahandle: '@_shivansh04',
      linkedin: 'https://www.linkedin.com/in/shivansh-pandey-03619a166/',
      Linkedinhandle: 'Shivansh Pandey',
      github: 'https://github.com/Shivansh-25',
      githubhandle: 'Shivansh-25',
      discord: 'https://discordapp.com/users/513042268190408714',
      discordhandle: 'Shivansh#4027',

      content: '“If you think math is hard, try web design.” ',
      name: 'Web Dev  ',
      key: '7',
    },

    {
      image: '/Ritik.webp',
      image1: '/Ritik_w.webp',
      id: 'Ritik Shukla',
      insta: 'https://github.com/rittik112',
      instahandle: '@rittik112',
      linkedin: 'https://www.linkedin.com/in/ritik-shukla-8b3928203',
      Linkedinhandle: 'Ritik Shukla',
      github: 'https://github.com/rittik112',
      githubhandle: 'rittik112',
      discord: 'http://discordapp.com/users/bruhhtik#9344',
      discordhandle: 'bruhhtik#9344',

      content: 'I like to play around with cp every now and then.',
      name: 'Competitive Programming',
      key: '8',
    },
    {
      image: '/chaaya.webp',
      image1: '/chaaya_white.webp',
      id: 'Chaaya Agarwal',
      insta: 'https://www.instagram.com/chaaya._06/',
      instahandle: '@chaaya._06',
      github: 'https://github.com/Chaaya0605',
      githubhandle: 'Chaaya0605',
      discord: 'http://discordapp.com/users/Chaaya Agarwal#5763',
      discordhandle: 'Chaaya Agarwal#5763',
      Linkedinhandle: 'Chaaya Agarwal',
      linkedin: 'https://www.linkedin.com/in/chaaya-agarwal-992812246/',
      content:
        '"Never give up on something you really want, it may be difficult to wait but it is much more difficult to regret!"',
      name: 'Content Writer',
      key: '9',
    },
    {
      image: '/parth_garg.webp',
      image1: '/parth_garg_white.webp',
      insta: 'https://instagram.com/_parthahuja12_?igshid=YmMyMTA2M2Y=',
      instahandle: '@_parthahuja12_',
      linkedin: 'https://www.linkedin.com/in/parth-ahuja-a0229622b/',
      Linkedinhandle: 'Parth Ahuja',
      github: 'https://github.com/ravenclaw03',
      githubhandle: 'ravenclaw03',
      discord: 'http://discordapp.com/users/ravenclaw03#4283',
      discordhandle: 'ravenclaw03#4283',
      id: 'Parth Ahuja',
      content:
        'What is meant for you will find you even if you feel like it has already passed you.',
      name: 'Social Media',
      key: '10',
    },
    {
      image: '/pariyashi.webp',
      image1: '/pariyashi_white.webp',
      insta: 'https://instagram.com/_justhappy.uknow?igshid=YmMyMTA2M2Y',
      instahandle: '@_justhappy.uknow',
      linkedin: 'https://www.linkedin.com/in/pariyashi-sahu-b91614243/',
      Linkedinhandle: 'Pariyashi Sahu',
      github: 'https://github.com/justhappyuknow',
      githubhandle: 'justhappyuknow',
      discord: 'http://discordapp.com/users/Pariyashihere#9072',
      discordhandle: 'Pariyashihere#9072',
      id: 'Pariyashi Sahu',
      content:
        'Void full of space, learning and improving myself while gazing the stars at night!',
      name: 'Content Writer  ',
      key: '11',
    },

    {
      image: '/kanavagarwal.webp',
      image1: '/kanavagarwal_white.webp',
      id: 'Kanav Agarwal',
      insta: 'https://www.instagram.com/kanav_ag/',
      instahandle: '@kanav_ag',
      linkedin: 'https://www.linkedin.com/in/kanav-agarwal-30663421b/',
      Linkedinhandle: 'Kanav Agarwal',
      github: 'https://github.com/Kanav31',
      githubhandle: 'Kanav31',
      discord: 'http://discordapp.com/users/Kanav Agarwal#9540',
      discordhandle: 'Kanav Agarwal#9540',
      content:
        ' Learning captivates me as it is not attained by chance, it must be sought for with ardor and attended to with diligence.',
      name: 'Management  ',
      key: '12',
    },

    {
      image: '/AryanK.webp',
      image1: '/AryanK_white.webp',
      id: 'Aryan Kulshrestha',
      insta: 'https://instagram.com/_aryan_15_9?igshid=YmMyMTA2M2Y=',
      instahandle: '@_aryan_15_9',
      linkedin: 'https://www.linkedin.com/in/aryan-kulshrestha-993248221',
      Linkedinhandle: ' Aryan Kulshrestha',
      github: 'https://github.com/aryankul15',
      githubhandle: 'aryankul15',
      discord: 'https://discordapp.com/users/Aryan Kulshrestha#5249',
      discordhandle: 'Aryan Kulshrestha#5249',

      content:
        'Good management is the art of making problems so interesting and their solutions so constructive that everyone wants to get to work and deal with them ',
      name: 'Management    ',
      key: '13',
    },
  ];

  const loadImages = () => {
    //load images from image and image1 in the CoreTeam and TeamLeads array
    var cache = [];
    TeamLeads.forEach(member => {
      var img = new Image().src = member.image;
      cache.push(img);
    });
    CoreTeam.forEach(member => {
      var img = new Image().src = member.image;
      cache.push(img);
    });


  };

  useEffect(() => {
    loadImages();
  }, []);

  const [posArrayCoreTeam, setPosArray] = useState(TeamLeads);
  const [selectedPosCoreTeam, setSelectedPosCoreTeam] = useState(
    Math.floor((posArrayCoreTeam.length - 1) / 2)
  );
  const [selectedPosCoreTeamX, setSelectedPosCoreTeamX] = useState(
    Math.floor((posArrayCoreTeam.length - 1) / 2)
  );
  const [mountState, setMountState] = useState(true);
  useEffect(() => {
    setMountState(false);
  }, [posArrayCoreTeam]);

  useEffect(() => {
    //50 ms timeout to allow the animation to finish
    setTimeout(() => {
      setMountState(true);
    }, 50);
  }, [mountState]);

  const [selectedTeam, setSelectedTeam] = useState('leads');

  const [parent] = useAutoAnimate(/* optional config */);
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
                        src={posArrayCoreTeam[selectedPosCoreTeam]?.image}
                        fallbackSrc={posArrayCoreTeam[selectedPosCoreTeam]?.image1}
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
                        key={posArrayCoreTeam[selectedPosCoreTeam]?.key}
                        fontFamily={'Gilroy-SemiBold'}
                        fontSize={{ base: '5vw', md: '4xl' }}
                        display="inline"
                        mb={2}

                        //  bgGradient="linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)"
                      >
                        Hi, my name is{' '}
                        <span className="gradient-text">
                          {posArrayCoreTeam[selectedPosCoreTeam]?.id}
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
                        key={posArrayCoreTeam[selectedPosCoreTeam]?.key}
                        // mb={{ base: '0', md: '0' }}

                        // mb = '20px'
                        display={'box'}
                        p={0}
                      >
                        {posArrayCoreTeam[selectedPosCoreTeam]?.content}
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
                                  posArrayCoreTeam[selectedPosCoreTeam]?.insta
                                }
                                display={'inline'}
                              >
                                <FaInstagram className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayCoreTeam[selectedPosCoreTeam]?.insta
                                }
                                display={'inline'}
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                  mr={1}
                                >
                                  {
                                    posArrayCoreTeam[selectedPosCoreTeam]
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
                                  posArrayCoreTeam[selectedPosCoreTeam]
                                    ?.linkedin
                                }
                                display={'inline'}
                              >
                                <FaLinkedin className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayCoreTeam[selectedPosCoreTeam]
                                    ?.linkedin
                                }
                                display={'inline'}
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                >
                                  {
                                    posArrayCoreTeam[selectedPosCoreTeam]
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
                                  posArrayCoreTeam[selectedPosCoreTeam]?.github
                                }
                                display={'inline'}
                              >
                                <FaGithub className="gfg-div" />
                              </Link>
                              <Link
                                href={
                                  posArrayCoreTeam[selectedPosCoreTeam]?.github
                                }
                                display={'inline'}
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                >
                                  {
                                    posArrayCoreTeam[selectedPosCoreTeam]
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
                                  posArrayCoreTeam[selectedPosCoreTeam]?.discord
                                }
                                display={'inline'}
                              >
                                <FaDiscord className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayCoreTeam[selectedPosCoreTeam]?.discord
                                }
                                display={'inline'}
                              >
                                <Text
                                  display={'inline'}
                                  fontFamily={'Gilroy-Medium'}
                                  fontSize={{ base: '3vw', md: '1.2vw' }}
                                >
                                  {
                                    posArrayCoreTeam[selectedPosCoreTeam]
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
                          onClick={() => {
                            setPosArray(TeamLeads);
                            setSelectedPosCoreTeam(
                              Math.floor((TeamLeads.length - 1) / 2)
                            );
                            setSelectedTeam('leads');
                          }}
                          opacity={selectedTeam === 'leads' ? 1 : 0.5}
                          color="white"
                        >
                          <Text
                            fontSize={{ base: '4vw', md: 30 }}
                            fontFamily={'Gilroy-Bold'}
                            _hover={{
                              bgGradient:
                                'linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)',
                              bgClip: 'text',
                            }}
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

                        <VStack
                          onClick={() => {
                            setPosArray(CoreTeam);
                            setSelectedPosCoreTeam(
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
                          posArrayCoreTeam={posArrayCoreTeam}
                          parentSetSelectedPos={setSelectedPosCoreTeam}
                          selectedPosCoreTeam={selectedPosCoreTeam}
                        />
                      ) : (
                        // This will force a re-render of the component
                        <Box>
                          <CurrentTeamNav
                            posArrayCoreTeam={TeamLeads}
                            parentSetSelectedPos={setSelectedPosCoreTeamX}
                            selectedPosCoreTeam={selectedPosCoreTeamX}
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
