import {
    Text,
    ListItem,
    useColorModeValue,VStack,HStack,SimpleGrid,
    Box,List,
    Heading,Stack,ListIcon,Button,Image,Divider,
  } from '@chakra-ui/react';
  import React from 'react';
  import { FaCheckCircle,FaCircle } from 'react-icons/fa';

  function  Line(){
    return(
        <Divider
        size={'10px'}
        variant="solid"
        borderBottomWidth={'1px'}
        borderColor={'#ffffff'}
        width={'80%'}
        ml="auto"
        mr={'auto'}
        mt={'10'}
      ></Divider>
    );
  }


  function PriceWrapper({ children }: { children: ReactNode }) {
    return (
      <Box
        mb={4}
        shadow="base"
       // borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
       // borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}>
        {children}
      </Box>
    );
  }
  
  function Regbox(){

    return(
        <PriceWrapper>
            <Box py={4} px={8}   
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, rgba(220, 213, 204, 0.46) 6.27%, #E2DBCF 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 size={'auto'}
                 mt={2}
                 mb={2}
                src="/secondplace.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              px={7.8}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > RUNNER UP
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > 2ND PLACE
                </Text>

<Line></Line>
        <List>
            
           

            </List>
            </VStack>
         </PriceWrapper>

    );
  }
  export default function ThreeTierPricing() {
    return (
      <Box
       py={12}
        >
        <VStack  textAlign="center">
        <Text fontSize={{base:'8vw', md:'6xl'}} 
        align="center"  margin = 'auto' 
        marginTop={'120px'} color='white'
        >
          Prizes
        </Text>
        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
          >
          <PriceWrapper>
            <Box py={4} px={8}   
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, rgba(220, 213, 204, 0.46) 6.27%, #E2DBCF 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 size={'auto'}
                 mt={2}
                 mb={2}
                src="/secondplace.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              px={7.8}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > RUNNER UP
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > 2ND PLACE
                </Text>

<Line></Line>
        <List p={3}>
            
        <ListItem color='white' fontFamily="Gilroy-Bold"       mb={1.5}
                          fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
             The best solution developed gets Rs. 12,000/team<br/> +$3000 additional benefits
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Axure one-year subscription certificates $504
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
.xyz domain registration on Gen .xyz
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Echo 3D 1-month free subscription $99 <br/> and free resources worth Rs 8000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}      
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Interview Cake 30-day full access license <br/> via pdf code, $249 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"      mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Digital Ocean providing $250 credits to team <br/>and one year subscription worth $50 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Rosenfeld subscription worth $1645 to the team 
                </ListItem>

            </List>
            </VStack>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={10}   
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, #B77822 6.27%, #EAB764 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'60%'}
                 size={'auto'}
                 mt={2}
                 mb={2}
                src="/first.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              px={8}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > WINNERS
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    pl={3}
                    pr={3}
                    ml={12}
                    mr={12}
                    m={'auto'}
            
            > 1ST PLACE
                </Text>
               <Line></Line>

        <List>
            
            <ListItem color='white' fontFamily="Gilroy-Bold"       
                          fontSize={{ base: '2vw', md: '1vw' }} textAlign='left' mb={1.5}  p={-3}>
             
                

             The best solution developed gets Rs. 18,000/team
             <br/> +$3000 additional benefits
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
              Goodies from Devfolio(T-shirts & stickers) worth a million smiles
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}   
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
Axure one-year subscription certificates $504
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
.xyz domain registration on Gen .xyz
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}  
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
Interview Cake 30-day full access<br/> license via pdf code, $249 x 4
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}   
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Wolfram subscription to all members worth $375 * x 4 <br/> + one year Wolfram Pro subscription worth $375
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
Echo 3D 1-month free subscription $99<br/> and free resources worth Rs 8000
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
Digital Ocean providing $250 credits to team<br/> and one year subscription worth $50 x 4
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
Rosenfeld subscription worth $1645 to the team 
                </ListItem>

            </List>
            </VStack>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={8}   
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, #694512 6.27%, #CD8817 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 size={'auto'}
                 mt={2}
                 mb={2}
                src="/third.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              px={7.8}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > VICTORY STAND
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > 3RD PLACE
                </Text>
<Line></Line>
        <List p={3}>
            
                 
        <ListItem color='white' fontFamily="Gilroy-Bold"       
                          fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  mb={1}    >
             The best solution developed gets Rs. 8,000/team<br/> +$3000 additional benefits
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"        mb={1}  
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"        mb={1}  
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Axure one-year subscription certificates $504
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
.xyz domain registration on Gen .xyz
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Echo 3D 1-month free subscription $99 <br/> and free resources worth Rs 8000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}      
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Interview Cake 30-day full access license <br/> via pdf code, $249 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Digital Ocean providing $250 credits to team <br/>and one year subscription worth $50 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
Rosenfeld subscription worth $1645 to the team 
                </ListItem>

            </List>
            </VStack>
          </PriceWrapper>

          
        </Stack>
        <Line></Line>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 2, lg: 6 }}
          py={10}
          >
                    <PriceWrapper>
            <Box py={4} px={{ base: 1, md: 8 }}
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(114.65deg, #5F8178 2.94%, #D1A054 97.61%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
              
                 
                 mt={2}
                 mb={2}
                src="/fresher.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              
              px={7.8}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > ALL FRESHERS
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > FRESHER'S PRIZE
                </Text>

<Line></Line>
<List >
            
            <ListItem color='white' fontFamily="Gilroy-Bold"       mb={1.5}
                              fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
                 The best solution developed gets Rs. 5,000/team<br/> +$3000 additional benefits
                    </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}    
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
    Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
    Axure one-year subscription certificates $504
                    </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
    .xyz domain registration on Gen .xyz
                    </ListItem>
    
                    <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
    Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                    </ListItem>
  
                    
                    <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
    Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                    </ListItem>

    
                </List>
            </VStack>
         </PriceWrapper>

         {/* SOLANA */}

         {/* <PriceWrapper>
            <Box py={4} px={{ base: 1, md: 8 }}
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, #658FBB 6.27%, #ECBFD0 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 h={'50%'}
                 size={'50%'}
                 
                 mt={2}
                 mb={2}
                src="/sol.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              
              px={2}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > SOLANA 
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > $850 PRIZE POOL
                </Text>

<Line></Line>
<List>
            
            <ListItem color='white' fontFamily="Gilroy-Medium"       mb={2}
                              fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
MASTER GLASSEATER: $500 <br/>$USDC 500 for the best advanced project that is<br/> almost ready for full-time development.                    </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"    mb={2}    
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
RISK TENOKING: $250 <br/>$USDC 250 for the best project that goes into depth, <br/>demonstrating higher-order code                 </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
YOUNG GUN: $100 <br/>$USDC 100 for the best project beginners <br/>just starting out on Solana                 </ListItem>
                  
    
                </List>
            </VStack>
         </PriceWrapper> */}


            </Stack>
            <Line></Line>
            <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          m={20}
          spacing={{ base: 2, lg: 6 }}
          py={10}
          >
  <PriceWrapper>
            <Box py={4} px={{ base: 1, md: 8 }}
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, #658FBB 6.27%, #ECBFD0 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                
                 
                 mt={2}
                 mb={2}
                src="/sol.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              
              px={2}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={1}
                    pr={1}
                    ml={6}
mr={6}
            
            > SOLANA 
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={1}
                    pr={1}
                    ml={12}

            
            > $850 PRIZE POOL
                </Text>

<Line></Line>
<List>
            
            <ListItem color='white' fontFamily="Gilroy-Medium"       mb={2}
                              fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
MASTER GLASSEATER: $500 <br/> Best Advanced Project Built <br/>using Solana                 </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"    mb={2}    
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
RISK TENOKING: $250 <br/>Project with Indepth code </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
YOUNG GUN: $100   : <br/>best beginner project starting <br/>out in solana              </ListItem>
                  
    
                </List>
            </VStack>
         </PriceWrapper> 


         {/* POLYGON */}
         <PriceWrapper>
            <Box py={4} px={{ base: 1, md: 8 }}
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, #F2F2F2 6.27%, #62B4FF 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 h={'50%'}
                 size={'50%'}
                 
                 mt={2}
                 mb={2}
                src="/poly.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              
              px={2}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > POLYGON
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > $350 PRIZE POOL
                </Text>

<Line></Line>
<List>
            
            <ListItem color='white' fontFamily="Gilroy-Medium"       mb={2}
                              fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
BEST OF POLYGON: $200 <br/>Best hack built on Ethereum <br/>+Polygon: $200</ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"    mb={2}    
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
BEST OF ETH: $150 <br/>Best hack built on Ethereum

</ListItem>

                  
    
                </List>
            </VStack>
         </PriceWrapper> 

         {/* FILECOIN */}<PriceWrapper>
            <Box py={4} px={{ base: 1, md: 8 }}
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, #FF9F47 6.27%, #F2FFBC 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 h={'50%'}
                 size={'50%'}
                 
                 mt={2}
                 mb={2}
                src="/filecoin.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              
              px={2}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > FILECOIN
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > $250 PRIZE
                </Text>

<Line></Line>
<List>
            
            <ListItem color='white' fontFamily="Gilroy-Medium"       mb={2}
                              fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
$250 Prize: <br/>Best use of Filecoin and/or IPFS <br/>Use of peer to peer <br/>hypermedia protocols</ListItem>


                </List>
            </VStack>
         </PriceWrapper> 

         {/* REPLIT */}
         <PriceWrapper>
            <Box py={4} px={{ base: 1, md: 8 }}
            borderTopLeftRadius={'xl'}
            borderTopRightRadius={'xl'}   
            alignItems='center'
            align='center'
            alignContent='center'
            border={"0.789726px"}
            borderColor="rgba(255, 255, 255, 0.3)"
            bg="linear-gradient(116.25deg, #37A1A8 6.27%, #131508 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 h={'50%'}
                 size={'50%'}
                 
                 mt={2}
                 mb={2}
                src="/replit.png"
           
              />

           </Box>
            <VStack
              bg={"#1F1F1F"}
              py={4}
              
              px={2}
              borderBottomRadius={'xl'}>
            <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '2vw' }}
                    p={-4}
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
            
            > REPLIT
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > $50 PRIZE 
                </Text>

<Line></Line>
<List>
            
            <ListItem color='white' fontFamily="Gilroy-Medium"       mb={2}
                              fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
 $50 Prize: <br/>Winning Project deployed on <br/>Replit

</ListItem>
                 
                </List>
            </VStack>
         </PriceWrapper> 




            </Stack>
      </Box>
    );
  }