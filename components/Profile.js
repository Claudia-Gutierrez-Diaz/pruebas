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


const Borde = () => (
  <View style={styles.borde} />
);

const LoginForm = ({navigation}) => {
    return (
     
       <NativeBaseProvider>
        <Borde/>
    <Center>
    <StatusBar bg="#3700B3" barStyle="light-content"/> 

    <HStack>
    <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
       <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Item
  onPress= {()=>{
    navigation.navigate('Profile'
       
    )}}
  >Home</Menu.Item>
        <Menu.Item onPress= {()=>{
    navigation.navigate('informacion'
       
    )}}>Informacion</Menu.Item>


        <Menu.Item onPress= {()=>{
    navigation.navigate('informacion'
       
    )}}>Inf. Fiscal</Menu.Item>



        <Menu.Item onPress= {()=>{
    navigation.navigate('I_IEPS'
       
    )}} > Inf.IEPS</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  
  
      <Input w="100%" flex={1} size="xl" variant="underlined" placeholder="¿Que deseas buscar?"> 
      </Input>
      <Button variant="unstyled" width="20" height="55"> <AntDesign name="search1" style={{ color: 'black', fontSize: 35 }}/> </Button>  
    </HStack>
   
    <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
        <Text size="2xl"> ¡Bienvenido a MySATapp! </Text>
        <Text size="lg"> Info de la aplicacion </Text>
    </Box>
  </Center>
  </NativeBaseProvider>

);
};

const styles=StyleSheet.create({
Borde:{margin:'1.5em'}
});
export default LoginForm;