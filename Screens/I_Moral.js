import React from "react";
import { Box, Button, Center, Heading, Text } from "native-base"; 
import Entypo from 'react-native-vector-icons/Entypo';

const PM = () => {
    return (
    <Center>
      <Box>
          <Heading alignSelf="center"> Persona Moral</Heading>
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
          
          <Text alignSelf="center"> Son asociaciones o sociedades, es decir una unión de varias personas físicas que tienen un negocio juntas. Un aspecto fundamental de las personas morales es que adquieren obligaciones dependiendo de la finalidad con la que fueron creadas. Es decir, si tienen fines de lucro o no. </Text>
          
          <Button size="lg" bgColor="lightblue.100">
          </Button>
      </Box>
      
      
    </Center>
    )
}

export default PM;