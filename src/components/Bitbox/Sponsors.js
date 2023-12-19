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
    grid
    
  } from '@chakra-ui/react';
import React from 'react'
import '../../css/Sponsors.css'
export default function Sponsors() {
    return (
      <>
             <Box margin={'50px'} mt={{base: '0vw', md:'3vw'}}>
        <Text fontSize={{base:'8vw', md:'6xl'}} align="center"  margin = 'auto' marginTop={'120px'} color='white'>
          Title Sponsors
        </Text>
        <Grid
          templateColumns="repeat(2, 0fr)"
          gap={0}
          size={'150%'}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{base:'auto',md:'310px'}}
          mr={{base:'auto',md:'310px'}}
          mt={{base:'3vw',md:'3vw'}}
        
        >
          
          <GridItem
            w="20vw"
            h="20vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
        <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>
          <GridItem
            w="20vw"
            h="20vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>
          </Grid>
          <Text fontSize={{base:'6vw', md:'4xl'}} align="center"  margin = 'auto'
marginTop={8} 
color='white'>





{/* CO SPONSORS */}






          Co Sponsors
        </Text>
          <Grid
          templateColumns="repeat(4, 0fr)"
          gap={0}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{base:'auto',md:'310px'}}
          mr={{base:'auto',md:'310px'}}
          mt={{base:'3vw',md:'3vw'}}
          // w={'50vw'}
        >
          
          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
        <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>




</Grid>






















<Text fontSize={{base:'4vw', md:'3xl'}} align="center"  margin = 'auto' 
marginTop={8} 
color='white'>






{/* ASSOCIATE SPONSORS */}











          Associate Sponsors
        </Text>

          <Grid
          templateColumns="repeat(4, 0fr)"
          gap={0}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{base:'auto',md:'310px'}}
          mr={{base:'auto',md:'310px'}}
          mt={{base:'3vw',md:'3vw'}}
        
        >
        <GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >       
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>
        
        <GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>
               
          <GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>
          <GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>
          {/* <GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            // <a target="_blank" href='https://www.elearnmarkets.com/webinars/stock-market-for-everyone?aff_code=ELMAFF10953&utm_source=ELMAFF10953&utm_medium=affiliate'>
            // <Image src= "/elm.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            // </a>
            </GridItem> */}
            
        </Grid> 
   
      </Box>
         


      </>
    );
  }
  