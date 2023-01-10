import { VStack } from '@chakra-ui/react'
import {
    GridItem,
    SimpleGrid,
    Grid,
    Image,
    Text,
    Flex,
    Link,
    Box,
    HStack
    
  } from '@chakra-ui/react';
import React from 'react'
import Nav from '../components/navbar';
import Head from '../components/heading';
import { useEffect } from 'react';
import Timer from '../components/Bitbox/TimerCard';

const TimerCard = ({type, number}) => {
    return <Box
        px={6}
        py={2}

        borderRadius="3xl"
        border={"3px solid #FFF"}
    >
        <Text
            fontSize={30}
            
            fontFamily={"Gilroy-Bold"}
            color="white"
        >
            {type}
        </Text>
        <Text
            fontSize={160}
            fontWeight="bold"
            fontFamily={"BebasNeue-Regular"}
            color="white"
            lineHeight={1}
        >
            {number}
        </Text>
    </Box>
}

export default function Bitbox() {
    const inputRef = React.useRef(null)
    //Date 20 days 2 hours 5 minutes 30 seconds in future
    const [date, setDate] = React.useState(new Date(1688808085000))
  useEffect(() => {
    setTimeout(() => {
      if(inputRef){
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
        }, 1000)
  
  
      }
    }, 100)
    
  }, [inputRef])
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

      <Image src="/bitbox/frontBg.svg" w={'100%'} />
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
              // life motto
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
    </Box>
  );
}
