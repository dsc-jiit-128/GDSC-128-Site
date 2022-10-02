import React from 'react';
import { Box, Flex, Button, Stack, Image, Text } from '@chakra-ui/react';
export default function Nav() {
  return (
    <>
      <Box
        px={4}
        pb={3}
        // boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        zIndex={1}
      >
        <Flex p={5} alignItems={'center'} justifyContent={'space-between'}>
          <Flex
            fontFamily={'heading'}
            fontSize={40}
            fontWeight={'semibold'}
            color="white"
          >
            <Stack direction={'row'} spacing="35px">
              <Image borderRadius="full" boxSize="36px" src="/image 2.png" />
              <Text fontSize="20px">GDSC JIIT 128</Text>
            </Stack>
          </Flex>

          <Flex alignItems={'center'} justifyContent="space-between">
            <Stack direction={'row'} spacing={7} justifyContent="space-between">
              <Button
                color="white"
                
                variant="link"
                fontSize={'sm'}
              >
                Events
              </Button>

              <Button
                color="white"
                
                fontSize={'sm'}
                variant="link"
              >
                Team
              </Button>

              <Button
                fontSize={'sm'}
                color="white"
                
                variant="link"
              >
                Login
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
