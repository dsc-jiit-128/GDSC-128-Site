import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Sessions from './EventCards/Sessions';
import SessionsNew from './EventCards/SessionsNew';
export default function SessionBarEvents() {
  return (
    <>
      <Flex justify={'center'} minH={'100vh'} fontFamily={'Gilroy-Medium'}>
        <Box
          alignContent={'center'}
          alignItems={'center'}
          width={950}
          paddingTop={10}
          paddingBottom={20}
          paddingLeft={10}
          paddingRight={10}
          borderRadius={15}
          display="block"
          fontFamily={'Gilroy-Medium'}
        >
          <Tabs isFitted variant="soft-rounded" size="sm">
            <TabList>
              <Tab
                _selected={{ color: 'white', bg: '#FBBC04' }}
                fontSize={{ base: '2.3vw', md: '1.2vw' }}
                fontFamily={'Gilroy-Medium'}
              >
                2023-2024
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: '#FF0F0F' }}
                fontSize={{ base: '2.3vw', md: '1.2vw' }}
                fontFamily={'Gilroy-Medium'}
              >
                2022-2023
              </Tab>
              
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <SessionsNew />
                </SimpleGrid>
              </TabPanel>
              <TabPanel pt={10}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Sessions />
                </SimpleGrid>
              </TabPanel>
              
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}
