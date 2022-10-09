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

function App() {
  return (
    <ChakraProvider>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/Teams" exact component={Teampage} />

       
      </>
    </ChakraProvider>
  );
}

export default App;
