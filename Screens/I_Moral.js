import React from "react";
import { Box, Button, Center, Heading, Text } from "native-base"; 
import Entypo from 'react-native-vector-icons/Entypo';

const PM = () => {
    return (
    <Center>
      <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Heading alignSelf="center"> Persona Moral</Heading>
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
          <br/>
          <Text alignSelf="center"> Son asociaciones o sociedades, es decir una unión de varias personas físicas que tienen un negocio juntas. Un aspecto fundamental de las personas morales es que adquieren obligaciones dependiendo de la finalidad con la que fueron creadas. Es decir, si tienen fines de lucro o no. </Text>
          
          <Button size="lg" bgColor="lightblue.100">
          <Entypo name="back" Style={{color: 'white', fontsize: 100}} /> 
          </Button>
      </Box>
      
      
    </Center>
    )
}

export default PM;