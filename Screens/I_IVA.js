import React from "react";
import { Box, Button, Center, Heading, Text } from "native-base"; 
import Entypo from 'react-native-vector-icons/Entypo';

const Iva = () => {
    return (
    <Center>
      <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Heading alignSelf="center"> IVA</Heading>
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
          <br/>
          <Text alignSelf="center"> Se genera al momento de comprar algún bien o servicio, de manera que el consumidor final lo cubre. </Text>
          
          <Button size="lg" bgColor="lightblue.100">
          <Entypo name="back" Style={{color: 'white', fontsize: 100}} /> 
          </Button>
      </Box>
      
      
    </Center>
    )
}

export default Iva;