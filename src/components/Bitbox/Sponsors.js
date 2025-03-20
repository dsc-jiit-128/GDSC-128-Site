import {
  GridItem,
  SimpleGrid,
  Grid,
  Image,
  Text,
  Flex,
  Link,
  Box,
  HStack,
  grid,
} from '@chakra-ui/react';
import React from 'react';
import '../../css/Sponsors.css';
export default function Sponsors() {
  return (
    <>
      <Box margin={'50px'} mt={{ base: '0vw', md: '3vw' }}>
        <Text
          fontSize={{ base: '8vw', md: '6xl' }}
          align="center"
          margin="auto"
          marginTop={'117px'}
          color="white"
        >
          Title Sponsors
        </Text>
        <Grid
          templateColumns="repeat(2, 0fr)"
          gap={0}
          size={'150%'}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{ base: 'auto', md: '310px' }}
          mr={{ base: 'auto', md: '310px' }}
          mt={{ base: '3vw', md: '3vw' }}
        >
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://devfolio.co/">
              <Image
                src="/devfolio.webp"
                alt='DEVFOLIO LOGO'
                width={'80%'}
                height={'80%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <Image
              src="/logo-google.webp"
              w={'40%'}
              h={'40%'}
              className="image"
              margin="auto"
              position={'relative'}
            />
          </GridItem>
        </Grid>


        <Text
          fontSize={{ base: '4vw', md: '3xl' }}
          align="center"
          margin="auto"
          marginTop={8}
          color="white"
        >
          {/* ASSOCIATE SPONSORS */}
          Powered By
        </Text>

        <Grid
          templateColumns="repeat(4, 0fr)"
          gap={0}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{ base: 'auto', md: '310px' }}
          mr={{ base: 'auto', md: '310px' }}
          mt={{ base: '3vw', md: '3vw' }}
        >
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <Image
              src="/bb25IMG/ethindia.png"
              className="image"
              width={'80%'}
              height={'75%'}
              margin="auto"
              alt='ETHINDIA LOGO'
              position={'relative'}
              object={'contain'}
            />
          </GridItem>

          {/* <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://polygon.technology/">
              <Image
                src="/polygon.png"
                w={'75%'}
                h={'75%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem> */}
        </Grid>

        <Text
          fontSize={{ base: '6vw', md: '4xl' }}
          align="center"
          margin="auto"
          marginTop={8}
          color="white"
        >
          {/* CO SPONSORS */}
          Co Sponsors
        </Text>
        <Grid
          templateColumns="repeat(4, 0fr)"
          gap={0}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{ base: 'auto', md: '310px' }}
          mr={{ base: 'auto', md: '310px' }}
          mt={{ base: '3vw', md: '3vw' }}
        // w={'50vw'}
        >
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://thementorx.com/">
              <Image
                src="/Sponsors/MentorXGlobal.png"
                w={'50%'}
                h={'50%'}
                backgroundColor={''}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>

          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://hoverrobotix.com/">
              <Image
                src="/Sponsors/HoverRobotix.png"
                w={'50%'}
                h={'50%'}
                backgroundColor={'white'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target='_blank' href='https://sybgen.com/'>
              <Image
                src="/Sponsors/Sybgen.png"
                w={'50%'}
                h={'50%'}
                backgroundColor={'white'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://interviewbuddy.net/">
              <Image
                src="/Sponsors/InterviewBuddy.svg"
                w={'50%'}
                h={'50%'}
                backgroundColor={'white'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://www.instagram.com/revuplifeskills/">
              <Image
                src="/Sponsors/RevupLifeSkills.jpg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target='_blank' href='https://www.instagram.com/envision_thapar/'>
              <Image
                src="/Sponsors/Lucr8Ventures.jpg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <Image
              src="/logo-google.webp"
              w={'50%'}
              h={'50%'}
              className="image"
              margin="auto"
              position={'relative'}
            />
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <Image
              src="/logo-google.webp"
              w={'50%'}
              h={'50%'}
              className="image"
              margin="auto"
              position={'relative'}
            />
          </GridItem>

        </Grid>

        <Text
          fontSize={{ base: '6vw', md: '4xl' }}
          align="center"
          margin="auto"
          marginTop={8}
          color="white"
        >
          {/* OLD SPONSORS */}
          Old Sponsors
        </Text>
        <Grid
          templateColumns="repeat(4, 0fr)"
          gap={0}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{ base: 'auto', md: '310px' }}
          mr={{ base: 'auto', md: '310px' }}
          mt={{ base: '3vw', md: '3vw' }}
        // w={'50vw'}
        >
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://replit.com" target="_blank">
              <Image
                src="/replit.png"
                alt="REPLIT LOGO"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>

          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://polygon.technology/">
              <Image
                src="/polygon.png"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://www.geeksforgeeks.org/">
              <Image
                src="/gfg.png"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://www.codingninjas.com/">
              <Image
                src="/codingninja.svg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>

          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://www.axure.com" target="_blank">
              <Image
                src="/axure.webp"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://www.echo3d.com/" target="_blank">
              <Image
                src="/echo3d.svg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://givemycertificate.com/" target="_blank">
              <Image
                src="/gmc.svg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://streamyard.com/" target="_blank">
              <Image
                src="/streamyardsponsor.png"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>

          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://www.algocs.in/" target="_blank">
              <Image
                src="/algocs.svg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>

          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://upcomingfest.netlify.app/" target="_blank">
              <Image
                src="/uf.svg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a href="https://stockedge.com/" target="_blank">
              <Image
                src="/stockedge.svg"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://gen.xyz/">
              <Image
                src="/xyzz.webp"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
                backgroundColor={'white'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://rosenfeldmedia.com">
              <Image
                src="/rosenfeld.webp"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://www.interviewcake.com/">
              <Image
                src="/cake.webp"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://www.taskade.com/">
              <Image
                src="/taskade.png"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://www.threeway.studio/">
              <Image
                src="/threeway.png"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://interviewbuddy.net/">
              <Image
                src="/interview_buddy.png"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>

          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <a target="_blank" href="https://www.wolfram.com/language/">
              <Image
                src="/wolf.webp"
                w={'50%'}
                h={'50%'}
                className="image"
                margin="auto"
                position={'relative'}
              />
            </a>
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <Image
              src="/logo-google.webp"
              w={'40%'}
              h={'40%'}
              className="image"
              margin="auto"
              position={'relative'}
            />
          </GridItem>
          <GridItem
            w="15vw"
            h="15vw"
            bg="#161515"
            border={'1px solid white'}
            className="sponsor"
            display={'flex'}
            justifyContent={'center'}
          >
            <Image
              src="/logo-google.webp"
              w={'40%'}
              h={'40%'}
              className="image"
              margin="auto"
              position={'relative'}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
