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
          Sponsors
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
            w=""
            h=""
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://rosenfeldmedia.com/books/'>
            <Image src= "/rosenfeld.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem>
          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://gen.xyz/'>
            <Image src= "/xyzz.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://hoverrobotix.com/'>
            <Image src= "/robotix.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://thementorx.com/'>
            <Image src= "/MENTORx.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='#'>
            <Image src= "/revup.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://www.echo3d.com/'>
            <Image src= "/echo3D.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://www.axure.com/'>
            <Image src= "/axure.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://devfolio.co/'>
            <Image src= "/devfolio.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://www.wolfram.com/language/'>
            <Image src= "/wolf.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://www.digitalocean.com/'>
            <Image src= "/meta.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://www.interviewcake.com/'>
            <Image src= "/cake.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >            <a target="_blank" href='https://tezosindia.org.in/'>

            <Image src= "/tezos.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
        </a>  </GridItem><GridItem
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
            className='sponsor last'
            display={'flex'}
            justifyContent={'center'}
            alignItems='center'

            
            
          >
            <Text fontSize={'2vw'}  color = 'white' margin = '2vw'textAlign='center' className  = 'space'>And there's space for you too </Text>
            <Text fontSize={'2vw'}  color = 'white' margin = '2vw'textAlign='center' className ='us' display={'none'} >Sponsor us</Text>
          </GridItem>
        </Grid>
      </Box>
         


      </>
    );
  }
  