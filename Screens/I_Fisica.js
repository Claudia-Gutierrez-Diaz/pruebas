import React from "react";
import { Box, Button, Center, Heading, Text } from "native-base"; 
import Entypo from 'react-native-vector-icons/Entypo';

const PF = () => {
    return (
    <Center>
      <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Heading alignSelf="center"> Persona Fisica</Heading>
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
          <br/>
          <Text alignSelf="center">  Trabajadores y trabajadoras registradas ante la Secretaría de Hacienda y Crédito Público. En este caso la actividad económica que realices define tu régimen y por lo tanto, tus responsabilidades como contribuyente.</Text>
          
          <Button size="lg" bgColor="lightblue.100">
          <Entypo name="back" Style={{color: 'white', fontsize: 100}} /> 
          </Button>
      </Box>
      
      
    </Center>
    )
}

export default PF;