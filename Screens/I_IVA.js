import React from "react";
import { Box, Button, Center, Heading, Text } from "native-base";
import { NativeBaseProvider } from "native-base"; 
import Entypo from 'react-native-vector-icons/Entypo';

const Iva = () => {
    return (<NativeBaseProvider>
    <Center>
      <Box >
          <Heading alignSelf="center"> IVA</Heading>
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
          
          <Text alignSelf="center"> Se genera al momento de comprar algún bien o servicio, de manera que el consumidor final lo cubre. </Text>
          
          <Button size="lg" bgColor="lightblue.100">
          </Button>
      </Box>
      
      
    </Center></NativeBaseProvider>
    )
}

export default Iva;