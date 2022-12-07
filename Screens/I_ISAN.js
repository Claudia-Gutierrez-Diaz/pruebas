import React from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import {Text, Box, Button, Heading, Center} from "native-base";

const Isan = () => {
    return (
<Center>
<Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
    <Heading alignSelf="center"> ISAN</Heading>
    <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
    <br/>
    <Text alignSelf="center">Se atribuye a la compra, importación o venta de vehículos nuevos.</Text>
    
    <Button size="lg" bgColor="lightblue.100">
    <Entypo name="back" Style={{color: 'white', fontsize: 100}} /> 
    </Button>
</Box>


</Center>

    )
}
export default Isan;