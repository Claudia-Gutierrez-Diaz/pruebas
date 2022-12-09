import React, { useState } from 'react'
import { Stack,Text,HStack, Modal, Button, ScrollView, Heading, Box ,Flex,Center} from "native-base";
import Boton from '../components/Boton';
import PF from './I_Fisica';
import Ieps from './I_IEPS';
import Isan from './I_ISAN';
import Isr from './I_ISR';
import Iva from './I_IVA';
import { NativeBaseProvider } from 'native-base';
import PM from './I_Moral';

const all=({ navigation })=>{
  return (<NativeBaseProvider>
    <ScrollView>

    <Center>
  <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Heading alignSelf="center">
            Informacion
          </Heading>
          <Text alignSelf="left">
              Impuestos
          </Text>
          
          <Center>
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
            <br/>
          <HStack space={3}>
          <Button>
            <IVa/>
          </Button>
            <Button>
              <Ips/>
            </Button>
            <Button>
              ISR
            </Button>
            <Button>
              ISAN
            </Button>
          </HStack>
          </Center>
            <br/>
          <Text alignSelf="left"> Tipos de contribuyentes </Text>
          <Center>
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
            <br/>
          <HStack space={3}>
            <Button>
              Persona Fisica 
            </Button>
            <Button>
              Persona Moral
            </Button>
            </HStack>
          </Center>
          
      </Box>

</Center>
  
  

<Fisica/>
<Ips/>
<ISr/>
<IVa/>
<Mora/>
</ScrollView>

  </NativeBaseProvider> );
}

const Fisica = () => {  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return ( 
  
  
  
  <Box>
  


      

<Flex direction="column" mb="3.5" mt="3.5">
  <Button size="40" bg="primary.300" _text={{
  color: "coolGray.800"
}}onPress={() => openModal("right")}>Persona Fisica
 </Button>
</Flex>
</Box>    )
};




const Ips = () => {  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return ( <Box>
     
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>IEPS</Modal.Header>
          <Modal.Body>
            <Ieps/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
           
              <Button onPress={() => {
              setOpen(false);
            }}>
                salir
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    
      

<Flex direction="column" mb="3.5" mt="3.5">
  <Button size="40" bg="primary.300" _text={{
  color: "coolGray.800"
}}onPress={() => openModal("right")}>IEPS
 </Button>
</Flex>
</Box>    )
};



const ISA = () => {  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return ( <Box>
     
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Isan</Modal.Header>
          <Modal.Body>
            <Isan/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
           
              <Button onPress={() => {
              setOpen(false);
            }}>
                salir
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    
      

<Flex direction="column" mb="3.5" mt="3.5">
  <Button size="40" bg="primary.300" _text={{
  color: "coolGray.800"
}}onPress={() => openModal("right")}>Isan
 </Button>
</Flex>
</Box>    )
};


const ISr = () => {  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return ( <Box>
     
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Isr</Modal.Header>
          <Modal.Body>
            <Isr/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
           
              <Button onPress={() => {
              setOpen(false);
            }}>
                salir
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    
      

<Flex direction="column" mb="3.5" mt="3.5">
  <Button size="40" bg="primary.300" _text={{
  color: "coolGray.800"
}}onPress={() => openModal("right")}>Isr
 </Button>
</Flex>
</Box>    )
};




const IVa = () => {  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return ( <Box>
      
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>IVA</Modal.Header>
          <Modal.Body>
            <Iva/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
           
              <Button onPress={() => {
              setOpen(false);
            }}>
                salir
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    
      

<Flex direction="column" mb="3.5" mt="3.5">
  <Button size="40" bg="primary.300" _text={{
  color: "coolGray.800"
}}onPress={() => openModal("right")}>IVA
 </Button>
</Flex>
</Box>    )
};



const Mora = () => {  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return ( <Box>
      
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Persona Moral</Modal.Header>
          <Modal.Body>
            <PM/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
           
              <Button onPress={() => {
              setOpen(false);
            }}>
                salir
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    
      

<Flex direction="column" mb="3.5" mt="3.5">
  <Button size="40" bg="primary.300" _text={{
  color: "coolGray.800"
}}onPress={() => openModal("right")}>Persona Moral
 </Button>
</Flex>
</Box>    )
};



const styles = {
 
  right: {
    marginLeft: "auto",
    marginRight: 0
  }
};

export default all;
