import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View,Item } from 'react-native';
import { Center, HStack, Input, Box, Stack,  Button, Menu, 
  Pressable, HamburgerIcon,  IconButton, Icon, Divider, Link} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Boton from "../components/Boton";
import Profile from "./Profile";
import {AppLoading} from 'expo';
import {FontAwesome,}from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';

const LoginForm = ({navigation}) => {
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
      <br/>
    <HStack>
      <Input w="100%" flex={1} size="xl" variant="underlined" placeholder="¿Que deseas buscar?"> 
      </Input>
      <Button variant="unstyled" width="20" height="55"> <AntDesign name="search1" style={{ color: 'black', fontSize: 35 }}/> </Button>  
    </HStack>
    <br/>
    <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
        <Text size="2xl"> ¡Bienvenido a MySATapp! </Text>
        <Text size="lg"> Info de la aplicacion </Text>
    </Box>
  </Center>
  </NativeBaseProvider>

);
};
export default LoginForm;
