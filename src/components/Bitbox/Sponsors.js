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
        <Text fontSize={{base:'8vw', md:'6xl'}} align="center"  margin = 'auto' marginTop={'117px'} color='white'>
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
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://devfolio.co/" target="_blank">
            <Image src= "/devfolio.webp" alt='DEVFOLIO LOGO' w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
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
            <a href="https://polygon.technology/" target="_blank">
            <Image src= "/polygon.png" alt='POLYGON LOGO'  w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
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
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
          <a href="https://replit.com" target='_blank'>
            <Image src= "/replit.png" alt='REPLIT LOGO' w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>  
          </GridItem><GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
          <a href="https://www.axure.com" target='_blank'>
            <Image src= "/axure.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </a>
          </GridItem><GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >

          <a href="https://www.echo3d.com/" target='_blank'>
            <Image src= "/echo3d.svg" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
             <a href="https://givemycertificate.com/" target='_blank'>
             <Image src= "/gmc.svg" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
           
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >       
          <a href="https://streamyard.com/" target='_blank'>
            <Image src= "/streamyardsponsor.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          
          </GridItem>
        
        <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a href="https://upcomingfest.netlify.app/" target='_blank'>
            <Image src= "/algocs.svg" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
            </GridItem>
               
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
             <a href="https://upcomingfest.netlify.app/" target='_blank'>
            <Image src= "/uf.svg" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
            </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a href="https://stockedge.com/" target='_blank'>
            <Image src= "/stockedge.svg" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
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


<Text fontSize={{base:'6vw', md:'4xl'}} align="center"  margin = 'auto'
marginTop={20} 
color='white'>
Old Sponsors
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
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            {/* <a target="_blank" href='https://rosenfeldmedia.com/books/'> */}
            <a target="_blank" href='https://shop.continental.coffee/'>
            <Image src= "/cofesponsor.png" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
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
            {/* <a target="_blank" href='https://gen.xyz/'> */}
            <a target="_blank" href='https://www.vehant.com/'>

            <Image src= "/vehantsponsor.png" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
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
            <a target="_blank" href='https://hoverrobotix.com/'>
            <Image src= "/robotix.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="14vw"
            h="14vw"
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
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='#'>
            <Image src= "/revup.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
            </a>
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
            <a target="_blank" href='https://streamyard.com/'>
            <Image src= "/streamyardsponsor.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://www.wolfram.com/language/'>
            <Image src= "/wolf.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
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
            <a target="_blank" href='https://rosenfeldmedia.com/books/'>
            <Image src= "/rosenfeld.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
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
            <a target="_blank" href='https://www.interviewcake.com/'>
            <Image src= "/cake.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem><GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >            <a target="_blank" href='https://flipr.ai//'>
            
            <Image src= "/fliprsponsor.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
        </a>  </GridItem><GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <a target="_blank" href='https://twitter.com/Web3Panjab'>
            <Image src= "/WEB3Panjab.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
        </a>
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
            <a target="_blank" href='https://www.threeway.studio/'>
            <Image src= "/threeway.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'} backgroundColor={'white'}/>
        </a>
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
            <a target="_blank" href='https://filecoin.io/'>
            <Image src= "/filecoin_s.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'} backgroundColor={'white'}/>
        </a>
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
            <a target="_blank" href='https://gen.xyz/'>
            <Image src= "/xyzz.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'} backgroundColor={'white'}/>
        </a>
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
            <a target="_blank" href='https://yhills.com/'>
            <Image src= "/yhillsponsor.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'} backgroundColor={'white'}/>
        </a>
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
            <a target="_blank" href='https://www.grabon.in/'>
            <Image src= "/grabonsponsor.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'} backgroundColor={'white'}/>
        </a>
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
            <a target="_blank" href='https://solana.com//'>
            <Image src= "/sol.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'} backgroundColor={'white'}/>
        </a>
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
            <a target="_blank" href='https://www.elearnmarkets.com/webinars/stock-market-for-everyone?aff_code=ELMAFF10953&utm_source=ELMAFF10953&utm_medium=affiliate'>
            <Image src= "/elm.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
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
            <a target="_blank" href='https://pwskills.com/'>
            <Image src= "/pwsponsor.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'} backgroundColor={'white'}/>
        </a>
          </GridItem>
        
        <GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >            <a target="_blank" href='https://tezosindia.org.in/'>
            

            <Image src= "/tezos.png" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
        </a>  </GridItem>
          <GridItem
            w="14vw"
            h="14vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href='https://www.digitalocean.com/'>
            <Image src= "/meta.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </a>
          </GridItem>
        </Grid>
        

   
      </Box>
         


      </>
    );
  }
  
