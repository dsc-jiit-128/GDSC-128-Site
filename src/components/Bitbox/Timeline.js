import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';

const timeline = [
  {
    id: 1,
    date: 'January 1, 2023',
    title: 'Project Kickoff',
    description: 'The project officially begins with the kickoff meeting.'
  },
  {
    id: 2,
    date: 'February 14, 2023',
    title: 'Design Phase Completion',
    description: 'The design phase is completed and approved by stakeholders.'
  },
  {
    id: 3,
    date: 'March 30, 2023',
    title: 'Prototype Development',
    description: 'The first prototype is developed and ready for testing.'
  },
  {
    id: 4,
    date: 'April 15, 2023',
    title: 'User Testing',
    description: 'User testing is conducted to gather feedback on the prototype.'
  },
  {
    id: 5,
    date: 'May 10, 2023',
    title: 'Final Adjustments',
    description: 'Final adjustments are made based on user feedback.'
  },
  {
    id: 6,
    date: 'June 1, 2023',
    title: 'Project Launch',
    description: 'The project is officially launched and goes live.'
  },
  {
    id: 7,
    date: 'July 20, 2023',
    title: 'Post-Launch Review',
    description: 'A review meeting is held to assess the project’s success.'
  },
  {
    id: 8,
    date: 'August 15, 2023',
    title: 'Future Planning',
    description: 'Planning for future updates and improvements begins.'
  }
];

const Timeline = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize={{base:'8vw', md:'7xl'}} align="center" p ={3} fontFamily="Gilroy-Bold" fontWeight="bold" mb={14} mt={-20} textAlign="center" color={'white'}  >
        Timeline
      </chakra.h3>
      <chakra.h5 fontSize={{base:'3vw', md:'3xl'}} align="center" p ={3} fontFamily="Gilroy-Bold" fontWeight="bold" mb={14} mt={-20} textAlign="center" color={'white'}  >Comming soon....</chakra.h5>
      
      {timeline.map((milestone) => (
        <Flex key={milestone.id} mb="10px" >
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};


const Card = ({ id, title, description, date }) => {
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  const cardPadding = isMobile ? { base: 2, sm: 3 } : { base: 3, sm: 6 };
  const titleFontSize = isMobile ? 'xl' : '2xl';
  const descriptionFontSize = isMobile ? 'sm' : 'md';
  
  if (isMobile) {
    leftValue = '-5px';
    rightValue = 'unset';
    borderWidthValue = '10px 10px 10px 0';
  }

  return (
    <HStack
      flex={1}
      p={cardPadding}
      bg={useColorModeValue('#1f1f1f', '#303134')} // Google-inspired dark theme
      color={useColorModeValue('white', 'gray.300')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      mb={10}
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#303134', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box filter="blur(5px)" _hover={{ filter: "blur(4px)" }}>
        <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize={titleFontSize} lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize={descriptionFontSize}>{description}</Text>
          {id === 5 && <div style={{ color: 'red', textDecorationLine: 'underline' }}><a href='#' target='_blank'>Register Here</a></div>}
          {id === 8 && <div style={{ color: 'red', textDecorationLine: 'underline' }}><a href='#' target='_blank'>Register Here</a></div>}
        </VStack>
      </Box>
    </HStack>
  );
};



const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Timeline;
