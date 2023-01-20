import { VStack } from '@chakra-ui/react'
import {
    GridItem,
    SimpleGrid,
    Grid,
    Image,
    Text,
    Flex,
    Link,
    Box,
    HStack
    
  } from '@chakra-ui/react';
import React from 'react'


const TimerCard = ({type, number}) => {
    return <Box
        px={{base:'3vw', md:6}}
        py={{base:1, md:2}}

        borderRadius= {{base:'10px', md:"3xl"}}
        border={"3px solid #FFF"}
    >
        <Text
            fontSize={{base:'3vw', md:30}}
            
            fontFamily={"Gilroy-Bold"}
            color="white"
        >
            {type}
        </Text>
        <Text
            fontSize={{base:'7vw', md:160}}
            fontWeight="bold"
            fontFamily={"BebasNeue-Regular"}
            color="white"
            lineHeight={1}
        >
            {`${number}`.length === 1 ? `0${number}` : `${number}`}
        </Text>
    </Box>
}

const Timer = ({futureDate}) => {
    //countdown date
    //futureDate - current date
    const [date, setTimeLeft] = React.useState(new Date(futureDate.getTime() - new Date().getTime()))
    //update every second
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(new Date(futureDate.getTime() - new Date().getTime()))
        }, 1000)
        return () => clearInterval(interval)
    }, [futureDate])

    return <HStack spacing={{base:3, md:10}} ml={{base: '-5vw', md: '3vw'}}>
        <TimerCard type="D" 
            number={date.getDate()}
        />
        <TimerCard type="H"
            number={date.getHours()}
        />
        <TimerCard type="M"
            number={date.getMinutes()}
            />
        <TimerCard type="S"
            number={date.getSeconds()}
        />
        </HStack>

}

export default Timer;