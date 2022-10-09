import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import { Route } from 'react-router-dom';


import Nav from './components/navbar';
import Head from './components/heading';
import BuildTogether from './components/ buildTogether';
import WhatDoWeDo from './components/whatDoWeDo';
import Links from './components/links';
import Home from './Pages/Home';
import Teampage from './Pages/Teams';
import Events from './Pages/Events';

function App() {
  return (
    <ChakraProvider>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/teams" exact component={Teampage} />
      <Route path="/events" exact component={Events} />


       
      </>
    </ChakraProvider>
  );
}

export default App;
