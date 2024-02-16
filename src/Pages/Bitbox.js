import { VStack } from '@chakra-ui/react';
import {
  GridItem,
  SimpleGrid,
  Grid,
  Image,
  Text,
  Flex,
  Link,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import Nav from '../components/navbar';
import Head from '../components/heading';
import { useEffect } from 'react';
import Timer from '../components/Bitbox/TimerCard';
import Video from '../components/Bitbox/Video';
import Sponsors from '../components/Bitbox/Sponsors';
import FAQ from '../components/Bitbox/FAQ';
import '../css/bitbox.css';
import Timeline from '../components/Bitbox/Timeline';
import SDGs from '../components/Bitbox/sdg';
import ThreeTierPricing from '../components/Bitbox/Prizes';
import Speaker from '../components/Bitbox/Speaker';
const isMobile = window.innerWidth <= 500;

const TimerCard = ({ type, number }) => {
  return (
    <Box px={6} py={2} borderRadius="3xl" border={'3px solid #FFF'}>
      <Text fontSize={30} fontFamily={'Gilroy-Bold'} color="white">
        {type}
      </Text>
      <Text
        fontSize={160}
        fontWeight="bold"
        fontFamily={'BebasNeue-Regular'}
        color="white"
        lineHeight={1}
      >
        {number}
      </Text>
    </Box>
  );
};

export default function Bitbox() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  const inputRef = React.useRef(null);
  //Date 20 days 2 hours 5 minutes 30 seconds in future
  const [date, setDate] = React.useState(new Date("2024-03-01"));
  useEffect(() => {
    setTimeout(() => {
      if (inputRef) {
        //simulate mouseDown
        const mouseDown = new MouseEvent('mousedown', {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: 100,
          clientY: 100,
        });
        inputRef.current.dispatchEvent(mouseDown);
        //simulate mouseUp after 1 second
        setTimeout(() => {
          const mouseUp = new MouseEvent('mouseup', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 100,
            clientY: 100,
          });
          inputRef.current.dispatchEvent(mouseUp);
        }, 1000);
      }
    }, 100);
  }, [inputRef]);
  var da = window.innerWidth;
  if (da > 850) {
    return (
      <Box
        bgColor={'#161515'}
        height={'100%'}
        minH="100vh"
        m={0}
        margin={0}
        overflowX="hidden"
        pos={'relative'}
      >
        <Box className="desktop">
          <div
            id="magic"
            ref={inputRef}
            style={{
              position: 'absolute',
              top: '0',
              zIndex: '0',
              width: '100vw',
              height: '200vh',
            }}
          ></div>

         { <Image src="/frontBg.svg" w={'100%'} />}
          <Box pos={'absolute'} top={'0'} zIndex={'1'} w={'100%'}>
            <Nav />
            <Box>
              <Head />
            </Box>
          </Box>
          <VStack w={'100%'} mt={-30}>
            <HStack
              w={'100%'}
              p={10}
              spacing={10}
              bg={
                'linear-gradient(93.71deg, rgba(255, 0, 0, 0.05) 0%, rgba(255, 168, 0, 0.05) 34.2%, rgba(15, 157, 88, 0.05) 69.62%, rgba(66, 133, 244, 0.05) 100%);'
              }
            >
              <Timer futureDate={date} />
              <Text
                fontSize={26}
                fontFamily={'Gilroy-Regular'}
                color="white"
                pl={10}
              >
                <i
                  style={{
                    color: '#0F9D58',
                  }}
                >
                </i>
                <br></br>
                {'if (sad() === true) {'}
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                {'   sad.stop();'}
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                {'   beAwesome(); '}
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                {'   initiateCountDown(); '}
                <br></br>
                {'}'}
              </Text>
            </HStack>
            <Box mt='20vh' h={28}></Box>
            <Box  align='center' textAlign='center' display='flex' justifyContent='center'  zIndex="100">
            <div 
              class="apply-button" 
              data-hackathon-slug="bitbox-4-gfc5hyh" 
              data-button-theme="light"
            style={{width: '100%', height: '100%',pointerEvents: "none",display:"none",marginTop:'20px'}}
            ></div>
          </Box>
          </VStack>
            
          <Video />
          <ThreeTierPricing/>
          <Timeline/>
          <SDGs/>
          <Speaker/>
          <Sponsors />
          
         
          <FAQ />
        </Box>
      </Box>
    );
  }
  else
  {
    return (
      <>
      <Box
        bgColor={'#161515'}
        height={'100%'}
        minH="100vh"
        m={0}
        margin={0}
        overflowX="hidden"
        pos={'relative'}
      >
        <Box className="desktop">
          <div
            // id="magic"
            ref={inputRef}
            style={{
              position: 'absolute',
              top: '0',
              zIndex: '0',
              width: '100vw',
              height: '200vh',
            }}
          ></div>

          <Image src="/frontBg.svg" w={'100%'} />
          <Box pos={'absolute'} top={'0'} zIndex={'1'} w={'100%'}>
            <Nav />
            <Box>
              <Head />
            </Box>
          </Box>
          <Image src='/Group 23.png' w={'70%'} mt="-48vw" ml={'auto'} mr='auto'/>
          <VStack w={'100%'} mt={{base:'20vw', md:-30}}>
            <HStack
              w={'100%'}
              p={10}
              spacing={1}
              bg={
                'linear-gradient(93.71deg, rgba(255, 0, 0, 0.05) 0%, rgba(255, 168, 0, 0.05) 34.2%, rgba(15, 157, 88, 0.05) 69.62%, rgba(66, 133, 244, 0.05) 100%);'
              }
            >
              <Timer futureDate={date} />
              <Text
                fontSize={{base:'2vw', md:15}}
                fontFamily={'Gilroy-Regular'}
                color="white"
                pl={{base:5, md:10}}
              >
                <i
                  style={{
                    color: '#0F9D58',
                  }}
                >
                
                </i>
                <br></br>
                {'if (sad() === true) {'}
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                {'   sad.stop();'}
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                {'   beAwesome(); '}
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                {'   initiateCountDown(); '}
                <br></br>
                {'}'}
              </Text>
            </HStack>
          </VStack>
             <Box align='center' textAlign='center' display='flex' justifyContent='center' mt='50' zIndex="100" position="relative">
            
              <div 
                class="apply-button" 
                data-hackathon-slug="bitbox-4-gfc5hyh" 
                data-button-theme="light"
              style={{width: '100%', height: '100%', zIndex:"100",pointerEvents: "none",display:"none",marginTop:'20px'}}
                
              ></div>
            </Box>
          <Video />
          <ThreeTierPricing/>

          <Box>
                  <Timeline/>

          </Box>
          <SDGs/>
          <Sponsors />

          
          <FAQ />
     </Box>
     </Box>
     </>
    );
  }
}
