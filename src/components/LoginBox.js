import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Center,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FcGoogle } from 'react-icons/fc';

  
  export default function SimpleCard() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color='white'>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'white'}>
              to be a part of our community ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'} >Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Center pt={2}>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        bg={'gray.700'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text color={'white'}>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
    <Stack pt={6}>
              <Text align={'center'}>
                New user? <Link color={'blue.400'} href='/signup'>Sign Up</Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }