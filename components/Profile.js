import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View,Item } from 'react-native';
import { Center, HStack, Image, Box, Fab,  Button, Menu, 
  Pressable, HamburgerIcon,  Container, Stack, Header, Heading} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Boton from "../components/Boton";
import {AppLoading} from 'expo'; 
import {FontAwesome,}from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
 
const Profile = ({navigation}) => {
    return (
      //Cabecera 
       <NativeBaseProvider>
 <Center>       
 <StatusBar bg="#3700B3" barStyle="light-content"/> 
      <Box safeAreaTop bg="blue.400" /> 
      <HStack bg="blue.400" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center" justifyContent="space-between">
            <Button bgColor="blue.400" >
            <AntDesign name="bars" style={{ color: 'white', fontSize: 35 }}/>
            </Button>
            
          <Text color="white" fontSize="20" fontWeight="bold">
            Pagina principal 
          </Text>
        </HStack>
        <HStack>
            <Button bgColor="blue.400" >
                <MaterialCommunityIcons name="account" style={{ color: 'white', fontSize: 35 }}/>
            </Button>
        </HStack>
      </HStack>
</Center>
<br/>
    <Center>
    <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
    <Center>
    <Heading></Heading><Heading></Heading><Heading></Heading>
        <Text size="2xl"> ¡Bienvenido a MySATapp! </Text>
        <br/>
        <Text size="lg"> Aprende a usar MySATapp </Text>
        <br/>
        <Heading></Heading><Heading></Heading>
        <br/>
        <Image size={150} borderRadius={10} source={{
      uri: "https://-page-icon.png"
    }} fallbackSource={{
      uri: "data:image/png;base64,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"
    }} />


<br/>

<Center>
<HStack space={3}>
<Button  _text={{
          color: "warmGray.50",
        
          fontWeight: "medium"
        }} shadow={"3"}
  onPress= {()=>{
    navigation.navigate('Info',
    )
  }}  
        >Informacion</Button>
           
        
          <Button  _text={{
          color: "warmGray.50",
        
          fontWeight: "medium"
        }} shadow={"3"}
  onPress= {()=>{
    navigation.navigate('Home',
    )
  }}  
        >Salir</Button>
</HStack>
</Center>
      </Center>
      
    </Box>
  </Center>
  </NativeBaseProvider>

);
};

export default Profile;
