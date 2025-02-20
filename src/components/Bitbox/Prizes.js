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


  function PriceWrapper({ children }) {
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
                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>
             The best solution developed gets Rs. 10,000/team<br/> + additional benefits
                </ListItem>
                {/* <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
              <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                             <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>
                           
Axure one-year subscription certificates $504
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

.xyz domain registration on Gen .xyz
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Echo 3D 1-month free subscription $99 <br/> and free resources worth Rs 8000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}      
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Interview Cake 30-day full access license <br/> via pdf code, $249 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"      mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Digital Ocean providing $250 credits to team <br/>and one year subscription worth $50 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Rosenfeld subscription worth $1645 to the team 
                </ListItem> */}

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
            bg="linear-gradient(116.25deg, #B77822 6.27%, #EAB764 98.19%);">
                 <Image
                 align='center'
                 textAlign='center'
                 p={0.8}
                 w={'50%'}
                 size={'auto'}
                 mt={2}
                 mb={2}
                src="/first.png"
           
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
        <List p={3}>
            
        <ListItem color='white' fontFamily="Gilroy-Bold"       mb={1.5}
                          fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>
                            The best solution developed gets Rs. 20,000/team
                            <br/>  &nbsp;   &nbsp; + additional benefits
                </ListItem>
                {/* <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
              <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                             <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>
                           
Axure one-year subscription certificates $504
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

.xyz domain registration on Gen .xyz
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Echo 3D 1-month free subscription $99 <br/> and free resources worth Rs 8000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}      
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Interview Cake 30-day full access license <br/> via pdf code, $249 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"      mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Digital Ocean providing $250 credits to team <br/>and one year subscription worth $50 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                                        <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Rosenfeld subscription worth $1645 to the team 
                </ListItem> */}

            </List>
            </VStack>
          </PriceWrapper>
          {/* <PriceWrapper>
            <Box py={4} px={8}   
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
              px={7.8}
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
             
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>
              

             The best solution developed gets Rs. 20,000/team
             <br/>  &nbsp;   &nbsp; + additional benefits
                </ListItem>
                
                {/* <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>
             Goodies from Devfolio(T-shirts & stickers) worth a million smiles
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}   
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
Axure one-year subscription certificates $504
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >                            
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

.xyz domain registration on Gen .xyz
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}  
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >                           
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

Interview Cake 30-day full access<br/> &nbsp;   &nbsp;license via pdf code, $249 x 4
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}   
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                           
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

Wolfram subscription to all members worth $375 * x 4 <br/>&nbsp;   &nbsp; + one year Wolfram Pro subscription worth $375
                </ListItem>
        

                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >                            
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

Echo 3D 1-month free subscription $99<br/> &nbsp;   &nbsp;and free resources worth Rs 8000
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}    
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >                     
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

Digital Ocean providing $250 credits to team<br/> and one year subscription worth $50 x 4
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >                            
             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

Rosenfeld subscription worth $1645 to the team 
                </ListItem> 

            </List>
            </VStack>
          </PriceWrapper> */}
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
                                 <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>
        The best solution developed gets Rs. 7,500/team<br/> + additional benefits
                </ListItem>
                
                {/* <ListItem color='white' fontFamily="Gilroy-Medium"        mb={1}  
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>
Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"        mb={1}  
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Axure one-year subscription certificates $504
                </ListItem>
                <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

.xyz domain registration on Gen .xyz
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                </ListItem>

                <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Echo 3D 1-month free subscription $99 <br/> and free resources worth Rs 8000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}      
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Interview Cake 30-day full access license <br/> via pdf code, $249 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Digital Ocean providing $250 credits to team <br/>and one year subscription worth $50 x 4
                </ListItem>
                
                <ListItem color='white' fontFamily="Gilroy-Medium"       
                          fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >                            <ListIcon as={FaCircle } color="white"  boxSize="0.5em" mb="0.2em"/>

Rosenfeld subscription worth $1645 to the team 
                </ListItem> */}

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
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

                 The best solution developed gets Rs. 5,000/team<br/> + additional benefits
                    </ListItem>
                    {/* <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}    
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Axure one-year subscription certificates $504
                    </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    .xyz domain registration on Gen .xyz
                    </ListItem>
    
                    <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                    </ListItem>
  
                    
                    <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                    </ListItem> */}

    
                </List>
            </VStack>
         </PriceWrapper> 
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
            
            > MINI GAMES
                </Text>
                <Text color='white' fontFamily="Gilroy-Light"
                    fontSize={{ base: '4vw', md: '1vw' }}
                    mt={-9}
                    
                    pl={3}
                    pr={3}
                    ml={12}
mr={12}
m={'auto'}
            
            > MINI GAMES PRIZE
                </Text>

<Line></Line>
<List >
            
            <ListItem color='white' fontFamily="Gilroy-Bold"       mb={1.5}
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left'  >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

                 The best solution developed gets Rs. 5,000/team<br/> + additional benefits
                    </ListItem>
                    {/* <ListItem color='white' fontFamily="Gilroy-Medium"    mb={1}    
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Goodies from Devfolio(T-shirts & stickers)<br/> worth a million smiles                </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"   mb={1}       
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Axure one-year subscription certificates $504
                    </ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    .xyz domain registration on Gen .xyz
                    </ListItem>
    
                    <ListItem color='white' fontFamily="Gilroy-Medium"     mb={1}     
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Wolfram subscription to all members worth $375 * x 4 <br/>+ one year Wolfram Pro subscription worth $375
                    </ListItem>
  
                    
                    <ListItem color='white' fontFamily="Gilroy-Medium"  mb={1}        
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-0.7em"/>

    Gift vouchers from HoverRobotix Hoverboards <br/> India worth Rs. 10000
                    </ListItem> */}

    
                </List>
            </VStack>
         </PriceWrapper> 
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
 

         POLYGON 
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
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-1em"/>

BEST OF POLYGON: $200 <br/>Best hack built on Ethereum <br/>+Polygon: $200</ListItem>
                    <ListItem color='white' fontFamily="Gilroy-Medium"    mb={2}    
                              fontSize={{ base: '2vw', md: '0.9vw' }} textAlign='left' >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-1em"/>

BEST OF ETH: $150 <br/>Best hack built on Ethereum

</ListItem>

                  
    
                </List>
            </VStack>
         </PriceWrapper>  


         REPLIT 
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
                src="/l_replit.png"
           
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
            
            <ListItem color='white' fontFamily="Gilroy-Medium"       mb={14}
                              fontSize={{ base: '2vw', md: '1vw' }} textAlign='left'  >
                                             <ListIcon as={FaCircle } color="white"  boxSize="0.7em" mb="0.2em" ml="-1em"/>

 $50 Prize: <br/>Winning Project deployed on <br/>Replit

</ListItem>
                 
                </List>
            </VStack>
         </PriceWrapper> 




            </Stack> 
      </Box>
    );
  }