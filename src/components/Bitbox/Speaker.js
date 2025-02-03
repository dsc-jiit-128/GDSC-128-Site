import {
  GridItem,
  Grid,
  Image,
  Text,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import '../../css/Sponsors.css';
export default function Speaker() {
  return (
    <>
      <Box margin={'50px'} mt={{ base: '0vw', md: '3vw' }}>
        <Text
          fontSize={{ base: '8vw', md: '6xl' }}
          align="center"
          margin="auto"
          marginTop={'117px'}
          color="white"
        >
          Speakers
        </Text>
        <Grid
          templateColumns="repeat(2, 0fr)"
          gap={0}
          size={'150%'}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{ base: 'auto', md: '310px' }}
          mr={{ base: 'auto', md: '310px' }}
          mt={{ base: '3vw', md: '3vw' }}
          style={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            display={'flex'}
            justifyContent={'center'}
            borderRadius={{ base: '5px', md: '20px' }}
            overflow={'hidden'}
            
            >
            <a href="https://www.linkedin.com/in/#/" target="_blank">
              <Image
                src="https://avatars.githubusercontent.com/u/11613311?v=4"
                alt="Demo Name 1"
                margin="auto"
                position={'relative'}

                filter={'blur(20px)'}
              />
            </a>
          </GridItem>
           <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '3vw', md: '2xl' }}
          filter={'blur(5px)'}
          >
          Hitesh Choudhary
          </Text>
          <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '1vw', md: 'l' }}
          filter={'blur(5px)'}
          > 
          CTO @ iNeuron.Ai
        </Text>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            display={'flex'}
            justifyContent={'center'}
            borderRadius={{ base: '5px', md: '20px' }}
            overflow={'hidden'}
            >
            <a href="https://www.linkedin.com/in/#/" target="_blank">
              <Image
                src="https://media.licdn.com/dms/image/v2/C4D03AQGFTnOaQa4fUQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1623400654607?e=2147483647&v=beta&t=Dbw-wAPI94paWJMLjKOo2gFas-v9suBYv3335jRSGiM"
                alt="Demo Name 1"
                margin="auto"
                position={'relative'}
                objectFit={'cover'}
                filter={'blur(20px)'}
                height={'100%'}
              />
            </a>
          </GridItem>
           <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '3vw', md: '2xl' }}
          filter={'blur(5px)'}
          >
          Raj Vikramaditya
          </Text>
          <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '1vw', md: 'l' }}
          filter={'blur(5px)'}
          > 
          SDE @ Google
        </Text>
      </div>
        </Grid>
       
      </Box>
    </>
  );
}
