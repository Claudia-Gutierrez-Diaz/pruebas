import React from "react";
import { Box, Button, Center, Heading, Text } from "native-base"; 
import { NativeBaseProvider } from 'native-base';
const PF = () => {
    return (
      <NativeBaseProvider>
         <Heading></Heading>
          <Text alignSelf="center">  Trabajadores y trabajadoras registradas ante la Secretaría de Hacienda y Crédito Público. En este caso la actividad económica que realices define tu régimen y por lo tanto, tus responsabilidades como contribuyente.</Text>
          
          <Button size="lg" bgColor="lightblue.100"> </Button>
    </NativeBaseProvider>
    )
}

export default PF;