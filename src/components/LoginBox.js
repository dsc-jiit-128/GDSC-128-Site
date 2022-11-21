import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    Center,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FcGoogle } from 'react-icons/fc';
  import GoogleLogin from 'react-google-login';
  import { socialSignIn } from '../services/apis';
  import { toast } from 'react-toastify';
  import { useHistory } from 'react-router-dom';

  
  export default function SimpleCard() {
    let history = useHistory();

    const successResponseGoogle = (response) => {
      // console.log("response", response);
      const fetchedObject = response?.profileObj;
      // console.log(fetchedObject);
      const data = {
        name: `${fetchedObject?.givenName} ${fetchedObject?.familyName}`,
        email : fetchedObject?.email,
        role: "USER",
        socialId: fetchedObject?.googleId,
        avatar: fetchedObject?.imageUrl
      }
  
      socialSignIn(data).then((res) => {
        toast.success(res?.data?.message);
        localStorage.setItem("token", res?.data?.data?.token);
        history.push("/");
      }).catch(error => {
        toast.error(error?.response?.data?.message);
      })
    };
  
    const failureResponseGoogle = (error) => {
      console.log("error", error);
    }
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
                <FormLabel>Email address/Phone Number</FormLabel>
                <Input placeholder="xyz@abc.com" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input placeholder="********" type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'} href='/forgotpass' >Forgot password?</Link>
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
            <GoogleLogin
                render={(renderProps) => (
                  <Button
                    w={'full'}
                    maxW={'md'}
                    variant={'outline'}
                    bg={'gray.700'}
                    leftIcon={<FcGoogle />}
                    onClick={renderProps.onClick}
                    >
                    <Center>
                      <Text color={'white'}>Sign up with Google</Text>
                    </Center>
                  </Button>
                )}
                clientId=".apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={successResponseGoogle}
                onFailure={failureResponseGoogle}
                cookiePolicy={"single_host_origin"}
              />
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