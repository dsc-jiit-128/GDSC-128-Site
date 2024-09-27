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
    date: 'Jan 1, 2024 to March 8, 2024',
    title: 'Registration begins',
    description: `Get, set and be ready to code for Hackathon!`
  },
  {
    id: 2,
    date: 'March 8, 2024 to March 10, 2024',
    title: 'Idea submission',
    description: `Ideate, brainstorm and form a structure and your thoughts for the problem statement.`
  },

  {
    id: 3,
    date : 'March 13, 2024',
    title: 'Speaker Session - Urvi Goel',
    description: `Get to know about the latest trends in the tech industry by our speaker Urvi Goel.`
  },
  {
    id: 4,
    date: 'March 14, 2024',
    title: 'Mystery Event',
    description:`A mystery event that will test your AI game.`
  },
   {
    id: 5,
    date: 'March 14, 2024',
    title: 'CodeBurn🔥',
    description:`Ignite your DSA skills in this engaging coding competition!`
  },
  {
    id: 6,
    date: 'March 15, 2024',
    title: 'Speaker Session - Mahima Hans',
    description:`Get to know about the latest trends in the tech industry by our speaker Mahima Hans.`
  },
  {
    id: 7, 
    date: 'March 16, 2024',
    title: 'Hackathon',
    description: `Get ready for 12 hours of code sprint!`
  },
  {
    id: 8, 
    date: 'March 23, 2024',
    title: 'Technical Workshop',
    description: `Discover DevOps: Streamline development, foster collaboration. Join us!`
  }
];

const Timeline = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize={{base:'8vw', md:'6xl'}} align="center" p ={3} fontFamily="Gilroy-Bold" fontWeight="bold" mb={18} textAlign="center" color={'white'}  >
        Timeline
        
      </chakra.h3>
      
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
  // For even id show card on left side
  // For odd id show card on right side
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
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      mb={10}
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
      filter='auto'
      // blur={(id===1||id===2)?"":"5px"}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize={titleFontSize} lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize={descriptionFontSize}>{description}</Text>
          {id===5?<div style={{color:'red',textDecorationLine:'underline'}}><a href='http://tinyurl.com/JIIT14Mar' target='_blank'>Register Here</a></div>:<></>}
          {id===8?<div style={{color:'red',textDecorationLine:'underline'}}><a href='https://www.geeksforgeeks.org/event/bitbox-4' target='_blank'>Register Here</a></div>:<></>}
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
