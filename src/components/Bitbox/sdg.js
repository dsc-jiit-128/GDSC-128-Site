import {
    GridItem,
    Grid,
    Image,
    Text,
    Box,    
  } from '@chakra-ui/react';
import React from 'react'
import '../../css/SDGs.css'
export default function SDGs() {
    return (
      <>
             <Box margin={'5px'} mt={{base: '0vw', md:'3vw'}}>
        <Text fontSize={{base:'8vw', md:'6xl'}} align="center"  margin = 'auto' marginTop={'120px'} color='white'>
          Project Themes
        </Text>
        
         <Grid
          templateColumns={{ base: "repeat(3, 0fr)", md: "repeat(6, 0fr)" }}
          gap={{base:'5px',md:'0px'}}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{base:'50px',md:'310px'}}
          mr={{base:'50px',md:'310px'}}
          mt={{base:'3vw',md:'3vw'}}
          // w={{base:'70%',md:'100%'}}
        >
          <GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            
            <a target="_blank" href='https://sdgs.un.org/goals/goal1'>
            <Image src= "/goal-01_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem>
          <GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            
            <a target="_blank" href='https://sdgs.un.org/goals/goal2'>
            <Image src= "/goal-02_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem>
          <GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            
            <a target="_blank" href='https://sdgs.un.org/goals/goal3'>
            <Image src= "/goal-03_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem>
          <GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal4'>
            <Image src= "/goal-04_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal5'>
            <Image src= "/goal-05_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal6'>
            <Image src= "/goal-06_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal7'>
            <Image src= "/goal-07_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal8'>
            <Image src= "/goal-08_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal9'>
            <Image src= "/goal-09_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal10'>
            <Image src= "/goal-10_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal11'>
            <Image src= "/goal-11_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal12'>
            <Image src= "/goal-12_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal13'>
            <Image src= "/goal-13_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal14'>
            <Image src= "/goal-14_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal15'>
            <Image src= "/goal-15_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
            </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal16'>
            <Image src= "/goal-16_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
            </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals/goal17'>
            <Image src= "/goal-17_480.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
            </GridItem><GridItem
            w={{base:"25vw", md: "13vw"}}
            h={{base:"25vw", md: "13vw"}}
            bg="#161515"
            border={'1px solid white'}
            className='SDG'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://sdgs.un.org/goals'>
            <Image src= "/ETC.png" w={{base:'100%',md:'60%'}} h={{base:'100%',md:'60%'}} className='image' margin='auto' position={'relative'}/>
            </a>
            </GridItem>
        </Grid> 
      </Box>
         


      </>
    );
  }
  