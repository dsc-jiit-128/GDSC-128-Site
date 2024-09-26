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
    //find the index of the clicked item
    const index = posArrayTeamLeads.findIndex(item => item.name === it.name);
    // if the selectedPosTeamLeads is clicked, do nothing
    if (index === selectedPosTeamLeads) return;
    // if the selectedPosTeamLeads is not clicked, set the selectedPosTeamLeads to the clicked index

    const temp = [...posArrayTeamLeads];
    //get element at index and put it in the center
    const selectedElement = temp.splice(index, 1);
    temp.splice(temp.length / 2, 0, selectedElement[0]);
    setSelectedPosTeamLeads(Math.floor(temp.length - 1) / 2);
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
  

  const Mentors = [
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
      name: 'UI/UX Lead',
      content: '"I am silently judging your font choice."',
      key: '1',
    },
    {
      image: '/sahil_sandhu.webp',
      image1: '/sahil_sandhu_white.webp',
      id: 'Sahilsher Singh',
      insta: 'https://media.tenor.com/e-OsuDsXxgEAAAAd/nouns-dao.gif',
      instahandle: 'Instagram',
      linkedin: 'https://www.linkedin.com/in/sahilsher-singh/',
      Linkedinhandle: ' Sahilsher Singh',
      github: 'https://github.com/Sandhu-Sahil',
      githubhandle: 'Sandhu-Sahil',
      discord: 'http://discordapp.com/users/Sahil Sandhu#5673',
      discordhandle: 'Sahil Sandhu#5673',
      content:
        "Who cares? I mean, it's sort of exciting, isn't it? Breaking the rules.",
      name: 'Technical Lead',
      key: '2',
    },
    {
      image: '/shivangi.webp', //
      image1: '/shivangi_white.webp', //
      id: 'Shivangi Suyash',
      insta: 'https://instagram.com/mid.nightmemories10',
      instahandle: '@mid.nightmemories10',
      github: 'https://github.com/Shivangi10-10',
      githubhandle: 'Shivangi10-10',
      discord: 'http://discordapp.com/users/shivangi_suyash',
      discordhandle: 'shivangi_suyash',
      linkedin: 'https://www.linkedin.com/in/shivangi-suyash-05a484259',
      Linkedinhandle: 'Shivangi Suyash',
      content:
        ' "The only way to do great work is to love what you do." - Steve Jobs',
      name: 'Community Lead',
      key: '3',
    },
    {
      image: '/aryan.webp',
      image1: '/aryan_white.webp',
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
      name: 'Management & PR Lead',
      key: '4',
    },
    {
      image: '/parth.webp',
      image1: '/parth_white.webp',
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
      name: 'Social Media Lead',
      key: '5',
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
      name: 'Content Lead',
      key: '6',
    },

    {
      image: '/kanav.webp',
      image1: '/kanav_white.webp',
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
      name: 'Management & PR Lead   ',
      key: '7',
    },
    {
      image: '/tanay.webp',
      image1: '/tanay_white.webp',
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
      name: 'Technical Advisor',
      key: '8',
    },

    {
      image: '/vishesh.webp',
      image1: '/vishesh_white.webp',
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
      name: 'Web Dev Lead',
      key: '9',
    },
  ];

  const TeamLeads = [
    {
      image: '/samarpreet.webp',
      image1: '/samarpreet_white.webp',
      id: 'Samarpreet Singh',
      insta: 'https://www.instagram.com/sam_p_28',
      instahandle: 'sam_p_28',
      linkedin: 'https://www.linkedin.com/in/sun28',
      Linkedinhandle: 'Samarpeet Singh',
      github: 'https://github.com/Samar-28',
      githubhandle: 'Samar-28',
      discord: 'http://discordapp.com/users/sam28p',
      discordhandle: 'Sam_28',
      content: 'Crafting Digital Excellence, One Line of Code at a Time.',
      name: 'Technical Coordinator',
      key: '1',
    },
    {
      image: '/sunpreet.webp',
      image1: '/sunpreet_white.webp',
      id: 'Sunpreet Singh',
      insta: 'https://instagram.com/sunpreet_singh_28',
      instahandle: 'sunpreet_singh_28',
      linkedin: 'https://www.linkedin.com/in/sun28',
      Linkedinhandle: 'Sunpreet Singh',
      github: 'https://github.com/sun-28',
      githubhandle: 'sun-28',
      discord: 'http://discordapp.com/users/_sun_28',
      discordhandle: '_sun_28',
      content: `"Programming isn't about what you know; it's about what you can figure out." - Chris Pine`,
      name: 'Technical Lead',
      key: '2',
    },
    {
      image: '/jinendra.webp',
      image1: '/jinendra_white.webp',
      id: 'Jinendra Jain',
      insta: 'https://instagram.com/hattori.03',
      instahandle: 'hattori.03',
      linkedin: 'https://www.linkedin.com/in/jjinendra3/',
      Linkedinhandle: 'Jinendra  Jain',
      github: 'hhttps://github.com/jjinendra3',
      githubhandle: 'jjinendra3',
      discord: 'http://discordapp.com/users/jim_k_schrute',
      discordhandle: 'jim_k_schrute',
      content: "Code is like humour. If you have to explain it, it's bad",
      name: 'Community Lead',
      key: '3',
    },
    {
      image: '/khushi.webp',
      image1: '/khushi_white.webp',
      id: 'Khushi Agarwal',
      insta: 'https://instagram.com/khushi_agarwal_?igshid=OGQ5ZDc2ODk2ZA==',
      instahandle: 'Khushi_agarwal_',
      linkedin:
        'https://www.linkedin.com/in/khushi-agarwal-61634124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      Linkedinhandle: 'Khushi Agarwal',
      github: 'https://github.com/KhushiAgarwal-01',
      githubhandle: 'KhushiAgarwal-01',
      discord: 'http://discordapp.com/users/Khushi2387',
      discordhandle: 'Khushi Agarwal#0157',
      content: 'Nothing can dim the light that shines from within',
      name: 'Management & PR Lead',
      key: '4',
    },
    {
      image: '/sahil_bansal.webp',
      image1: '/sahil_bansal_white.webp',
      id: 'Sahil Bansal',
      insta:
        'https://instagram.com/sahil_0810?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
      instahandle: 'sahil_0810',
      linkedin:
        'https://www.linkedin.com/in/sahil-bansal-22321224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      Linkedinhandle: 'Sahil Bansal',
      github: 'https://github.com/Sahill0810',
      githubhandle: ' sahill0810',
      discord:
        'https://discord.com/channels/1165930677368262678/1165930677368262681',
      discordhandle: 'sahil_0810',
      content: `A young and dynamic person who has an eye for keen management tactics, and with apt interpersonal communication skills.`,
      name: 'Management & PR Lead',
      key: '5',
    },
    {
      image: '/rishita.webp',
      image1: '/rishita_white.webp',
      id: 'Rishita Singh',
      insta: 'https://www.instagram.com/rishitasingh.18/',
      instahandle: 'rishitasingh.18',
      linkedin: 'https://www.linkedin.com/in/rishita-singh-3b139a259',
      Linkedinhandle: 'Rishita Singh',
      github: 'https://github.com/rishitas18',
      githubhandle: 'rishitas18',
      discord: 'https://discord.com/channels/@rishita.18',
      discordhandle: 'rishita.18',
      content:
        'Either write something worth reading or do something worth writing ',
      name: 'Content Lead',
      key: '6',
    },
    {
      image: '/samarth.webp',
      image1: '/samarth_white.webp',
      id: 'Samarth Narayan',
      insta: 'https://instagram.com/samarth123_',
      instahandle: 'samarth123_',
      linkedin: 'https://www.linkedin.com/in/samarth-narayan-4a4998250',
      Linkedinhandle: 'Samarth Narayan',
      github: 'https://github.com/samarth-5',
      githubhandle: 'samarth-5',
      discord: 'https://discordapp.com/users/957355819538735196',
      discordhandle: 'samarth_5_',
      content:
        "I'm a frontend developer transitioning to full-stack & mastering Java-based Data Structures & Algorithms (DSA).",
      name: 'Web Lead',
      key: '7',
    },
    {
      image: '/harsh.webp',
      image1: '/harsh_white.webp',
      id: 'Harsh Kumawat',
      insta: 'https://instagram.com/harshk04/',
      instahandle: 'harshk04',
      linkedin: 'https://www.linkedin.com/in/harsh-kumawat-069bb324b/',
      Linkedinhandle: 'Harsh Kumawat',
      github: 'https://github.com/harshk04',
      githubhandle: 'harshk04',
      discord: 'https://discordapp.com/users/harshk04',
      discordhandle: 'harshk04',
      content:
        'Fascinated by learning since it is something that requires ardent pursuit and diligent attention.',
      name: 'AI/ML Lead',
      key: '8',
    },
    {
      image: '/anmol.webp',
      image1: '/anmol_white.webp',
      id: 'Anmol Dhuwalia',
      insta: 'https://www.instagram.com/anmoxll/',
      instahandle: 'anmoxll',
      linkedin: 'www.linkedin.com/in/anmol-dhuwalia',
      Linkedinhandle: 'Anmol Dhuwalia',
      github: 'https://github.com/anmoldhuwalia',
      githubhandle: 'anmoldhuwalia',
      discord: 'https://discord.com/channels/953524336784982038',
      discordhandle: 'Andhu',
      content:"Hello, I'm Anmol Dhuwalia, and I'm thrilled to be the social media and design enthusiast at our GDSC Hub. ",
      name: 'Social Media Lead',
      key: '9',
    },
  ];

  const CoreTeam = [
  // sample object for reference | remove this object before deployment
  //   {
  //   image: '/image.webp',
  //   image1: '/image2.webp',
  //   id: 'Vaibhav Katariya',
  //   insta: 'https://www.instagram.com/acevaibhav/',
  //   instahandle: 'acevaibhav',
  //   linkedin: 'https://www.linkedin.com/in/vaibhavkatariyaa',
  //   Linkedinhandle: 'Vaibhav katariya',
  //   github: 'https://github.com/VaibhavKatariya',
  //   githubhandle: 'VaibhavKatariya',
  //   discord: 'http://discordapp.com/users/kaily2005',
  //   discordhandle: 'Kaily2005',
  //   content: 'added',
  //   name: 'Full Stack Dev              ',
  //   key: '1',
  // },
]

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
                              >
                                <FaInstagram className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]?.insta
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
                              >
                                <FaLinkedin className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
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
                              >
                                <FaGithub className="gfg-div" />
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.github
                                }
                                display={'inline'}
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
                              >
                                <FaDiscord className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.discord
                                }
                                display={'inline'}
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
                              cursor: "pointer",
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
                              cursor: "pointer",
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
                        {/* <VStack
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
                              cursor: "pointer",
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
                        </VStack> */}
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
