import React from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import {Text, Box, Button, Heading, Center} from "native-base";

const Ieps = () => {
    return (
<Center>
<Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
    <Heading alignSelf="center"> IEPS</Heading>
    <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
    <br/>
    <Text alignSelf="center">Aplica en la comercialización o importación de bebidas alcohólicas, cervezas, tabaco, gasolina y alimentos con alto contenido calórico.</Text>
    
    <Button size="lg" bgColor="lightblue.100">
    <Entypo name="back" Style={{color: 'white', fontsize: 100}} /> 
    </Button>
</Box>


</Center>

    )
}
export default Ieps;