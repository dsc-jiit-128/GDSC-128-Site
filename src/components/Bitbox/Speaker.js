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
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{display:'flex',flexDirection:'column'}}>

          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
            >
            <a href="https://www.linkedin.com/in/mahima-hans-3b9976155/" target="_blank">
              <Image
                src="/mahima.jpg"
                alt="Mahima Hans"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
           <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '3vw', md: '2xl' }}
          >
          Mahima Hans
          </Text>
          <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '1vw', md: 'l' }}
          > 
          SDE@Adobe | Ex-Microsoft
        </Text>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://www.linkedin.com/in/urvi-goel/" target="_blank">
              <Image
                src="/urvi.jpg"
                alt="Urvi Goel"
                margin="auto"
                position={'relative'}
              />
            </a>
           
          </GridItem>
          <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '3vw', md: '2xl' }}
          >
          Urvi Goel
          </Text>
          <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '1vw', md: 'l' }}
          > 
          SDE@Microsoft | Teacher@PW Skills
        </Text>
          </div>
        </Grid>
       
      </Box>
    </>
  );
}
