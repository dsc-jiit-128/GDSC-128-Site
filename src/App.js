import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './components/navbar';
import Head from './components/heading';
import BuildTogether from './components/ buildTogether';
import WhatDoWeDo from './components/whatDoWeDo';
import Links from './components/links';
import Home from './Pages/Home';
import Teampage from './Pages/Teams';
import Events from './Pages/Events';

import Fonts from './fonts';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPass from './Pages/ForgotPassword';
import { Theme } from '@chakra-ui/react';
import { theme } from './theme';
import ResetP from './Pages/ResetPassword';
import verifyemail from './Pages/VerifyEmail';
function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />

       
          {<Route path="/" exact component={Home} />}

          <Route path="/teams" exact component={Teampage} />
          <Route path="/events" exact component={Events} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          {<Route path="/forgotpass" exact component={ForgotPass} />}
          {<Route path="/resetpass" exact component={ResetP} />}
          <Route path="/verifyemail" exact component={verifyemail} />
       
      </ChakraProvider>
    </>
  );
}

export default App;
