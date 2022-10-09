import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { Stack, VStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link } from '@chakra-ui/react';

export default function Teams() {
  return (
    <>
 


        <Box
        alignContent={'center'}
        alignItems={'center'}
            width={950} height={400} mt={1} ml={145} mr={95} paddingLeft={10}  paddingTop={10} paddingBottom={20} borderRadius={15} 
            bg = "linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
            >
               <Image
                  src="/13.png"
                  position="relative"
                 
                
                  ml={4}
                  mb={3}

                
                  width={"25%"}
                  size={'auto'}
                  mt={7}
                  
                />


              
            

            </Box>


    
    </>
  );
}
