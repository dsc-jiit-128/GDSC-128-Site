import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
  } from '@chakra-ui/react';

import { useFormik } from "formik";
import * as Yup from "yup";
import { signUpApi, socialSignIn } from "../services/apis.js";
import {useHistory} from "react-router-dom"
import GoogleLogin from "react-google-login";

  import { FcGoogle } from 'react-icons/fc';

  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function Signupbox() {
    const [showPassword, setShowPassword] = useState(false);
    let history = useHistory();

    const initialValues = {
      email: "",
      password: "",
      fname: "",
      lname:"",
      role: "USER",
      mobileNumber:"",
    };
  
    const validationSchema = Yup.object().shape({
      fname: Yup.string().required("Required*").matches(/^([a-zA-Z]+\s)*[a-zA-Z]+$/, "Please enter a valid first name"),
      lname: Yup.string().required("Required*").matches(/^([a-zA-Z]+\s)*[a-zA-Z]+$/, "Please enter a valid last name"),
      email: Yup.string()
        .required("Required*").email("Please enter a valid email"),
      mobileNumber: Yup.string()
        .required("Required*").length(10,"Please provide valid mobile number"),
      password: Yup.string()
        .required("Required*")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    });
  
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        signUp(values)
      },
      enableReinitialize: true,
    });

    const signUp = (values) => {
      values={
        ...values,
        name:values.fname+" "+values.lname,
      }
      console.log(values,"main")
      signUpApi(values)
        .then((res) => {
          localStorage.setItem("token", res?.data?.data?.token);
          history.push("/");
        })
        .catch((error) => {
          console.log("here", error);
        });
    };

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
        localStorage.setItem("token", res?.data?.data?.token);
        history.push("/");
      }).catch(error => {
        console.log(error?.response?.data?.message);
      })
    };
  
    const failureResponseGoogle = (error) => {
      console.log("error", error);
    }

    console.log(formik.values);
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color='white'>
              Sign up
            </Heading>
            <Text fontSize={'lg'}  color='white'>
              to become an integral part of our community️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder="Abhishek" type="text" name='fname'
                      value={formik.values.fname}
                      onChange={formik.handleChange}                    
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="Kumar" type="text" name='lname'
                      value={formik.values.lname}
                      onChange={formik.handleChange} 
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="PNumber" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder="9876543210" type="number" name='mobileNumber'
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange} 
                />
              </FormControl>
              <FormControl id="email/Name" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input placeholder="xyz@abc.com" name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange} 
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  placeholder="**********" name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange} 
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
              
                <Button
                  loadingText="Submitting"
                  onClick={(e)=>{
                    formik.handleSubmit();
                  }}
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
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
                  Already a user? <Link color={'blue.400'} href="/login">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }