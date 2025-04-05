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
      github: 'https://github.com/jjinendra3',
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
      name: 'Management & PR Lead      ',
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
      content:
        "Hello, I'm Anmol Dhuwalia, and I'm thrilled to be the social media and design enthusiast at our GDG Hub. ",
      name: 'Social Media Lead',
      key: '9',
    },
  ];

  const CoreTeam = [
    {
      image: '/CT2425/krishh.png',
      image1: '/CT2425/krishh.png',
      id: 'Krrish Sehgal',
      insta: 'https://www.instagram.com/krrish__sehgal/',
      instahandle: 'krrish__sehgal',
      linkedin: 'https://www.linkedin.com/in/krrish-sehgal-5a268b24b',
      Linkedinhandle: 'Krrish Sehgal',
      github: 'https://github.com/krrish-sehgal',
      githubhandle: 'krrish-sehgal',
      discord: 'https://discord.com/users/krrish__sehgal',
      discordhandle: 'krrish__sehgal',
      content: 'Ones and Zeroes , Never disappoint',
      name: 'Tech',
      key: '1',
    },
    {
      image: '/CT2425/shaurya.png',
      image1: '/CT2425/shaurya.png',
      id: 'Shaurya Rahlon',
      insta: 'https://www.instagram.com/sh4urya.r/',
      instahandle: 'sh4urya.r',
      linkedin: 'https://www.linkedin.com/in/shaurya-rahlon/',
      Linkedinhandle: 'Shaurya Rahlon',
      github: 'https://github.com/ShauryaRahlon',
      githubhandle: 'ShauryaRahlon',
      discord: 'https://discord.com/users/jimmy32_',
      discordhandle: 'jimmy32_',
      content: 'A passionate coder and a part time debater.',
      name: 'Tech',
      key: '2',
    },
    {
      image: '/CT2425/vaibhav.png',
      image1: '/CT2425/vaibhav.png',
      id: 'Vaibhav Katariya',
      insta: 'https://www.instagram.com/acevaibhav/',
      instahandle: 'acevaibhav',
      linkedin: 'https://www.linkedin.com/in/vaibhavkatariyaa',
      Linkedinhandle: 'Vaibhav katariya',
      github: 'https://github.com/VaibhavKatariya',
      githubhandle: 'VaibhavKatariya',
      discord: 'https://discord.com/users/vaibhavkatariyaa',
      discordhandle: 'VaibhavKatariyaa',
      content: "Trust me, I'm a software engineer ^_^",
      name: 'Tech',
      key: '3',
    },
    {
      image: '/CT2425/mrigank.png',
      image1: '/CT2425/mrigank.png',
      id: 'Mrigank Rai',
      insta: 'https://www.instagram.com/mrigankrai05/',
      instahandle: 'mrigankrai05',
      linkedin: 'https://www.linkedin.com/in/mrigank-rai-8b39a130a',
      Linkedinhandle: 'Mrigank Rai',
      github: 'https://github.com/mrigankrai05',
      githubhandle: 'mrigankrai05',
      discord: 'https://discord.com/users/805817094418726962',
      discordhandle: 'Mrigank Rai',
      content:
        'A highly motivated Computer Science and Engineering student with a strong passion for developing applications that simplify tasks and enhance productivity.',
      name: 'Web Development',
      key: '4',
    },
    {
      image: '/CT2425/shaksham.png',
      image1: '/CT2425/shaksham.png',
      id: 'Saksham Chawla',
      insta: 'https://www.instagram.com/isaksham02/',
      instahandle: 'isaksham02',
      linkedin: 'https://www.linkedin.com/in/saksham-chawla-b1b128253/',
      Linkedinhandle: 'Saksham Chawla',
      github: 'https://github.com/chawlasaksham',
      githubhandle: 'chawlasaksham',
      discord: 'https://discord.com/users/gpva6nu5',
      discordhandle: 'Saksham',
      content:
        'The only way to do great work is to love what you do. ~ Steve Jobs',
      name: 'Tech',
      key: '5',
    },
    {
      image: '/CT2425/Himanshu.png',
      image1: '/CT2425/Himanshu.png',
      id: 'Himanshu Singh',
      insta: 'https://www.instagram.com/himaansh_uu/',
      instahandle: 'himaansh_uu',
      linkedin: 'https://www.linkedin.com/in/himaansh-uu/',
      Linkedinhandle: 'Himanshu Singh',
      github: 'https://github.com/Himaanshuuuu04',
      githubhandle: 'Himaanshuuuu04',
      discord: 'https://discord.com/users/impressridible',
      discordhandle: 'Himanshu',
      content: 'Always building, always learning...',
      name: 'Tech',
      key: '6',
    },
    {
      image: '/CT2425/lakshya.png',
      image1: '/CT2425/lakshya.png',
      id: 'Lakshya Jain',
      insta: 'https://www.instagram.com/lakshyajain272/',
      instahandle: 'lakshyajain272',
      linkedin: 'https://www.linkedin.com/in/lakshya-jain-17876618b/',
      Linkedinhandle: 'Lakshya Jain',
      github: 'https://github.com/Lakshya272',
      githubhandle: 'Lakshya272',
      discord: 'https://discord.com/users/lakshyajain272',
      discordhandle: 'lakshyajain272',
      content: 'Fueled by a love for learning and a drive to create',
      name: 'Tech',
      key: '7',
    },
    {
      image: '/CT2425/piyush.png',
      image1: '/CT2425/piyush.png',
      id: 'Piyush Poddar',
      insta: 'https://www.instagram.com/piyush26824/',
      instahandle: 'piyush26824',
      linkedin: 'https://www.linkedin.com/in/piyush-poddar-69246a288/',
      Linkedinhandle: 'Piyush Poddar',
      github: 'https://github.com/piyush-poddar',
      githubhandle: 'piyush-poddar',
      discord: 'https://discord.com/users/piyushpoddar',
      discordhandle: 'piyushpoddar',
      content:
        'I am an AI/ML enthusiast, 2x hackathon winner, and passionate tech innovator.',
      name: 'Tech',
      key: '8',
    },
    {
      image: '/CT2425/rohan.png',
      image1: '/CT2425/rohan.png',
      id: 'Rohan Gupta',
      insta: 'https://www.instagram.com/rohannnn.26/',
      instahandle: 'rohannnn.26',
      linkedin: 'https://www.linkedin.com/in/rohan-gupta-457a72207/',
      Linkedinhandle: 'Rohan Gupta',
      github: 'https://github.com/Rohannnn26',
      githubhandle: 'Rohannnn26',
      discord: 'https://discord.com/users/858906550080110623',
      discordhandle: 'Rohan',
      content: 'Passionate about decoding patterns and making machines think!',
      name: 'Tech',
      key: '9',
    },
    {
      image: '/CT2425/vansh.png',
      image1: '/CT2425/vansh.png',
      id: 'Vansh',
      insta: 'https://www.instagram.com/vansharora1293/',
      instahandle: 'vansharora1293',
      linkedin: 'https://www.linkedin.com/in/vansh-arora-52a0ab2a7/',
      Linkedinhandle: 'Vansh Arora',
      github: 'https://github.com/vansh1293',
      githubhandle: 'vansh1293',
      discord: 'https://discord.com/users/1110781289180704788',
      discordhandle: 'Vansh',
      content: 'Building the future,one line of code at a time',
      name: 'Tech',
      key: '10',
    },
    {
      image: '/CT2425/akarsha.png',
      image1: '/CT2425/akarsha.png',
      id: 'Akarsha Agarwal',
      insta: 'https://www.instagram.com/akarsha1662/',
      instahandle: 'akarsha1662',
      linkedin: 'https://www.linkedin.com/in/akarsha-agarwal/',
      Linkedinhandle: 'Akarsha Agarwal',
      github: 'https://github.com/Ak-arsha',
      githubhandle: 'Ak-arsha',
      discord: 'https://discord.com/users/akarsha_',
      discordhandle: 'Akarsha',
      content:
        'Transforming logic into code and ideas into intelligence. Always building, always learning!',
      name: 'Tech',
      key: '11',
    },
    {
      image: '/CT2425/atul.png',
      image1: '/CT2425/atul.png',
      id: 'Atul Sharma',
      insta: 'https://www.instagram.com/apotropaic_007/',
      instahandle: 'apotropaic_007',
      linkedin: 'https://www.linkedin.com/in/atul-sharma-740478284/',
      Linkedinhandle: 'Atul Sharma',
      github: 'https://github.com/AtulSharma05',
      githubhandle: 'AtulSharma05',
      discord: 'https://discord.com/users/rEFkWuBv',
      discordhandle: 'Atul',
      content:
        'Bridging creativity and technology—building, designing, and innovating one step at a time of',
      name: 'Management',
      key: '12',
    },
    {
      image: '/CT2425/aadhya.png',
      image1: '/CT2425/aadhya.png',
      id: 'Aadhya Gupta',
      insta: 'https://www.instagram.com/__aadhya__/',
      instahandle: '__aadhya__',
      linkedin: 'https://www.linkedin.com/in/aadhya-gupta-53027a343/',
      Linkedinhandle: 'Aadhya Gupta',
      github: 'https://github.com/aadhya04',
      githubhandle: 'aadhya04',
      discord: 'https://discord.com/users/aadhya3358',
      discordhandle: 'aadhya3358',
      content:
        '"The secret to good management? Coffee, patience, and the ability to smile through chaos."',
      name: 'Management',
      key: '13',
    },
    {
      image: '/CT2425/arman.png',
      image1: '/CT2425/arman.png',
      id: 'Arman Gupta',
      insta: 'https://www.instagram.com/arman_gupta_08/',
      instahandle: 'arman_gupta_08',
      linkedin: 'https://www.linkedin.com/in/arman-gupta-a3ba94281/',
      Linkedinhandle: 'Arman Gupta',
      github: 'https://github.com/armangupta18',
      githubhandle: 'armangupta18',
      discord: 'https://discord.com/users/arman_gupta',
      discordhandle: 'Arman',
      content:
        'Code, Create, Conquer – because every great innovation starts with a single line.',
      name: 'Management',
      key: '14',
    },
    {
      image: '/CT2425/palak.png',
      image1: '/CT2425/palak.png',
      id: 'Palak Mathur',
      insta: 'https://www.instagram.com/_jely._/',
      instahandle: '_jely._',
      linkedin: 'https://www.linkedin.com/in/palak-mathur-460a41284/',
      Linkedinhandle: 'Palak Mathur',
      github: 'https://github.com/Palak2811',
      githubhandle: 'Palak2811',
      discord: 'https://discord.com/users/786813711024652319',
      discordhandle: 'Palak',
      content:
        'Managing projects, people, and my love for turning ideas into action and acing productivity',
      name: 'Management',
      key: '15',
    },
    {
      image: '/CT2425/ayushi.png',
      image1: '/CT2425/ayushi.png',
      id: 'Ayushi Dahiya',
      insta: 'https://www.instagram.com/ayushi.ed/',
      instahandle: 'ayushi.ed',
      linkedin: 'https://www.linkedin.com/in/ayushi-dahiya-6456082b1/',
      Linkedinhandle: 'Ayushi Dahiya',
      github: 'https://github.com/Ayushi-dahiya',
      githubhandle: 'Ayushi-dahiya',
      discord: 'https://discord.com/users/ayushidahiya0058446',
      discordhandle: 'Ayushi',
      content:
        'Mastering moments, shaping narratives , and engineering success with vision and resilience.',
      name: 'Management and PR',
      key: '16',
    },
    {
      image: '/CT2425/gunaj.png',
      image1: '/CT2425/gunaj.png',
      id: 'Gunaj Chugh',
      insta: 'https://www.instagram.com/gunaj_005/',
      instahandle: 'gunaj_005',
      linkedin: 'https://www.linkedin.com/in/gunnaj/',
      Linkedinhandle: 'Gunaj Chugh',
      github: 'https://github.com/Gunaj0517',
      githubhandle: 'Gunaj0517',
      discord: 'https://discord.com/users/761294903119577159',
      discordhandle: 'Gunaj',
      content: 'Optimistic by nature, serious when needed, and fun by choice!',
      name: 'PR AND MANAGEMENT',
      key: '17',
    },
    {
      image: '/CT2425/rashi.png',
      image1: '/CT2425/rashi.png',
      id: 'Rashi Dwivedi',
      insta: 'https://www.instagram.com/_.rashidwivedi._/',
      instahandle: '_.rashidwivedi._',
      linkedin: 'https://www.linkedin.com/in/rashi-dwivedi-796032339/',
      Linkedinhandle: 'Rashi Dwivedi',
      github: 'https://github.com/Rashi-Dwivedi1812',
      githubhandle: 'Rashi-Dwivedi1812',
      discord: 'https://discord.com/users/rashidwivedi',
      discordhandle: 'Rashi',
      content: 'Fueled by algorithms, driven by passion.',
      name: 'Social Media',
      key: '18',
    },
    {
      image: '/CT2425/ananya.png',
      image1: '/CT2425/ananya.png',
      id: 'Ananya Goel',
      insta: 'https://www.instagram.com/ananyag._19/',
      instahandle: 'ananyag._19',
      linkedin: 'https://www.linkedin.com/in/ananya-goel-a454a02a4/',
      Linkedinhandle: 'Ananya Goel',
      github: 'https://github.com/Ananyag19',
      githubhandle: 'Ananyag19',
      discord: 'https://discord.com/users/ananya06873',
      discordhandle: 'Ananya',
      content: 'Blending tech and creativity—one pixel at a time',
      name: 'Social media',
      key: '19',
    },
    {
      image: '/CT2425/devanshi.png',
      image1: '/CT2425/devanshi.png',
      id: 'Devanshi Srivastava',
      insta: 'https://www.instagram.com/__.de_waah.___/',
      instahandle: '__.de_waah.___',
      linkedin: 'https://www.linkedin.com/in/devanshi-srivastava-4352a6281/',
      Linkedinhandle: 'Devanshi Srivastava',
      github: 'https://github.com/Day-waah',
      githubhandle: 'Day-waah',
      discord: 'https://discord.com/users/devanshi',
      discordhandle: 'Devanshi',
      content: 'passive',
      name: 'UI/UX',
      key: '20',
    },
    {
      image: '/CT2425/divyansh.png',
      image1: '/CT2425/divyansh.png',
      id: 'Divyansh Singh',
      insta: 'https://www.instagram.com/singh_div_45/',
      instahandle: 'singh_div_45',
      linkedin: 'https://www.linkedin.com/in/divyansh-singh-61aa02284/',
      Linkedinhandle: 'Divyansh Singh',
      github: 'https://github.com/Divgithub045',
      githubhandle: 'Divgithub045',
      discord: 'https://discord.com/users/4sWv3kRF',
      discordhandle: 'Divyansh',
      content: 'crafting designing and developing',
      name: 'UI/UX',
      key: '21',
    },
    {
      image: '/CT2425/himanshi.png',
      image1: '/CT2425/himanshi.png',
      id: 'Himanshi Arora',
      insta: 'https://www.instagram.com/himsss_112006/',
      instahandle: 'himsss_112006',
      linkedin: 'https://www.linkedin.com/in/himanshi-arora-317a292b9/',
      Linkedinhandle: 'Himanshi Arora',
      github: '',
      githubhandle: '',
      discord: 'https://discord.com/users/himanshia2006',
      discordhandle: 'Himanshi',
      content:
        'UI/UX newbie, video editing enthusiast, and part-time coder. Currently surviving JIIT 128',
      name: 'UI/UX',
      key: '22',
    },
    {
      image: '/CT2425/tanisha.png',
      image1: '/CT2425/tanisha.png',
      id: 'Tanisha Srivastava',
      insta: 'https://www.instagram.com/tanisha_685/',
      instahandle: 'tanisha_685',
      linkedin: 'https://www.linkedin.com/in/tanisha-srivastava-401825302/',
      Linkedinhandle: 'Tanisha Srivastava',
      github: 'https://github.com/tanisha685',
      githubhandle: 'tanisha685',
      discord: 'https://discord.com/users/tanisha_6852699',
      discordhandle: 'Tanisha',
      content: 'Curious learner, exploring knowledge and growing every day.',
      name: 'UI/UX',
      key: '23',
    },
    {
      image: '/CT2425/krishnika.png',
      image1: '/CT2425/krishnika.png',
      id: 'Krishnika Goel',
      insta: 'https://www.instagram.com/krishnikagoel/',
      instahandle: 'krishnikagoel',
      linkedin: 'https://www.linkedin.com/in/krishnika-goel-796300246/',
      Linkedinhandle: 'Krishnika Goel',
      github: 'https://github.com/Kriso10',
      githubhandle: 'Kriso10',
      discord: 'https://discord.com/users/krishnika',
      discordhandle: 'Krishnika',
      content:
        'One tab coding, one tab shopping, and zero tabs open for drama.',
      name: 'UI/UX',
      key: '24',
    },
    {
      image: '/CT2425/mradul.png',
      image1: '/CT2425/mradul.png',
      id: 'Mradul Jain',
      insta: 'https://www.instagram.com/mradul_jain_28/',
      instahandle: 'mradul_jain_28',
      linkedin: 'https://www.linkedin.com/in/mradul-jain-1a90b8220/',
      Linkedinhandle: 'Mradul Jain',
      github: 'https://github.com/Mradul28',
      githubhandle: 'Mradul28',
      discord: 'https://discord.com/users/MradulOP',
      discordhandle: 'Mradul',
      content: 'Crafting beautiful environments with precision always',
      name: 'UI/UX',
      key: '25',
    },
    {
      image: '/CT2425/aditi.png',
      image1: '/CT2425/aditi.png',
      id: 'Aditi Kansal',
      insta: 'https://www.instagram.com/aditikansal_/',
      instahandle: 'aditikansal_',
      linkedin: 'https://www.linkedin.com/in/aditi-kansal-37b09a314',
      Linkedinhandle: 'Aditi Kansal',
      github: 'https://github.com/aditikansal01',
      githubhandle: 'aditikansal01',
      discord: 'https://discord.com/users/01aditi',
      discordhandle: '01aditi',
      content: 'Building tech, crafting content, and managing events — because impact needs all three',
      name: 'Content',
      key: '26',
    }
    
  ];

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
                                target='_blank'
                              >
                                <FaInstagram className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]?.insta
                                }
                                display={'inline'}
                                target='_blank'
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
                                target='_blank'
                              >
                                <FaLinkedin className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.linkedin
                                }
                                display={'inline'}
                                target='_blank'
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
                                target='_blank'
                              >
                                <FaGithub className="gfg-div" />
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.github
                                }
                                display={'inline'}
                                target='_blank'
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
                                target='_blank'
                              >
                                <FaDiscord className="gfg-div" />{' '}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.discord
                                }
                                display={'inline'}
                                target='_blank'
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
