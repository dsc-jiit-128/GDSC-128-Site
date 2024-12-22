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
          <div style={{display:'flex',flexDirection:'column'}}>

          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            display={'flex'}
            justifyContent={'center'}
            >
            <a href="https://www.linkedin.com/in/#/" target="_blank">
              <Image
                src="/placeholder.jpeg"
                alt="Demo Name 1"
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
          John Doe
          </Text>
          <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '1vw', md: 'l' }}
          > 
          SDE 1 @ Google
        </Text>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://www.linkedin.com/in/#/" target="_blank">
              <Image
                src="/placeholder.jpeg"
                alt="Demo Name 2"
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
          Jane Doe
          </Text>
          <Text
          align="center"
          margin="auto"
          marginTop={'10px'}
          color="white"
          fontSize={{ base: '1vw', md: 'l' }}
          > 
          SDE 2 @ Microsoft
        </Text>
          </div>
        </Grid>
       
      </Box>
    </>
  );
}
